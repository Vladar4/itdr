Into the Dungeon: Revived
=========================

*Regole per avventure fantastiche da giocare con carta, matite e dadi poliedrici*

ItD:R è un regolamento leggero per il gioco di ruolo a tema fantasy pensato per offire una modalità di gioco semplificata. Raduna un po' di persone dal tuo giro di amicizie, prendete qualche dado e tuffatevi in un mondo di avventure sword & sorcery di vostra creazione!

In questo manuale troverai:
* Regole facili da imparare (quelle principali stanno su di una pagina)
* Creazione rapida dei personaggi e passaggi di livello basati su tratti
* Combattimento veloce grazie all'assenza dei tiri per colpire
* Procedura basilare per la gestione dei possedimenti ai livelli alti
* Un sistema di magia con effetti degli incantesimi facili da ricordare
* Meccaniche di gioco semplici che consentono all'Arbitro di minimizzare la preparazione delle sessioni
* Una guida per convertire i mostri da altri regolamenti
* Una collezione di regole aggiuntive e alternative da mescolare e abbinare per un'esperienza di gioco ideale
* Tabelle per trarre spunti a caso utilizzabili per la preparazione o anche nel corso delle sessioni
* Un piccolo bestiario con diversi mostri e animali selvaggi

Questo regolamento è basato su ["Into the Dungeon: Playtest Edition"](https://docs.google.com/file/d/0B6MR1KWIUR9UVVNjeUtvSDZTMUk) di [Chris McDowall](http://www.bastionland.com/).

### [Home Page](https://vladar4.github.io/itdr/)

### [Ultima Release](https://github.com/Vladar4/itdr/releases/latest)

### [itch.io](https://vladar.itch.io/into-the-dungeon-revived)

### Galleria di illustrazioni su [ArtStation](https://vladar.artstation.com/projects/zAmRZQ) e [DeviantArt](https://www.deviantart.com/vladar4/gallery/68893105/into-the-dungeon-revived)

![ItD:R cover](cover.jpg)
<details>
  <summary>Character sheets preview</summary>
  <img src="charsheets.jpg" alt="ItD:R charsheets"/>
</details>

PDF
----
Tutti i PDF si trovano nella directory "current".

| File PDF | Descrizione |
|---|---|
| itdr.pdf   | attuale versione del manuale |
| itdr_light\*.pdf | edizione light (ridotta, ventotto pagine): parts_1-4, part_a1, part_index |
| itdr_minimal\*.pdf | edizione minimal (minimale, sedici pagine): solo parts_1-4 |
| \*_booklet.pdf   | opuscoli da stampare   |
| \*_booklet_r.pdf | opuscoli da stampare con le pagine dispari ruotate al contrario |
| itdr_charsheet.pdf | scheda del personaggio |
| itdr_charsheet_double\*.pdf | foglio a doppia scheda del personaggio da stampare |
| itdr_timesheet.pdf | scheda per il tracciamento del tempo |
| itdr_timesheet_double\*.pdf | foglio a doppia scheda per il tracciamento del tempo da stampare |

Stampa
--------
* Impostazioni della pagina:
  * per `*_booklet.pdf`: Fronte-retro - lato corto (ribaltato)
  * pz `*_booklet_r.pdf`: Fronte-retro - lato lungo (standard)
* Adattamento della pagina: `nessuno`
* Ruota automaticamente e centra: `sì`

Script
-------
| Script                         | Descrizione                                                                                                             |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| cleanup.sh                     | elimina i file ausiliari                                                                                                    |
| make_all.sh                    | aggiorna TUTTI I PDF nel repository                                                                                         |
| make_booklet.sh [-r] [FILE]... | crea specifici opuscoli, tasto "-r" per ruotare le pagine dispari al contrario<br />(vedi le opzioni e i commenti negli script integrati per maggiori informazioni) |
| make_booklets.sh               | crea tutti gli opuscoli (edizione default, light, e minimal) compresi quelli con le pagine dispari capovolte (con il suffisso "_r")              |
| make_charsheets.sh             | crea tutte le versioni delle schede del personaggio
| make_timesheets.sh             | crea la scheda per il tracciamento del tempo                                                                                           |

Dipendenze
------------
[TeX Live](https://www.tug.org/texlive/)

### Arch
`sudo pacman -S texlive-bin texlive-core texlive-fontsextra texlive-latexextra`

### Debian
`sudo apt-get install texlive-latex-base texlive-fonts-extra texlive-latex-extra`


Cosa c'è di diverso rispetto a "Into the Dungeon: Playtest Edition"?
------------------------------------------------------------

* Le meccaniche di gioco sono più vicine a "Into the Odd"
* Tratti e background al posto delle classi
* Sistema di magia aggiornato e rifinito
* Tiri Conoscenza
* Regola per il consumo di bacchette e verghe
* Esempi di oggetti magici
* Esempi di incontri casuali e ostacoli
* Guida per la conversione dei mostri
* Idee per la creazione di mostri ed esempi di capacità per i mostri
* Grande quantità di regole aggiuntive e alternative (Appendice A)
* Bestiario ampliato (Appendice B)
* Lista Incantesimi e Indice analitico

Changelog
---------
### v2.2-it2

* Correzione di refusi e rifinitura del testo in alcuni punti

### v2.2-it1

* Prima stesura da revisionare del regolamento completo (edizione default, light, minimal) in italiano
* Contenuto non tradotto: strumenti online
* Per il changelog del gioco originale, si rimanda alla pagina di quest'ultimo
