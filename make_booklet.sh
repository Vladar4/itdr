#!/bin/sh
# Make booklets
# Usage: sh make_booklet.sh [-r] [FILE]...
# echo -r : rotate odd pages upside down

ROTATE=0 # rotate odd pages upside down

if [ $# -gt 0 ]
then
    while [ $# -gt 0 ]
    do
        if [ $1 = "-r" ]
        then
            ROTATE=1
        else
            TMP="${1%.*}"_tmp.pdf
            pdfjam "$1" --letterpaper --keepinfo -o "$TMP"
            if [ $ROTATE -gt 0 ]
            then
                pdfjam --booklet true --landscape --keepinfo "$TMP" -o "${1%.*}"_booklet_r.pdf
            else
                pdfjam --booklet true --landscape --keepinfo "$TMP" -o "${1%.*}"_booklet.pdf --preamble '\usepackage{everyshi} \makeatletter \EveryShipout{\ifodd\c@page\pdfpageattr{/Rotate 180}\fi} \makeatother'
            fi
            rm "$TMP"
        fi
        shift
    done
else
    echo Usage: sh make_booklet.sh [-r] [FILE]...
    echo -r : rotate odd pages upside down
fi

exit 0

