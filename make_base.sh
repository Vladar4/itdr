#!/bin/sh
# Update base PDFs in the repository
DIR="current"
LIST="itdr itdr_light itdr_minimal"

for FILE in $LIST
do
    for i in `seq 3`
    do
        pdflatex -synctex=1 -interaction=nonstopmode -jobname="$FILE" "$FILE"
    done
    cp "${FILE}.pdf" "$DIR"
done

sh cleanup.sh
exit 0

