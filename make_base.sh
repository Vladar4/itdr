#!/bin/sh
# Update base PDFs in the repository

DIR="current"
LIST="itdr itdr_light itdr_minimal"

mkdir -p "$DIR"

for FILE in $LIST
do
    for i in $(seq 3)
    do
        pdflatex -synctex=1 -interaction=nonstopmode -jobname="$FILE" "$FILE"
    done

    # compress
    gs -sDEVICE=pdfwrite \
        -dPrinted=false \
        -dCompatibilityLevel=1.4 \
        -dNOPAUSE -dQUIET -dBATCH \
        -sOutputFile="${FILE}-compressed.pdf" \
        "${FILE}.pdf"

    mv "${FILE}-compressed.pdf" "${FILE}.pdf"

    cp "${FILE}.pdf" "$DIR"
done

sh cleanup.sh
exit 0

