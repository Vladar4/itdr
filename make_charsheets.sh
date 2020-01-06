#!/bin/sh
# Update charsheets in the repository
DIR="current"
NAME="itdr_charsheet"
DOUBLE="${NAME}_double"

# charsheet
pdflatex -interaction=nonstopmode -jobname="$NAME" "$NAME"
cp "$NAME".pdf "$DIR"
# double_a4
pdflatex -interaction=nonstopmode -output-directory="$DIR" -jobname="${DOUBLE}_a4" "\documentclass[a4paper]{article} \input{${DOUBLE}.tex}"
# double_letter
pdflatex -interaction=nonstopmode -output-directory="$DIR" -jobname="${DOUBLE}_letter" "\documentclass[letterpaper]{article} \input{${DOUBLE}.tex}"

sh cleanup.sh "$DIR"
exit 0

