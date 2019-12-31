#!/bin/sh
pdfjam itdr_current.pdf --letterpaper --keepinfo -o itdr_tmp.pdf
pdfjam --booklet true --landscape --keepinfo itdr_tmp.pdf -o itdr_booklet_duplex.pdf --preamble '\usepackage{everyshi} \makeatletter \EveryShipout{\ifodd\c@page\pdfpageattr{/Rotate 180}\fi} \makeatother'
rm itdr_tmp.pdf
exit 0
