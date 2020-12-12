#!/bin/sh
# Update timesheets in the repository

DIR="current/timesheet"
NAME="itdr_timesheet"
DOUBLE="${NAME}_double"

# plain timesheets
pdflatex -interaction=nonstopmode -jobname="$NAME" "\let\ifplain\iftrue\input{${NAME}}"
cp "$NAME".pdf "${DIR}/${NAME}_plain.pdf"
# double_a4
pdflatex -interaction=nonstopmode -output-directory="$DIR" -jobname="${DOUBLE}_plain_a4" "\documentclass[a4paper]{article} \input{${DOUBLE}.tex}"
# double_letter
pdflatex -interaction=nonstopmode -output-directory="$DIR" -jobname="${DOUBLE}_plain_letter" "\documentclass[letterpaper]{article} \input{${DOUBLE}.tex}"

# fancy timesheets
pdflatex -interaction=nonstopmode -jobname="$NAME" "$NAME" # first run
pdflatex -interaction=nonstopmode -jobname="$NAME" "$NAME" # second run
cp "$NAME".pdf "${DIR}/${NAME}_fancy.pdf"
# double_a4
pdflatex -interaction=nonstopmode -output-directory="$DIR" -jobname="${DOUBLE}_fancy_a4" "\documentclass[a4paper]{article} \input{${DOUBLE}.tex}"
# double_letter
pdflatex -interaction=nonstopmode -output-directory="$DIR" -jobname="${DOUBLE}_fancy_letter" "\documentclass[letterpaper]{article} \input{${DOUBLE}.tex}"

sh cleanup.sh
sh cleanup.sh "$DIR"
exit 0

