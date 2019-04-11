#!/bin/sh
pdfjam itdr_current.pdf --letterpaper --keepinfo -o itdr_tmp.pdf
pdfjam --booklet true --landscape --keepinfo itdr_tmp.pdf -o itdr_booklet.pdf
rm itdr_tmp.pdf
exit 0
