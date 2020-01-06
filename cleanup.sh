#!/bin/sh
if [ $# -eq 1 ]
then
    cd "$1"
fi
rm *.aux *.bbl *.blg *.idx *.ilg *.ind *.log *.out *.synctex.gz *.toc
exit 0
