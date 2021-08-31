#!/bin/sh
# Make booklets
# Usage: sh make_booklet.sh [-r] [FILE]...
# echo -r : rotate odd pages upside down
#
# Recommended trim size: 5.4in x 8in

ROTATE=0            # rotate odd pages upside down

# OPTIONS
DELTA="-0.85in 0in" # space between pages (horizontal vertical)
SCALE="0.72"        # absolute page scale
OFFSET="-0in 0in"   # displace page origins (to_outer to_top)

if [ $# -gt 0 ]
then
    while [ $# -gt 0 ]
    do
        if [ "$1" = "-r" ]
        then
            ROTATE=1
        else
            TMP="${1%.*}"_tmp.pdf
            pdfjam "$1" --letterpaper --keepinfo --twoside --offset "${OFFSET}" -o "$TMP"
            if [ $ROTATE -gt 0 ]
            then
                pdfjam --a4paper --booklet true --landscape --delta "${DELTA}" --noautoscale true --scale "${SCALE}" --keepinfo "$TMP" -o "${1%.*}"_booklet_r.pdf
            else
                pdfjam --a4paper --booklet true --landscape --delta "${DELTA}" --noautoscale true --scale "${SCALE}" --keepinfo "$TMP" -o "${1%.*}"_booklet.pdf --preamble '\usepackage{everyshi} \makeatletter \EveryShipout{\ifodd\c@page\pdfpageattr{/Rotate 180}\fi} \makeatother'
            fi
            rm "$TMP"
        fi
        shift
    done
else
    echo Usage: sh make_booklet.sh [-r] [FILE]...
    echo -r : rotate odd pages upside down
    echo
    echo Recommended trim size: 5.5in x 8in
fi

exit 0

