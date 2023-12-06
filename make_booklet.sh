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
OFFSET="0in 0in"    # displace page origins (to_outer to_top)

# PDF META FIELD SED PATTERN
PATTERN="s/^[^:]*:[ \t]*//"

if [ $# -gt 0 ]
then
    while [ $# -gt 0 ]
    do
        if [ "$1" = "-r" ]
        then
            ROTATE=1
        else
            TMP="${1%.*}"_tmp.pdf
            # META
            INFO=$(pdfinfo "$1")
            TITLE="$(echo "$INFO" | grep -E "Title" | sed "$PATTERN")"
            SUBJECT="$(echo "$INFO" | grep -E "Subject" | sed "$PATTERN")"
            KEYWORDS="$(echo "$INFO" | grep -E "Keywords" | sed "$PATTERN")"
            AUTHOR="$(echo "$INFO" | grep -E "Author" | sed "$PATTERN")"

            pdfjam "$1" -o "$TMP" \
                --letterpaper --keepinfo --twoside \
                --offset "${OFFSET}"
            if [ $ROTATE -gt 0 ]
            then
                OUTPUT="${1%.*}"_booklet_r.pdf
                pdfjam "$TMP" -o "$OUTPUT" \
                    --a4paper --landscape \
                    --booklet true --noautoscale true \
                    --delta "${DELTA}" \
                    --scale "${SCALE}" \
                    --pdftitle "$TITLE" \
                    --pdfsubject "$SUBJECT" \
                    --pdfkeywords "$KEYWORDS" \
                    --pdfauthor "$AUTHOR"
            else
                OUTPUT="${1%.*}"_booklet.pdf
                pdfjam "$TMP" -o "$OUTPUT" \
                    --a4paper --landscape \
                    --booklet true --noautoscale true \
                    --delta "${DELTA}" \
                    --scale "${SCALE}" \
                    --preamble '\usepackage{everyshi} \makeatletter \EveryShipout{\ifodd\c@page\pdfpageattr{/Rotate 180}\fi} \makeatother' \
                    --pdftitle "$TITLE" \
                    --pdfsubject "$SUBJECT" \
                    --pdfkeywords "$KEYWORDS" \
                    --pdfauthor "$AUTHOR"
            fi
            rm "$TMP"
        fi
        shift
    done
else
    echo Usage: sh make_booklet.sh [-r] [FILE]...
    echo -r : rotate odd pages upside down
    echo
    echo Recommended trim size: 5.4in x 8in
fi

exit 0

