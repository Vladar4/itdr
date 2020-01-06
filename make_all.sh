#!/bin/sh
# Update ALL PDFs in the repository

sh make_base.sh
sh make_booklets.sh
sh make_charsheets.sh

exit 0

