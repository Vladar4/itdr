#!/bin/sh
# Update booklets in the repository

DIR="current"
LIST="${DIR}/itdr.pdf ${DIR}/itdr_light.pdf ${DIR}/itdr_minimal.pdf"

mkdir -p "$DIR"

sh make_booklet.sh ${LIST}
sh make_booklet.sh -r ${LIST}
exit 0

