Into the Dungeon: Revived
=========================

*Rules for fantastic adventure games playable with paper and pencil and polyhedral dice*

The ruleset is based on ["Into the Dungeon: Playtest Edition"](https://docs.google.com/file/d/0B6MR1KWIUR9UVVNjeUtvSDZTMUk) by [Chris McDowall](http://www.bastionland.com/).

### [Home Page](https://vladar4.github.io/itdr/)

### [Latest Release](https://github.com/Vladar4/itdr/releases/latest)

### Illustration gallery at [ArtStation](https://vladar.artstation.com/projects/zAmRZQ) and [DeviantArt](https://www.deviantart.com/vladar4/gallery/68893105/into-the-dungeon-revived)

![ItD:R cover](cover.jpg)
<details>
  <summary>Character sheets preview</summary>
  <img src="charsheets.jpg" title="ItD:R charsheets"/>
</details>

PDFs
----
All PDFs are located in the "current" directory.
| PDF file | Description |
|---|---|
| itdr.pdf   | current version of the book |
| itdr_light\*.pdf | light edition (28 pages): parts_1-4, part_a1, part_index, part_notes |
| itdr_minimal\*.pdf | minimal edition (16 pages): parts_1-4 only |
| \*_booklet.pdf   | booklets for printing   |
| \*_booklet_r.pdf | booklets for printing with odd pages rotated upside down |
| itdr_charsheet.pdf | character sheet |
| itdr_charsheet_double\*.pdf | double character sheets for printing |

Scripts
-------
| Script | Description |
|---|---|
| cleanup.sh | clean auxiliary files |
| make_all.sh | update ALL PDFs in the repository |
| make_booklet.sh [-r] [FILE]... | make specified booklets, "-r" key to rotate odd pages upside down |
| make_booklets.sh | make all booklets (default, light, and minimal) including ones with upside down odd pages (with suffix "_r") |
| make_charsheets.sh | make all charsheet versions |

Dependencies
------------
[TeX Live](https://www.tug.org/texlive/)

### Arch
`sudo pacman -S texlive-bin texlive-core texlive-fontsextra texlive-latexextra`

### Debian
`sudo apt-get install texlive-latex-base texlive-fonts-extra texlive-latex-extra`


What is different from "Into the Dungeon: Playtest Edition"?
------------------------------------------------------------

* Game mechanics are closer to "Into the Odd"
* Features and backgrounds instead of classes (classes are kept in the Appendix C as an alternative)
* Updated and refined magic system
* Knowledge rolls
* Wands and rods usage rule
* Example magic items
* Example random encounters and obstacles
* Monster conversion guide
* Ideas for monster creation and example monster abilities
* Great amount of additional and alternative rules (Appendix A)
* Expanded bestiary (Appendix B)
* Spell List and Index

Changelog
---------

### v1.2.1
* light and minimal editions of the book
* character sheets
* new building scripts
#### Part 1
* fixed and updated Halfling Ancestry Feature
#### Part 4
* 2nd Circle:
  * Owl's Wisdom: now grants Advantage on WIL Saves
* 3rd Circle:
  * Displacement: now Persistent
#### Other
* Mule and Horse rebalance
* Miscellaneous rules clarifications

### v1.2
#### Part 1
* Berserker: a bonus is limited to melee
* Commander: a command does not count as action
* Healer: starts with 5s worth of healing supplies
* Skilled: grants a pair of expertises instead of one
* A note on Shields requiring one hand to use
* Adventuring Gear list update
* Stats for a mule and horse
#### Part 2
* An item swap option for the Taking your Turn rule
* Ganging Up bonus is limited up to +5
* Mounted bonus is limited to melee and unmounted opponents
* Morale rule exemption for mindless or fearless opponents
* An optional slower experience progression rule
#### Part 3
* An expanded note on walls and sieges
#### Part 4
* A note on Cantrips and ongoing effects
* Better explanation of damage from casting spells
* A note on Scrolls
* Cantrips:
  * Guided Strike: gives a bonus weapon Damage die instead of Enhancing
  * Light: removed an option to cast onto a creature; now requires the caster to hold the target object
  * Resistance: now Persistent
* 1st Circle:
  * Burning Hands: does not ignore Armour but deals d6 Damage
  * Identify: added a note on hidden properties, curses, etc.
  * Mount: added a Damage effect
  * Silent image: is motionless
  * Unseen Servant: changed STR from 3 to 5
* 2nd Circle:
  * Continual Flame: added a note on casting on objects
  * Fog Cloud: added a note on ranged attacks Impairment
  * Gust of Wind: specified range
  * Levitate: added an aftereffect and note on heavy targets
  * Misdirection: now Persistent
  * Phantom Trap: now Persistent
  * Resist Energy: renamed to Resist Element
  * Rope Trick: clarified description
  * See Invisibility: specified range
* 3rd Circle:
  * Arcane Sight: improved description and effect
  * Gaseous Form: the target is a willing creature
  * Major Illusion: a note on disguise
  * Magic Circle: now Persitent; affects a certain type of unnatural beings
  * Sepia Snake Sigil: specified symbol size
  * Shrink Item: a note on weight
  * Sleet Storm: specified range
* 4th Circle:
  * Fire Trap: now Persistent
  * Ice Storm: replaced by a Chain Lightning spell
  * Minor Creation: now Persistent
  * Phantasmal Killer: attacks once before disappearing
  * Polymorph: specified permanence of the effect
  * Solid Fog: specified range
  * Symbol of Pain: specified symbol size
* 5th Circle:
  * Baleful Polymorth: specified permanence of the effect
  * Blight: now affects d12 targets
  * Cloudkill: specified size, speed, and living targets
  * Major Creation: now Persistent
  * Symbol of Sleep: specified size; now grants a WIL Save
* Minor phrasing fixes
#### Part 5
* A note on Damage dice
* A note on poison targets
#### Part 6
* 20 example magic items
#### Part 7
* Example Random Encounters tables
* Example Obstacles
#### Part 8
* Ideas for Monster Creation
* Example Monster Abilities
#### Appendix A renamed to C
#### new Appendix A:
* Characters:
  * Epic Characters
  * Mundane Characters
* Gods, Religion, and Disciples
* Injuries
* Light
* Living Expenses
* Load Capacity
* Madness
* Magic Mishaps
* Manufacture of Magic Equipment
* Pets' Experience
* Rations
* Resources
* Structures and Sieges:
  * Construction
  * Siege Engines
  * Structural Damage
* Travel
* Random Tables and Inspiration:
  * Random Characters
  * Random Magic Items
  * Random Monsters
  * Random Non-Player Characters
#### Example Monsters moved to Appendix B
#### new Appendix B:
* New monsters:
  * Hellhound
  * Imp
  * Manticore
  * Mummy
  * Ogre
  * Troll
  * Yeti
* Mundane Beasts section with 10 beasts
#### Spell List
* Added spell circle info


### v1.1
* Mystic advancement: Spell Circle is limited by Mystic Level instead of Experience Level
* Mystic's Tome is required when preparing spells
* Damage from casting spells targets WIL instead of STR
* Signature spells can be cast without preparation
* Spells changes:
  * Charm Person: targets humanoids only
  * Magic Missile: d4 instead of d6 damage
  * Ray of Enfeeblement: lasts until Rest instead of Healing
  * Shield: now blocks Magic Missiles
  * False Life: now affects lost STR instead of HP
  * Spectral Hand: clarified usage
  * Flame Arrows: "bonus damage" instead of "extra damage"
  * Lightning Bolt: d8 instead of d10 damage
  * Nondetection: now Persistent
  * Shout: d8 instead of d10 damage
  * Charm Monster: renamed to Charm Creature, targets all creatures
  * Remove Curse: now target any magical Disadvantages or Impairments
* Note on elemental damage
* Improved and clarified phrasing
* Index update
* Box style update


### v1.0.1
Bugfix release: force PDF 1.4 for the Acrobat compatibility.

### v1.0
First official release.

### v0.9.4-beta
First public beta-release.

