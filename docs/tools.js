/********************/
/* RANDOM CHARACTER */
/********************/

var opt;
var iStats;

function stat() {
    return nd(3, 6);
}

function swapStats(idx1, idx2) {
    [iStats[idx1], iStats[idx2]] = [iStats[idx2], iStats[idx1]];
}

function debugRNG(func, min, max, n=100000) {
    let rng = new Array(max-min+1);
    rng.fill(0);
    for(let i=0; i<n; i++) {
        const s = func();
        rng[s-min] += 1;
    }
    let checksum = 0;
    console.clear();
    for(let i=0; i<rng.length; i++) {
        const percent = rng[i]*100/n;
        checksum += percent;
        console.log(i+min, ": ", rng[i], " (", percent, "%)");
    }
    console.log("CHECKSUM: ", checksum, "%");
}

function randomSimpleMelee() {
    let result = "NONE";
    switch(d(4)) {
        case 1: result = "bastone ferrato"; break;
        case 2: result = "forcone"; break;
        case 3: result = "maglio spaccalegna"; break;
        case 4: result = "martello da fabbro"; break;
        default: return "NONE";
    }
    result += " (d6, 2-mani)";
    return result;
}

function randomMartialMelee() {
    let result = "NONE";
    switch(d(8)) {
        case 1: result = "alabarda"; break;
        case 2: result = "ascia"; break;
        case 3: result = "lancia"; break;
        case 4: result = "lancia lunga"; break;
        case 5: result = "martello da guerra"; break;
        case 6: result = "mazza"; break;
        case 7: result = "pugnale"; break;
        case 8: result = "spada"; break;
        default: return "NONE";
    }
    if(result == "lancia lunga") result += " (d8, 2-mani se non sei in sella)";
    else result += " (d6/d8)";
    return result;
}

function randomSimpleRanged() {
    let result = "NONE";
    switch(d(6)) {
        case 1: result = "arco da caccia"; break;
        case 2: result = "boomerang"; break;
        case 3: result = "fionda"; break;
        case 4: result = "freccette"; break;
        case 5: result = "pugnali da lancio"; break;
        case 6: result = "shuriken"; break;
        default: return "NONE";
    }
    result += " (d4)";
    return result;
}

function randomMartialRanged() {
    let result = "NONE";
    switch(d(4)) {
        case 1: result = "arco lungo"; break;
        case 2: result = "balestra"; break;
        case 3: result = "moschetto"; break;
        case 4: result = "rivoltella"; break;
        default: return "NONE";
    }
    result += " (d6)";
    return result;
}

const ropeItem = "corda di 10 piedi";

function randomGear() {
    let result = "NONE";
    switch(d(12)) {
        case 1: return ropeItem;
        case 2: return "bottiglia";
        case 3: return "candela";
        case 4: return "cartapecora";
        case 5: return randomBool() ? "carte da gioco" : "dadi";
        case 6: return "catena";
        case 7: return "esca e pietra focaia";
        case 8: return "gessetto";
        case 9: return "sacco";
        case 10: return "spuntone";
        case 11: return "tenda";
        case 12: return "triboli";
        default: return "NONE";
    }
}

function randomTool() {
    let result = "NONE";
    switch(d(20)) {
        case 1: return "accetta";
        case 2: return "canna da pesca";
        case 3: return "chiave serratubi";
        case 4: return "forbici";
        case 5: return "grimaldelli";
        case 6: return randomBool() ? "lima" : "raspa";
        case 7: return "lucchetto";
        case 8: return "martello";
        case 9: return "mazzuola e scalpello";
        case 10: return "pala";
        case 11: return "pertica ripieghevole";
        case 12: return "piccozza";
        case 13: return "piedi di porco";
        case 14: return "pinza";
        case 15: return "rampino";
        case 16: return "sega";
        case 17: return "set da scrittura";
        case 18: return "tenaglia";
        case 19: return "rampino";
        case 20: return "trappola per animali";
        default: return "NONE";
    }
}

function randomPet() {
    let result = "NONE";
    switch(d(4)) {
        case 1: return "gatto (FOR 6, VOL 8, 2pf, d4 Artigli)";
        case 2: return "gufo (FOR 6, VOL 6, 2pf, d4 Artigli)";
        case 3: return "meticcio (FOR 8, VOL 6, 2pf, d4 Morso)";
        case 4: return "pappagallo (FOR 6, VOL 6, 2pf, d4 Artigli)";
        default: return "NONE";
    }
}

function randomGearOrTool(items) {
    let result = [];
    let next = "";
    if(randomBool()) {
        for(let i=0; i<2; i++) {
            do {
                next = randomGear();
            }
            while((next != ropeItem) && (items.includes(next) || result.includes(next)));
            result.push(next);
        }
    }
    else {
        do {
            next = randomTool();
        }
        while(items.includes(next) || result.includes(next));
        result.push(next);
    }
    return result;
}

const sFeatureList = [
    "NONE",
    "Assassino",
    "Belva",
    "Berserker",
    "Blindato",
    "Cecchino",
    "Comandante",
    "Combattente",
    "Duellante",
    "Guaritore",
    "Mistico",
    "Provetto",
    "Rissaiolo",
    "Spaccone",
    "Tattico",
    "Taumaturgo"]; /* 15 */

const sCantripList = [
    "NONE",
    "accendere/spegnere",
    "colpo guidato",
    "frastornare",
    "iettatura",
    "individuazione del magico",
    "individuazione del veleno undead",
    "mano magica",
    "marchio arcano",
    "occultare",
    "ostacolare la non morte",
    "prestidigitazione",
    "provocazione",
    "raggio di gelo",
    "resistenza",
    "riparare",
    "rumore fantasma",
    "scintilla",
    "segnale luminoso",
    "spruzzo acido",
    "tacitare"]; /* 20 */

const sSpellList = [
    "NONE",
    "allarme",
    "animare corda",
    "auto-mascheramento",
    "blocca porta",
    "caduta piume",
    "camuffamento",
    "cancella",
    "charme",
    "colla",
    "comprensione dei linguaggi",
    "convoca creatura",
    "coraggio",
    "dardo incantato",
    "destriero",
    "disco fluttuante",
    "folata di vento",
    "foschia coprente",
    "grasso",
    "identifica",
    "immagine silenziosa",
    "incuti paura",
    "individuazione dei caduti",
    "individuazione delle porte segrete",
    "ingrandisci/rimpicciolisci",
    "ipnotismo",
    "mani brucianti",
    "pirotecnica",
    "protezione",
    "risata orrida",
    "ritirata rapida",
    "salto",
    "sciame",
    "scudo",
    "servit\u00F9 invisibile",
    "sonno",
    "sopportare elementi",
    "spray colorato",
    "stretta folgorante",
    "tocco gelido",
    "vero colpo"]; /* 40 */

const sSkillList = [
    "NONE",
    "accudimento degli animali",
    "atletica",
    "furtivit\u00E0",
    "furto con scasso",
    "navigazione",
    "negoziazione",
    "raggiro",
    "rapidit\u00E0",
    "seguire tracce",
    "tolleranza degli alcolici"]; /* 10 */

const sGiftList = [
    "NONE",
    "armonia",
    "castigo",
    "comando",
    "controllo",
    "credenza",
    "egida",
    "legame",
    "presagio",
    "risveglio",
    "scacciata"]; /* 10 */

const sBackgroundList = [
    "NONE",
    "Cacciatore",
    "Criminale",
    "Marinaio",
    "Menestrello",
    "Nobile",
    "Operaio",
    "Soldato",
    "Studioso" /* 8 */
    ];

function generateRandomStats() {
    const out = docId('out_RandomStats');
    iStats = [stat(), stat(), stat(), stat()];
    out.innerHTML =
        "FOR " + iStats[0] +
        ", DES " + iStats[1] +
        ", VOL " + iStats[2] +
        ", Denaro " + iStats[3];
    docId('out_RandomStats').style.display="";
    docId('swap_RandomCharacter').style.display="";
    docId('out_RandomCharacter').innerHTML="";
}

function generateRandomCharacter(swap) {
    const out = docId('out_RandomCharacter');
    docId('out_RandomStats').style.display="none";
    docId('swap_RandomCharacter').style.display="none";

    switch(swap) {
        case 0: break;
        /* FOR <-> DES */
        case 12: swapStats(0, 1); break;
        /* FOR <-> VOL */
        case 13: swapStats(0, 2); break;
        /* FOR <-> Money */
        case 14: swapStats(0, 3); break;
        /* DES <-> VOL */
        case 23: swapStats(1, 2); break;
        /* DES <-> Money */
        case 24: swapStats(1, 3); break;
        /* VOL <-> Money */
        case 34: swapStats(2, 3); break;
        default: break;
    }

    log("FOR " + iStats[0] + ", DES " + iStats[1] + ", VOL " + iStats[2] + ", Money " + iStats[3]);

    /* FEATURE */
    let iFeature = parseInt(docId('select_feature').value);
    if(iFeature == 0) iFeature = d(high(sFeatureList));
    let sFeature = sFeatureList[iFeature];
    log("Feature " + iFeature + " (" + sFeature + ")");
    let bBrawler = false; /* for unarmoured defense */
    let bMystic = false; /* can't use armour */
    let iPets = 0;
    let maxPets = 1;
    let sPets = "";
    let sFeatureItems = [];
    let sTome = "";
    switch(iFeature) {
        case 0: /* NONE */
            break;

        case 2: /* Beastmaster */
            sFeature += " 1 (max 2 compagni animali)";
            maxPets = 2;
            break;

        case 7: /* Warrior */
            sFeature += " 1 (d4 bonus dal Danno dell'arma)"
            break;

        case 9: /* Healer */
            sFeatureItems.push("5s&nbsp;in medicamenti");
            break;

        case 10: /* Mystic */
            sFeature += " 1";
            bMystic = true;
            sFeatureItems.push("Focus del Mistico", "Tomo del Mistico");
            let cantrips = shuffledIndex(sCantripList, 2).sort(
                (function(a, b) {return a - b;}));
            let spells = shuffledIndex(sSpellList, 6).sort(
                (function(a, b) {return a - b;}));
            sTome = "Contenuto del Tomo del Mistico = Trucchetti: " +
                sCantripList[cantrips[0]] + ", " +
                sCantripList[cantrips[1]]+ ";<br/>1\u00B0 Cerchio: " +
                sSpellList[spells[0]] + ", " +
                sSpellList[spells[1]] + ", " +
                sSpellList[spells[2]] + ", " +
                sSpellList[spells[3]] + ", " +
                sSpellList[spells[4]] + ", " +
                sSpellList[spells[5]] + ".";
            break;

        case 11: /* Skilled */
            let skills = shuffledIndex(sSkillList, 2).sort(
                (function(a, b) {return a - b;}));
            sFeature += " (" + sSkillList[skills[0]] + ", " + sSkillList[skills[1]] + ")";
            break;

        case 12: /* Brawler */
            sFeature += " 1 (d4 bonus per il Danno senz'armi)";
            bBrawler = true;
            break;

        case 15: /* Thaumaturge */
            let gifts = shuffledIndex(sGiftList, 2).sort(
                (function(a, b) {return a - b;}));
            sFeature += " 1 (Dado dono d4, " + sGiftList[gifts[0]] + ", " + sGiftList[gifts[1]] + ")";
            break;

        default: break;
    }

    /* PF */
    let hp = 0;
    switch(iFeature) {
        case 3: /* Berserker */
        case 4: /* Ironclad  */
        case 7: /* Warrior */
        case 8: /* Duellist */
        case 12: /* Brawler */
        case 13: /* Swashbuckler */
        case 14: /* Tactician */
            hp = Math.max(d(6), d(6));
        default:
            hp = d(6);
            break;
    }

    /* BACKGROUND */
    let iBackground = parseInt(docId('select_background').value);
    if(iBackground == 0) iBackground = d(high(sBackgroundList));
    let sBackground = sBackgroundList[iBackground];
    log("Background " + iBackground + " (" + sBackground + ")");
    let bBackgroundMelee = false;
    let bTwohandedMelee = false;
    let bBackgroundRanged = false;
    let sBackgroundWeapons = "";
    let sBackgroundItems = [];
    let iRope = 0;
    switch(iBackground) {
        case 1: /* Hunter */
            sBackgroundWeapons = randomBool() ? "arco lungo (d6)" : "moschetto semplice (d6)";
            bBackgroundRanged = true;
            sBackgroundItems.push("trappola per animali");
            sBackground += " (dimostri bravura nella caccia e nel seguire tracce)";
            break;

        case 2: /* Criminal */
            sBackgroundWeapons = "pugnale (d6/d8)";
            bBackgroundMelee = true;
            switch(d(6)) {
                case 1: sBackgroundItems.push("carte segnate"); break;
                case 2: sBackgroundItems.push("dadi truccati"); break;
                case 3: sBackgroundItems.push("grimaldelli"); break;
                case 4: sBackgroundItems.push("manganello (sfollagente)"); break;
                case 5: sBackgroundItems.push("piede di porco"); break;
                case 6: sBackgroundItems.push("rampino"); break;
            }
            sBackground += " (con un contatto nel mondo del crimine)";
            break;

        case 3: /* Sailor */
            iPets += 1;
            sPets = randomBool() ?
                "pappagallo parlante(FOR 6, VOL 6, 2pf, d4 Artigli)" :
                "scimietta (FOR 7, VOL 7, 3pf, d4 Morso)";
            sBackground += " (ti intendi di navigazione marittima)";
            break;

        case 4: /* Minstrel */
            switch(d(10)) { /* random instrument */
                case 1: sBackgroundItems.push(randomBool() ? "arpa" : "lira"); break;
                case 2: sBackgroundItems.push(randomBool() ? "cetra" : "dulcimer"); break;
                case 3: sBackgroundItems.push(randomBool() ? "ciaramella" : "cromorno"); break;
                case 4: sBackgroundItems.push(randomBool() ? "cornamusa" : "zampogna"); break;
                case 5: sBackgroundItems.push(randomBool() ? "flauto" : "ocarina"); break;
                case 6: sBackgroundItems.push("ghironda"); break;
                case 7: sBackgroundItems.push(randomBool() ? "liuto" : "mandolino"); break;
                case 8:
                    switch(d(3)) {
                        case 1: sBackgroundItems.push("ribeca"); break;
                        case 2: sBackgroundItems.push("viola"); break;
                        case 3: sBackgroundItems.push("violino"); break;
                        default: break;
                    }
                    break;
                case 9: sBackgroundItems.push("scacciapensieri"); break;
                case 10: sBackgroundItems.push(randomBool() ? "tamburello" : "tamburo"); break;
                default: break;
            }
            sBackground += " (4 su 6 possibilit\u00E0 di conoscere leggende e racconti)";
            break;

        case 5: /* Noble */
            iStats[3] *= 2; /* double money */
            sBackground += " (il tuo nome ha ancora un certo peso)";
            break;

        case 6: /* Labourer */
            bBackgroundMelee = true;
            bTwohandedMelee = true;
            switch(d(6)) {
                case 1:
                    sBackground = "Contadino";
                    sBackgroundWeapons = "forcone (d6, 2-mani)";
                    sBackgroundItems.push("falcetto", "setaccio");
                    break;
                case 2:
                    sBackground = "Giardiniere";
                    sBackgroundWeapons = "falce (d6, 2-mani)";
                    sBackgroundItems.push("accetta", "pala");
                    break;
                case 3:
                    sBackground = "Minatore";
                    sBackgroundWeapons = "zappa (d6, 2-mani)";
                    sBackgroundItems.push("mazzuolo", "trapano");
                    break;
                case 4:
                    sBackground = "Muratore";
                    sBackgroundWeapons = "martello da fabbro (d6, 2-mani)";
                    sBackgroundItems.push("secchio", "spatola");
                    break;
                case 5:
                    sBackground = "Pastore";
                    sBackgroundWeapons = "bastone ferrato (d6, 2-mani)";
                    sBackgroundItems.push("forbici", "frusta");
                    break;
                case 6:
                    sBackground = "Taglialegna";
                    sBackgroundWeapons = "maglio spaccalegna (d6, 2h)";
                    sBackgroundItems.push("cuneo", "sega");
                    break;
                default: break;
            }
            iRope = 20;
            sBackground += " (la gente comune ti tratta come sua pari)";
            iStats[3] += nd(2, 4); /* extra 2d4s */
            break;

        case 7: /* Soldier */
            switch(d(6)) {
                case 1:
                    sBackground += " (arciere)";
                    sBackgroundWeapons = "arco lungo (d6)";
                    bBackgroundRanged = true;
                    break;
                case 2:
                    sBackground += " (cavaliere)";
                    sBackgroundWeapons = "lancia lunga (d8, 2-mani se non sei in sella)";
                    bBackgroundMelee = true;
                    bTwohandedMelee = true;
                    break;
                case 3:
                    sBackground += " (moschettiere)";
                    sBackgroundWeapons = "moschetto (d6)";
                    bBackgroundRanged = true;
                    break;
                case 4:
                    sBackground += " (picchiere)";
                    sBackgroundWeapons = "picca (d8, 2h)";
                    bBackgroundMelee = true;
                    bTwohandedMelee = true;
                    break;
                case 5:
                    sBackground += " (spadaccino)";
                    sBackgroundWeapons = "claymore (d8, 2h)";
                    bBackgroundMelee = true;
                    bTwohandedMelee = true;
                    break;
                case 6:
                    sBackground += " (ufficiale)";
                    sBackgroundWeapons = "rivoltella (d6)";
                    bBackgroundRanged = true;
                    break;
                default: break;
            }
            break;

        case 8: /* Scholar */
            let sStudyArea = "";
            let sStudySpecialization = "";
            switch(d(12)) {
                case 1:
                    sStudyArea = "Filologia";
                    sStudySpecialization = "folclore e letteratura";
                    break;
                case 2:
                    sStudyArea = "Filologia";
                    sStudySpecialization = "lingue morte";
                    break;
                case 3:
                    sStudyArea = "Filologia";
                    sStudySpecialization = "lingue straniere";
                    break;
                case 4:
                    sStudyArea = "Scienze Biologiche";
                    sStudySpecialization = "erboristeria";
                    break;
                case 5:
                    sStudyArea = "Scienze Biologiche";
                    sStudySpecialization = "medicina";
                    break;
                case 6:
                    sStudyArea = "Scienze Biologiche";
                    sStudySpecialization = "zoologia";
                    break;
                case 7:
                    sStudyArea = "Scienze Fisiche";
                    sStudySpecialization = "astronomia e fisica";
                    break;
                case 8:
                    sStudyArea = "Scienze Fisiche";
                    sStudySpecialization = "chimica"
                    break;
                case 9:
                    sStudyArea = "Scienze Fisiche";
                    sStudySpecialization = "geoscienza";
                    break;
                case 10:
                    sStudyArea = "Storia";
                    sStudySpecialization = "archeologia";
                    break;
                case 11:
                    sStudyArea = "Storia";
                    sStudySpecialization = "cultura e religione";
                    break;
                case 12:
                    sStudyArea = "Storia";
                    sStudySpecialization = "geografia e politica";
                    break;
                default: break;
            }
            sBackgroundItems.push("set da scrittura", "un diario con i tuoi appunti", "un libro su " + sStudySpecialization);
                sBackground += " di " + sStudyArea + " (" + sStudySpecialization + ")";
            break;

        default: break;
    }
    /* ITEMS */
    let bMelee = bBackgroundMelee;
    let bRanged = bBackgroundRanged;
    let bShield = false;
    let bLightArmour = false;
    let sWeapons = "";
    let sItemsList = [];

    if(docId('checkbox_equipment').checked) {
        let spareMoney = 0;
        if(iStats[3] < 5) {
            spareMoney = 1;
        }
        else if(iStats[3] < 7) {
            spareMoney = d(2);
        }
        else if(iStats[3] < 15) {
            spareMoney = d(3);
        }
        else if(iStats[3] < 23) {
            spareMoney = d(4);
        }
        else {
            spareMoney = nd(2, 4);
        }
        let money = iStats[3] - spareMoney;

        log("Total money is " + iStats[3]);
        log("Spare money is " + spareMoney);
        log("Spendable money is " + money);

        function buyMartialMelee() {
            const item = randomMartialMelee();
            if(item.includes("lance")) bTwohandedMelee = true; /* special case */
            sWeapons = addItem(sWeapons, item);
            money -= 10;
            bMelee = true;
            log("Bought " + item);
        }

        function buyMartialRanged() {
            const item = randomMartialRanged();
            sWeapons = addItem(sWeapons, item);
            money -= 10;
            bRanged = true;
            log("Bought " + item);
        }

        function buyLightArmour() {
            money -= 10;
            bLightArmour = true;
            log("Bought Light Armour");
        }

        function buyShield() {
            money -= 5;
            bShield = true;
            log("Bought Shield");
        }

        function buyPet() {
            const item = randomPet();
            iPets += 1;
            sPets = addItem(sPets, item);
            money -= 5;
            log("Bought " + item);
        }

        function buySimpleMelee() {
            const item = randomSimpleMelee();
            sWeapons = addItem(sWeapons, item);
            bTwohandedMelee = true;
            money -= 1;
            bMelee = true;
            log("Bought " + item);
        }

        function buySimpleRanged() {
            const item = randomSimpleRanged();
            sWeapons = addItem(sWeapons, item);
            money -= 1;
            bRanged = true;
            log("Bought " + item);
        }

        let iGear = 0;
        let iTool = 0;

        function buyGearOrTool() {
            let item;
            repeat:
            do {
                if(iGear > iTool) item = randomTool();
                else if(iTool > iGear) item = randomGear();
                else item = randomGearOrTool(sItemsList);
                log(item);
                /* check for repeats */
                if(item.constructor === Array) { /* item is an Array */
                    for(let i=0; i<item.length; i++) {
                        log("Checking " + item[i]);
                        if((item[i] != ropeItem) && (sItemsList.indexOf(item[i]) > -1)) {
                            log("Repeat: " + item[i]);
                            continue repeat;
                        }
                    }
                } else { /* not an array */
                    log("Checking " + item);
                    if(sItemsList.indexOf(item) > -1) {
                        log("Repeat: " + item);
                        continue repeat;
                    }
                }
                break; /* break out of the loop if no repeats are found */
            } while(true);

            if(item.length > 1) iGear += 1;
            else iTool += 1;

            sItemsList = sItemsList.concat(item);
            money -= 1;
            log("Bought " + item);
        }

        function spend1() {
            log("spend1 @ " + money + "s");
            if(!bMelee) {
                buySimpleMelee();
            }
            else {
                if(!bRanged) buySimpleRanged();
                else buyGearOrTool();
            }
        }

        function spend5() {
            log("spend5 @ " + money + "s");
            if((maxPets > 1) && (iPets < 1)) {
                buyPet(); /* for Beastmaster */
            }
            else {
                if(bMelee && !bTwohandedMelee && !bShield && !bMystic) {
                    buyShield();
                }
                else {
                    if(!bMelee){
                        buySimpleMelee();
                    }
                    else {
                        if(iPets < maxPets) buyPet();
                        else spend1();
                    }
                }
            }
        }

        function spend10() {
            log("spend10 @ " + money + "s");
            if((maxPets > 1) && (iPets < 1)) {
                buyPet(); /* for Beastmaster */
            }
            else {
                if(!bMelee) {
                    buyMartialMelee();
                }
                else {
                    if(bLightArmour || bBrawler || bMystic) {
                        if(bRanged) spend5();
                        else randomBool() ? buyMartialRanged() : spend5();
                    }
                    else {
                        if(bRanged) randomBool() ? buyLightArmour() : spend5();
                        else randomBool() ? buyMartialRanged() : buyLightArmour();
                    }
                }
            }
        }

        function boughtEnough() {
            if(bMelee && bRanged && (iGear >= 1) && (iTool >= 1)) return true;
            else return false;
        }

        sItemsList = sItemsList.concat(sFeatureItems);
        sItemsList = sItemsList.concat(sBackgroundItems);

        while((money > 0) && !boughtEnough()) {
            if(money > 10) spend10();
            else if(money > 5) spend5();
            else spend1();
        }
        iStats[3] = money + spareMoney;
    } // random equipment

    log("Before filtering:");
    log(sItemsList);

    /* Rope */
    let i = sItemsList.length;
    while(i--) {
        if(sItemsList[i] == ropeItem) {
            iRope += 10;
            sItemsList.splice(i, 1);
        }
    }
    sItemsList = sItemsList.filter(el => {return el != null && el != '';});

    sItemsList = sItemsList.sort();
    if(iRope > 0) {
        sItemsList.push("corda (" + iRope + "&#8209;piedi)");
    }

    log("After filtering:");
    log(sItemsList);

    sItemsList.push("vestiti semplici (indossati), attrezzattura essenziale per accamparsi, 6&nbsp;torce, razioni per 3&nbsp;giorni");

    /* Armour */
    let sArmour = "";
    if(bLightArmour && bShield) sArmour = "Armatura&nbsp;2 (leggera+scudo)";
    else if(bLightArmour) sArmour = "Armatura&nbsp;1 (leggera)";
    else if(bShield) sArmour = "Armatura&nbsp;1 (scudo)";
    if(bBrawler) { /* (Brawler) */
        sArmour = "Armatura&nbsp;1 (quando non indossa armature)"
    }

    /* OUT */
    out.innerHTML =
        "FOR&nbsp;" + iStats[0] +
        ", DES&nbsp;" + iStats[1] +
        ", VOL&nbsp;" + iStats[2] +
        ", " + hp + "pf";
    out.innerHTML = addItem(out.innerHTML, sArmour);
    out.innerHTML = addItem(out.innerHTML, sBackgroundWeapons);
    out.innerHTML = addItem(out.innerHTML, sWeapons);
    out.innerHTML = addItem(out.innerHTML, sPets);
    out.innerHTML = addItem(out.innerHTML, sBackground);
    out.innerHTML = addItem(out.innerHTML, sFeature) + ".";
    out.innerHTML += "<br/><br/>Zaino: " + sItemsList.join(", ") + ", " + iStats[3] + "s";
    if(sTome.length > 0) {
        out.innerHTML += "<br/><br/>" + sTome;
    }

    docId('out_RandomCharacter').style.display="";
}

/* populate select_feature */
const sfeat = docId('select_feature');
opt = docCreate('option');
opt.text = "Random";
opt.value = 0;
sfeat.appendChild(opt);
for(let i=1; i<sFeatureList.length; i++) {
    opt = docCreate('option');
    opt.text = sFeatureList[i];
    opt.value = i;
    sfeat.appendChild(opt);
}

/* populate select_background */
const sback = docId('select_background');
opt = docCreate('option');
opt.text = "Random";
opt.value = 0;
sback.appendChild(opt);
for(let i=1; i<sBackgroundList.length; i++) {
    opt = docCreate('option');
    opt.text = sBackgroundList[i];
    opt.value = i;
    sback.appendChild(opt);
}

/**************/
/* RANDOM NPC */
/**************/

function statNPC() {
    return nd(2, 8) + 1;
}

function randomNPCAge() {
    switch(d(8)) {
        case 1:
        case 2: return "giovane,";
        case 3:
        case 4:
        case 5:
        case 6: return "di mezza et\u00e0,";
        case 7:
        case 8: return "vecchio,";
        default: return "NONE";
    }
}

function randomNPCOccupation() {
    switch(stat()) { /* 3d6 */
        case 3: return "studioso";
        case 4: return "guaritore";
        case 5: return "artista";
        case 6: return "intrattenitore";
        case 7: return "criminale";
        case 8: return (randomBool() ? "mendicante" : "vagabondo");
        case 9: return (randomBool() ? "cacciatore" : "pescatore");
        case 10: return (randomBool() ? "contadino" : "paesano");
        case 11: return "artigiano";
        case 12: return "servitore";
        case 13: return "mercante";
        case 14: return (randomBool() ? "guardia" : "soldato");
        case 15: return "marinaio";
        case 16: return (randomBool() ? "scriba" : "segretario");
        case 17: return "sacerdote";
        case 18: return "nobile";
        default: return "NONE";
    }
}

function randomNPCPersonality() {
    switch(d(20)) {
        case 1:  return "amichevole";
        case 2:  return "arrogante";
        case 3:  return "avido";
        case 4:  return "collerico";
        case 5:  return "cortese";
        case 6:  return "credulone";
        case 7:  return "diffidente";
        case 8:  return "disattento";
        case 9:  return "disonesto";
        case 10: return "ficcanaso";
        case 11: return "generoso";
        case 12: return "gioioso";
        case 13: return "melanconico";
        case 14: return "modesto";
        case 15: return "onesto";
        case 16: return "ostile";
        case 17: return "rude";
        case 18: return "sveglio";
        case 19: return "tonto";
        case 20: return "tranquillo";
        default: return "NONE";
    }
}

const sNPCDetail = [
    "NONE", /* 0 */
    "NONE", /* 1 */
    "NONE", /* 2 */
    "gobbo",
    "con un occhio solo",
    "cicatrice",
    "balbuzie",
    "alcolizzato",
    "capelli grigi",
    "calvo",
    "capelli corti",
    "barba folta",
    "esile",
    "basso",
    "alto",
    "sovrappeso",
    "baffi",
    "capelli lunghi",
    "basettoni",
    "colore raro dei capelli*",
    "accento",
    "voglia",
    "occhio pigro",
    "protesi a una gamba",
    "protesi a un braccio"]; /* 22 */

function randomNPCDetail() {
    return(nd(3, 8)); /* 3d8 */
}

function anyOf(a, b, arr) {
    return ((arr.indexOf(a) > -1) && (arr.indexOf(b) > -1));
}

function compatibleDetails(d1, d2) {
    if(d1 == d2) return false;
    if(anyOf(d1, d2, [4, 22])) return false; /* con un occhio solo, occhio pigro */
    if(anyOf(d1, d2, [8, 9, 19])) return false;
        /* capelli grigi, calvo, capelli di un colore raro* */
    if(anyOf(d1, d2, [9, 10, 17])) return false; /* calvo, capelli corti, capelli lunghi */
    if(anyOf(d1, d2, [12, 15])) return false; /* esile, sovrappeso */
    if(anyOf(d1, d2, [13, 14])) return false; /* basso, alto */
    return true;
}

function randomNPCDetailPrefix(n) {
    switch(n) {
        case 3: return ", con la ";     /* "hunchback" */
        case 4: return ", con un ";         /* "one eye" */
        case 5: return ", con una ";       /* "scar" */
        case 6: return ", ";    /* "stutter" */
        case 7: return ", ";     /* "drunkard" */
        case 8: return ", con i ";         /* "grey hair" */
        case 9: return ", ";       /* "bald" */
        case 10: return ", con i ";        /* "short hair" */
        case 11: return ", con la ";      /* "bushy beard" */
        case 12: return ", ";      /* "thin" */
        case 13: return ", ";      /* "short" */
        case 14: return ", ";      /* "tall" */
        case 15: return ", ";      /* "overweight" */
        case 16: return ", con i ";      /* "moustache" */
        case 17: return ", con i ";        /* "long hair" */
        case 18: return ", con i ";        /* "sideburns" */
        case 19: return ", con un ";     /* "are hair colour*" */
        case 20: return ", con un forte ";     /* "accent" */
        case 21: return ", con una ";      /* "birthmark" */
        case 22: return ", con un ";       /* "birthmark" */
        case 23: return ", con una ";      /* "prosthetic leg" */
        case 24: return ", con una ";      /* "prosthetic arm" */
        default: return "NONE";
    }
}

function randomNPCDetails() {
    let d1, d2;
    do { /* COMPATIBLE DETAILS */
        d1 = randomNPCDetail();
        do { /* REPEATS */
            d2 = randomNPCDetail();
            if(d1 == d2 == 4) return "cieco"; /* "one eye" */
            if(d1 == d2 == 5) return "pieno di cicatrici"; /* "scar" */
            if(d1 == d2 == 12) return "macilento"; /* "thin" */
            if(d1 == d2 == 13) return "davvero di bassa statura"; /* "short" */
            if(d1 == d2 == 14) return "di statura estremamente alta"; /* "tall" */
            if(d1 == d2 == 15) return "obeso"; /* "overweight" */
            if(d1 == d2 == 23) return "ha due protesi alle gambe"; /* "prosthetic leg" */
            if(d1 == d2 == 24) return "ha due protesi alle braccia"; /* "prosthetic arm" */
            if(((d1 == 23) && d2 == 24) || ((d1 == 24) && (d2 == 23))) return "ha una protesi a un braccio e a una gamba";
        } while(d1 == d2); /* END REPEATS */
    } while(!compatibleDetails(d1, d2)) /* END COMPATIBLE DETAILS */

    /* SPECIAL CASES */
    if(d2 == 3)  {d2 = d1; d1 = 3;}  /* hunchback  */
    if(d2 == 7)  {d2 = d1; d1 = 7;}  /* drunkard  */
    if(d2 == 9)  {d2 = d1; d1 = 9;}  /* bald  */
    if(d2 == 12) {d2 = d1; d1 = 12;} /* thin  */
    if(d2 == 15) {d2 = d1; d1 = 15;} /* overweight  */
    if(d2 == 13) {d2 = d1; d1 = 13;} /* short */
    if(d2 == 14) {d2 = d1; d1 = 14;} /* tall  */
    let pre1 = randomNPCDetailPrefix(d1);
    let pre2 = randomNPCDetailPrefix(d2);
    if(anyOf(d1, d2, [6, 20])) {pre1 = "with an "; pre2 = "and a ";}
    if(
            (pre1.startsWith("who has")) ||
            (pre1.startsWith("with"))) {
        if(pre2.search(" a ") > -1) pre2 = "and a ";
        else if(pre2.search(" an ") > -1) pre2 = "and an ";
        else pre2 = "and ";
    }
    if([6, 20].indexOf(pre2) < 0) { /* except for: statter, accent */
        if((pre2 == "who has ") || (pre2 == "with ")) pre2 = "and has ";
        if((pre2 == "who has a ") || (pre2 == "with a ")) pre2 = "and has a ";
        if((pre2 == "who has an ") || (pre2 == "with an ")) pre2 = "and has an ";
    }
    if(     (pre1.startsWith("who has") && pre2.startsWith("who has")) ||
            (pre1.startsWith("who is") && pre2.startsWith("who is")))
            /*(pre1.startsWith("with") == pre2.startsWith("with")))*/ {
        if(pre2.search(" a ") > -1) pre2 = "and a ";
        else if(pre2.search(" an ") > -1) pre2 = "and an ";
        else pre2 = "and ";
    }

    if(anyOf(d1, d2, [8, 10]))  return " con i capelli grigi corti";
    if(anyOf(d1, d2, [8, 11]))  return " con i capelli grigi e la barba folta";
    if(anyOf(d1, d2, [8, 16]))  return " con i capelli grigi e i baffi";
    if(anyOf(d1, d2, [8, 17]))  return " con i capelli grigi lunghi";
    if(anyOf(d1, d2, [8, 18]))  return " con i capelli grigi e i basettoni";

    if(anyOf(d1, d2, [9, 11]))  return " che \u00E8 calvo e ha la barba folta";
    if(anyOf(d1, d2, [9, 16]))  return " che \u00E8 calvo e ha i baffi";
    if(anyOf(d1, d2, [9, 18]))  return " che \u00E8 calvo e ha i basettoni";

    if(anyOf(d1, d2, [11, 16])) return " che ha barba e baffi";
    if(anyOf(d1, d2, [11, 18])) return " che ha basettoni e pizzetto";

    if(anyOf(d1, d2, [10, 11])) return " con i capelli corti e la barba folta";
    if(anyOf(d1, d2, [10, 16])) return " con i capelli corti e i baffi";
    if(anyOf(d1, d2, [10, 18])) return " con i capelli corti e i basettoni";
    if(anyOf(d1, d2, [10, 19])) return " con i capelli corti di un colore raro*";

    if(anyOf(d1, d2, [16, 18])) return " che ha basettoni e baffi";

    if(anyOf(d1, d2, [17, 11])) return " con i capelli lunghi e la barba folta";
    if(anyOf(d1, d2, [17, 16])) return " con i capelli lunghi e i baffi";
    if(anyOf(d1, d2, [17, 18])) return " con i capelli lunghi e i basettoni";
    if(anyOf(d1, d2, [17, 19])) return " con i capelli lunghi id un colore raro*";

    if(anyOf(d1, d2, [19, 11])) return " con i capelli di un colore raro* e la barba folta";
    if(anyOf(d1, d2, [19, 16])) return " con i capelli di un colore raro* e i baffi";
    if(anyOf(d1, d2, [19, 18])) return " con i capelli di un olore raro* e i basettoni";
    /* END SPECIAL CASES */
    return pre1 + sNPCDetail[d1] + pre2 + sNPCDetail[d2];
}

function generateRandomNPC() {
    const out = docId('out_RandomNPC');
    const stats = "FOR " + statNPC() + ", DES " + statNPC() + ", VOL " + statNPC();
    const hp = d(6) + "pf";
    let whois = randomNPCOccupation() + " " + randomNPCAge() + " " +
                randomNPCPersonality() + randomNPCDetails() + ".";

    if(whois.search("raro*") > -1) {
        whois += "<br/><i>* Di solito biondo o rosso, in base alla popolazione generale.</i>";
    }

    out.innerHTML = "";
    out.innerHTML = addItem(out.innerHTML, stats);
    out.innerHTML = addItem(out.innerHTML, hp);
    out.innerHTML = addItem(out.innerHTML, whois);
    docId('out_RandomNPC').style.display="";
}

/******************/
/* RANDOM MONSTER */
/******************/

/* @ - armour tag */
const sMonsterTable = [
    ["NONE"],
    ["NONE", /* Table 1 */
    "Artificiale.@",
    "Coloniale.",
    "Derelitto.",
    "Divino.",
    "Etereo.@",
    "Infernale.",
    "Magico.",
    "Mutato.",
    "Nella norma.",
    "Non morto.",
    "Occulto.",
    "Primitivo."], /* 12 */
    ["NONE", /* Table 2 */
    "Aggraziato.",
    "Ammalato.",
    "Con barbigli.",
    "Limaccioso.",
    "Luccicante.",
    "Maculato.",
    "Magro.",
    "Maleodorante.",
    "Mimetizzato.",
    "Multicolore.",
    "Muscoloso.",
    "Non \u00E8 visibile.",
    "Pelato.",
    "Peloso.",
    "Putrescente.",
    "Radioso.",
    "Rigato.",
    "Rigonfio.",
    "Rugginoso.",
    "Tenebroso."], /* 20 */
    ["NONE", /* Table 3 */
    "Acido.",
    "Acustico.",
    "Adesivo.",
    "Armato.",
    "Corazzato.@",
    "Elettrico.",
    "Fuoco.",
    "Ghiaccio.@",
    "Gigante.@",
    "Ingoia.",
    "Ipnotico.",
    "Minuscolo.",
    "Munito di guscio.@",
    "Parassita.",
    "Psichico.",
    "Rigurgita.",
    "Si moltiplica.",
    "Spara proiettili.",
    "Vampirico.",
    "Velenoso."], /* 20 */
    ["NONE", /* Table 4 */
    "Amichevole.",
    "Astuto.",
    "Avido.",
    "Brulicante.",
    "Divoratore.",
    "Elusivo.",
    "Farfugliante.",
    "Folle.",
    "Furente.",
    "Imprevedibile.",
    "Intelligente.",
    "Musicale.",
    "Notturno.",
    "Pacifico.",
    "Saprofago.",
    "Si avvinghia.",
    "Silenzioso.",
    "Sussurrante.",
    "Tende imboscate.",
    "Urlante"], /* 20 */
    ["NONE", /* Table 5 */
    "Acquatico.",
    "Cammina.",
    "Corre.",
    "Dinoccolato.",
    "Immobile.",
    "Fluttua.",
    "Lento.",
    "Plana.",
    "Rotola.",
    "Salta.",
    "Scava cunicoli.",
    "Scorre.",
    "Serpeggia.",
    "Si arrampica.",
    "Si impenna.",
    "Si teletrasporta.",
    "Sotterraneo.",
    "Striscia.",
    "Veloce.",
    "Vola."], /* 20 */
    ["NONE", /* Table 6 */
    "Alato.",
    "Arti multipli.",
    "Asimettrico.",
    "Braccia multiple.",
    "Dotato di coda.",
    "Due braccia.",
    "Due gambe.",
    "Due teste.",
    "Gambe multiple.",
    "Munito di tentacoli.",
    "Privo di un corpo.",
    "Quattro braccia.",
    "Quattro gambe.",
    "Senza arti.",
    "Senza braccia.",
    "Senza gambe.",
    "Sferico.",
    "Struttura radiale.",
    "Un braccio.",
    "Una gamba."], /* 20 */
    ["NONE", /* Table 7 */
    "Bicefalo.",
    "Cieco.",
    "Con molteplici occhi.",
    "Con molteplici teste.",
    ["Con proboscide.", "Con tentacoli facciali."],
    "Con un occhio solo.",
    "Munito di corna.",
    "Muto.",
    "Senza cervello.",
    "Senza occhi.",
    "Senza testa.",
    "Sordo."], /* 12 */
    ["NONE", /* Table 8 */
    ["Argilla.", "Fango.", "Liquame."],
    ["Chitinoso.@", "Osso.@"],
    ["Cristallino.@", "Gemma.@"],
    ["Cuoio.", "Tessuto."],
    "Di carne.",
    "Di legno.@",
    ["Elementale.", "Gassoso."],
    "Liquido.",
    "Metallico.@",
    "Pietra.@"], /* 10 */
    ["NONE", /* Table 9 */
    "Amorfo",
    "Anfibio",
    "Animato",
    ["Aracnide", "Insetto"],
    "Con zoccoli",
    ["Crostaceo@", "Miriapode@"],
    "Fungo",
    ["Mollusco", "Verme"],
    "Pesce",
    "Pianta",
    "Pipistrello",
    ["Rettile", "Serpente"],
    ["Roditore", "Coniglio", "Riccio", "Talpa", "Toporagno"],
    "Simile a un cane",
    "Simile a un gatto",
    "Simile a un orso",
    "Uccello",
    "Umanoide",
    "Chimerico",
    "Mutaforma"]]; /* 20 */

function generateRandomMonster() {
    const idForm = 9; /* Form table index */
    const out = docId('out_RandomMonster');
    let monster = "";

    /* choose random tables */
    let tables = [];
    for(let i=0; i<d(4); i++) {
        let newtab;
        do {
            newtab = d(8);
        } while(tables.indexOf(newtab) > -1);
        tables.push(newtab);
    } /* END FOR LOOP */
    tables.push(idForm); /* Form table is always present */
    tables.sort();

    let after = "";
    for(let i=0; i<tables.length; i++) {
        const tab = sMonsterTable[tables[i]];
        const idx = d(tab.length-1);
        const entry = tab[idx];
        let add = "NONE";
        if(entry.constructor === Array) add = entry[d(entry.length) - 1];
        else add = entry;
        if(add.startsWith(("with"))) { /* entries that start with "with ..." are pushed to the end */
            after += " " + add;
        }
        else {
            monster += add + " ";
        }
        /* Form table special cases */
        if((tables[i] == idForm) && (idx > 18)) { /* chimeric or shape-shifting */
            const a = d(18);
            let b;
            do {
                b = d(18);
            } while(b == a);
            const entryA = sMonsterTable[idForm][a];
            const entryB = sMonsterTable[idForm][b];
            let addA = "NONE";
            let addB = "NONE";
            if(entryA.constructor === Array) addA = entryA[d(entryA.length) - 1];
            else addA = entryA;
            if(entryB.constructor === Array) addB = entryB[d(entryB.length) - 1];
            else addB = entryB;
            monster += "(" + addA + " / " + addB + ")";
        }
    }
    monster += after;

    /* ABILITIES */
    let abilities = "";
    if(docId('checkbox_monster_abilities').checked) {

        /* DANGER */
        let danger = parseInt(docId('select_monster_danger').value);
        let hp = 0;
        let stats = [stat(), stat(), stat()];
        if(danger < 1) danger = d(5); /* random danger level */
        for(let i=1; i<=danger; i++) {
            hp += d(6);
            for(let j=0; j<stats.length; j++) {
                if(stats[j] < 20) {
                    if(d(20) > stats[j]) {
                        stats[j] += 1;
                    }
                }
            } /* END FOR LOOP J */
        } /* END FOR LOOP I */

        /* ARMOUR */
        let armour = 0;
        let pos = -1;
        while(-1 != (pos = monster.search("@"))) { /* search for armour tags */
            monster = monster.slice(0, pos) + monster.slice(pos+1);
            armour += 1;
        }
        if(d(6) < danger) { /* more dangerous = more chance of armour */
            armour += 1;
        }
        if(armour > 3) {
            armour = 3;
        }

    abilities = "FOR " + stats[0] +
                ", DES " + stats[1] +
                ", VOL " + stats[2] +
                ", " + hp + "pf" +
                ((armour > 0) ? (", Armatura " + armour) : ("")) +
                ".<br/>";
    } /* END ABILITIES */
    else { /* remove armour tags */
        let pos = -1;
        while(-1 != (pos = monster.search("@"))) { /* search for armour tags */
            monster = monster.slice(0, pos) + monster.slice(pos+1);
        }
    }


    monster = monster.trim();
    monster = monster.charAt(0).toUpperCase() + monster.slice(1) + ".";
    monster = abilities + monster;

    out.innerHTML = "";
    out.innerHTML = addItem(out.innerHTML, monster);
    docId('out_RandomMonster').style.display="";
}

function toggleMonsterAbilities() {
    if(docId('checkbox_monster_abilities').checked) {
        docId('div_monster_danger').style.display="block";
    }
    else {
        docId('div_monster_danger').style.display="none";
    }
}

/* populate select_monster_danger */
docId('checkbox_monster_abilities').checked = false;
const sdanger = docId('select_monster_danger');
opt = docCreate('option');
opt.text = "Random";
opt.value = 0;
sdanger.appendChild(opt);
for(let i=1; i<=5; i++) {
    opt = docCreate('option');
    opt.text = "" + i + "d6 PF";
    opt.value = i;
    sdanger.appendChild(opt);
}

/*********************/
/* RANDOM MAGIC ITEM */
/*********************/

/* Appearance data:
 * 0 - colour
 * 1 - attribute
 * 2 - attribute + material
 * 3 - attribute + colour
 * 4 - attribute + colour + fabric
 */
const sMagicItem = [
    ["NONE"],
    [   /* 1. CONTAINER */
        [-1, "NONE"],
        [2, "borraccia", "fiasca"],
        [4, "borsa"],
        [2, "bottiglia"],
        [2, "brocca"],
        [2, "caraffa"],
        [2, "cofanetto", "scatola"],
        [2, "corno potorio"],
        [4, "faretra"],
        [2, "fiala"],
        [0, "otre"]
        [4, "sacchetto", "sacco"],
        [4, "tascapane", "zaino"],
    ],
    [   /* 2. CONSUMABLE */
        [-1, "NONE"],
        [0, "balsamo", "olio", "unguento"],
        [0, "candela", "torcia"],
        [0, "cibo (frutto, impasto, ecc.)"],
        [0, "cipria", "polvere"],
        [0, "elisir", "pozione"],
        [0, "erba", "fiore", "foglia"],
        [0, "gessetto", "matita"],
        [0, "inchiostro", "pittura"],
        [0, "legume", "radice", "seme"],
        [0, "veleno"]
    ],
    [   /* 3. GARMENT */
        [-1, "NONE"],
        [4, "abito"],
        [4, "brache"],
        [4, "camicia"],
        [4, "cappello"],
        [4, "cappotto"],
        [4, "cappuccio"],
        [4, "cintura"],
        [4, "farsetto"],
        [4, "giubba"],
        [4, "gonnella"],
        [4, "guanti"],
        [4, "mantello"],
        [4, "manto"],
        [4, "pantaloni"],
        [4, "paramenti"],
        [3, "sandali"],
        [3, "scarpe"],
        [3, "stivali"],
        [4, "tunica"],
        [4, "veste"]
    ],
    [   /* 4. JEWELLERY */
        [-1, "NONE"],
        [2, "ago"],
        [2, "amuleto", "talismano"],
        [2, "bacchetta"],
        [2, "bastone"],
        [2, "braciere"],
        [2, "calice", "coppa", "coppetta"],
        [2, "candelabro"],
        [2, "cannocchiale"],
        [3, "carte", "dadi"],
        [2, "cavatappi"],
        [2, "ciotola", "secchio"],
        [2, "clessidra"],
        [4, "corda"],
        [3, "cristallo", "sfera"],
        [2, "falcetto"],
        [4, "fazzoletto"],
        [2, "ferro di cavallo"],
        [2, "fischietto"]
        [2, "forbici"],
        [2, "gancio"],
        [3, "gemma", "perla"],
        [2, "grimaldello"],
        [2, "idolo", "statuetta"],
        [2, "incensiere"],
        [2, "lanterna"],
        [3, "lente", "monocolo"],
        [3, "libro"],
        [2, "manette"],
        [2, "martello"],
        [2, "moneta"],
        [2, "occhiali"],
        [2, "ombrello"],
        [2, "pala"],
        [2, "penna d'oca"],
        [2, "pettine"],
        [2, "piatto", "vassoio"],
        [2, "piccozza"],
        [2, "pipa"],
        [2, "protesi"],
        [2, "scettro", "verga"],
        [4, "sella"],
        [3, "scopa"],
        [3, "spazzola"],
        [2, "specchio"],
        [2, "spuntone"],
        [4, "tappeto"],
        [2, "tavoletta"],
        [2, "teschio"],
        [4, "tovaglia"],
        [2, "ventaglio"],
    ],
    [   /* 6. MUSICAL INSTRUMENT */
        [-1, "NONE"],
        [2, "arpa"],
        [2, "campana"],
        [2, "cetra"],
        [2, "ciaramella"],
        [3, "cornamusa"],
        [2, "cromorno"],
        [2, "dulcimer"],
        [2, "flauto"],
        [2, "ghironda"],
        [2, "lira"],
        [2, "liuto"],
        [2, "mandolino"],
        [2, "ocarina"],
        [2, "ribeca"],
        [2, "scacciapensieri"],
        [3, "tamburello"],
        [3, "tamburo"],
        [2, "viola"],
        [2, "violino"]
        [3, "zampogna"],
    ],
    [   /* 7. LIGHT ARMOUR */
        [-1, "NONE"],
        [3, "armatura di cuoio"],
        [3, "bracciali"],
        [2, "elmo"],
        [3, "gambesone"],
        [3, "guanti"],
        [3, "schinieri"]
    ],
    [   /* 8. FULL ARMOUR */
        [-1, "NONE"],
        [3, "armatura completa"],
        [3, "armatura di maglia"],
        [3, "armatura di piastre"],
        [3, "armatura di scaglie"],
        [3, "bracciali"],
        [3, "corazza"],
        [2, "elmo"],
        [3, "gambali"],
        [3, "manopole"],
        [3, "schinieri"]
    ],
    [   /* 9. SHIELD */
        [-1, "NONE"],
        [2, "brocchiero"],
        [2, "palvese"],
        [2, "scudo a mandorla"],
        [2, "scudo quadrato"],
        [2, "scudo rotondo"],
        [2, "scudo scapezzato"]
    ],
    [   /* 10. WEAPON & AMMO */
        [-1, "NONE"],
        [2, "alabarda"],
        [2, "arco da caccia"],
        [2, "arco lungo"],
        [2, "ascia"],
        [2, "balestra"],
        [2, "boomerang"],
        [4, "fionda"],
        [2, "freccetta"],
        [2, "freccia"],
        [2, "lancia"],
        [2, "lancia lunga"],
        [2, "martello da guerra"],
        [2, "mazza"],
        [2, "moschetto"],
        [2, "pallottola"],
        [2, "pugnale"],
        [2, "quadrello"],
        [2, "rivoltella"],
        [2, "shuriken"],
        [2, "spada"]
    ]];

const sItemAttribute = [
    "NONE",
    "d\u0027aspetto ampolloso",
    "d\u0027aspetto antico",
    "d\u0027aspetto colorato",
    "d\u0027aspetto complicato",
    "d\u0027aspetto decorato",
    "d\u0027aspetto elegante",
    "d\u0027aspetto esotico",
    "d\u0027aspetto grezzo",
    "d\u0027aspetto grottesco",
    "d\u0027aspetto ingioiellato",
    ["d\u0027aspetto leggero", "d\u0027aspetto sottile"],
    "d\u0027aspetto lucente",
    "d\u0027aspetto minaccioso",
    "d\u0027aspetto particolare",
    "d\u0027aspetto pesante",
    "d\u0027aspetto raffinato",
    "d\u0027aspetto sofisticato",
    "d\u0027aspetto solido",
    "d\u0027aspetto squallido",
    "d\u0027aspetto ultraterreno"]; /* 20 */

const sItemColour = [
    "NONE",
    "bianco neve",
    "grigio cenere",
    "nero pece",
    "rosso cremisi",
    "marrone castagna",
    "arancione zucca",
    "giallo limone",
    "verde malachite",
    "blu cielo",
    "blu oltremare",
    "viola lavanda",
    "magenta orchidea"]; /* 12 */

const sItemFabric = [
    "NONE",
    "di cotone",
    "di crine",
    "di feltro",
    "di lana",
    "di lino",
    "di pelle",
    "di pelliccia",
    "di seta"]; /* 8 */

const sItemMaterial = [
    "NONE",
    "in acciaio",
    "in ambra",
    "in argento",
    ["in avorio", "in corno"],
    "in bronzo",
    "in ceramica",
    ["in chitina", "in osso"],
    "in corallo",
    "in cristallo",
    "in ferro",
    "in gaietto",
    "in giada",
    "in legno",
    "in oro",
    "in ossidiana",
    "in ottone",
    "in peltro",
    "in pietra",
    "in rame",
    "in di vetro"]; /* 20 */

const sItemPeculiarity = [
    "NONE",
    ". Quest'oggetto cambia colore quando non c\u0027\u00E8 chi l\u0027osserva",
    ". Quest'oggetto, al tocco, trasmette una sensazione di freddo",
    ". Quest'oggetto emette un ronzio appena udibile",
    ". Quest'oggetto brilla leggermente al buio",
    ". Quest'oggetto pesa pi\u00F9 di quanto sembri",
    ". Quest'oggetto pesa meno di quanto sembri",
    [". Quest'oggetto, al tocco, trasmette una sensazione di melma", ". Quest'oggetto, al tocco, trasmette una sensazione di olio"],
    ". Quest'oggetto \u00E8 semitrasparente",
    ". Quest'oggetto ha un odore bizzarro, ma non sgradevole",
    ". Quest'oggetto a volte pare che si muova lievemente",
    ". Quest'oggetto ogni tanto vibra un po\u0027",
    ". Quest'oggetto, al tocco, trasmette una sensazione di calore"]; /* 12 */

function randomMagicItemType() {
    const roll = d(100);
    if(roll <= 10) return 1; /* container */
    else if(roll <= 30) return 2; /* consumable */
    else if(roll <= 40) return 3; /* garment */
    else if(roll <= 50) return 4; /* jewellery */
    else if(roll <= 70) return 5; /* misc. */
    else if(roll <= 73) return 6; /* musical instrument */
    else if(roll <= 80) return 7; /* light armour */
    else if(roll <= 83) return 8; /* full armour */
    else if(roll <= 90) return 9; /* shield */
    else return 10; /* weapon & ammo */
}

function randomArrayItem(table, start = 1) {
    const item = table[randomInt(start, table.length - 1)];
    if(item.constructor === Array) {
        return randomArrayItem(item, 0);
    }
    return item;
}

function generateRandomMagicItem() {
    const out = docId('out_RandomMagicItem');
    const itemType = randomMagicItemType();
    const table = sMagicItem[itemType];
    const itemIndex = d(table.length - 1);
    const itemLine = table[itemIndex];
    const itemAppearanceCode = itemLine[0];
    let item = itemLine[1];
    if(itemLine.length > 2) item = randomArrayItem(itemLine);
    let itemAppearance = "";
//  let itemColour = "";
    switch(itemAppearanceCode) {
        case 0: /* colour */
            itemColour = " di " + " colore " + randomArrayItem(sItemColour);
            break;
        case 1: /* attribute */
            itemAppearance = randomArrayItem(sItemAttribute) + " ";
            break;
        case 2: /* attribute + material */
            itemAppearance = randomArrayItem(sItemAttribute) + " " +
                randomArrayItem(sItemMaterial) + " ";
            break;
        case 3: /* attribute + colour */
            itemAppearance = randomArrayItem(sItemAttribute) + " ";
            itemColour = " di " + " colore " + randomArrayItem(sItemColour);
            break;
        case 4: /* attribute + colour + fabric */
            itemAppearance = randomArrayItem(sItemAttribute) + " " +
                 randomArrayItem(sItemFabric) + " ";
            itemColour = " di " + " colore " + randomArrayItem(sItemColour);
            break;
        default: itemAppearance = "NONE "; itemColour = " di colore NONE ";
    }

    let itemPeculiarity = "";
    if(d(6) == 1) {
        itemPeculiarity = " " + randomArrayItem(sItemPeculiarity);
    }
    let itemString = item + " " + itemAppearance + itemColour + itemPeculiarity + ".";
    itemString = itemString.charAt(0).toUpperCase() + itemString.slice(1);
    out.innerHTML = "";
    out.innerHTML = addItem(out.innerHTML, itemString);
    docId('out_RandomMagicItem').style.display="";
}

/******************/
/* RANDOM WEATHER */
/******************/

function randomWeatherTemperature() {
    switch(d(6)) {
        case 1: return "freddo, ";
        case 6: return "caldo, ";
        default: return "";
    }
}

function randomWeatherSky(type) {
    let input;
    switch(type) {
        case 0: input = d(20); break; /* NORMAL */
        case 1: input = d(12); break; /* DRY */
        case 2: input = d(12) + 8; break; /* RAINY */
        default: return "NONE";
    }
    switch(input) {
        case 1:
        case 2:
        case 3:
        case 4: return "sereno";
        case 5:
        case 6:
        case 7:
        case 8: return "nuvoloso";
        case 9:
        case 10:
        case 11:
        case 12: return "coperto";
        case 13:
        case 14: return "pioviggine o nebbia";
        case 15:
        case 16:
        case 17:
        case 18: return "pioggia o neve";
        case 19:
        case 20: return "tempesta o tormenta";
    }
}

const sWindForce = [
    "calmo",
    "brezza",
    "vento medio",
    "vento forte",
    "burrasca"]; /* 5 */

function randomWeatherWindDirection(force) {
    let input;
    if(docId('radio_wind_default').checked) input = d(8);
    else if(docId('radio_wind_follow').checked) input = Math.max(d(8), d(8));
    else if(docId('radio_wind_against').checked) input = Math.min(d(8), d(8));
    else return "NONE";

    let direction, mul = "NONE";
    switch(input) {
        case 1:
        case 2:
        case 3:
            direction = "con direzione avversa";
            switch(force) {
                case 1: mul = "×⅓"; break;
                case 2: mul = "×½"; break;
                case 3: mul = "×⅔"; break;
                case 4: mul = "×0"; break;
            }
            break;
        case 4:
        case 5:
            direction = "con direzione laterale";
            switch(force) {
                case 1: mul = "×⅓"; break;
                case 2: mul = "×½"; break;
                case 3: mul = "×⅔"; break;
                case 4: mul = "×0"; break;
            }
            break;
        case 6:
        case 7:
        case 8:
            direction = "con direzione favorevole";
            switch(force) {
                case 1: mul = "×½"; break;
                case 2: mul = "×1"; break;
                case 3: mul = "×1½"; break;
                case 4: mul = "×2"; break;
            }
            break;
        default:
            direction = "NONE";
            mul = "NONE";
    }
    return sWindForce[force] + " " + direction + " (" + mul + " come moltiplicatore di navigazione)";
}

function randomWeatherWind(type) {
    let input;
    switch(type) {
        case 0:
        case 1: input = d(20); break; /* NORMAL or DRY */
        case 2: input = d(12) + 8; break; /* RAINY */
    }
    switch(input) {
        case 1:
        case 2: return sWindForce[0];
        case 3:
        case 4:
        case 5:
        case 6: return randomWeatherWindDirection(1);
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14: return randomWeatherWindDirection(2);
        case 15:
        case 16:
        case 17:
        case 18: return randomWeatherWindDirection(3);
        case 19:
        case 20: return randomWeatherWindDirection(4);
    }
}

function generateRandomWeather(type) {
    const out = docId('out_RandomWeather');
    let weather = randomWeatherTemperature() + randomWeatherSky(type) +
        ", " + randomWeatherWind(type);
    weather = weather.charAt(0).toUpperCase() + weather.slice(1) + ".";

    out.innerHTML = "";
    out.innerHTML = addItem(out.innerHTML, weather);
    docId('out_RandomWeather').style.display="";
}

/***********/
/* HORIZON */
/***********/

function milesToFeet(miles) {
    return miles * 5280;
}

function feetToMiles(feet) {
    return feet / 5280;
}

function calculateHorizonDistance(h, r) {
    return Math.sqrt(2 * h * r);
}

function calculateObjectHeightObscured(o, d, r) {
    return Math.sqrt(Math.pow(o - d, 2) + Math.pow(r, 2)) - r;
}

function calculateHorizon() {
    let h = feetToMiles(parseInt(docId('horizon_h').value));
    let r = parseInt(docId('horizon_r').value);
    let d = calculateHorizonDistance(h, r);
    docId('horizon_d').value = d.toFixed(2);
    let o = parseInt(docId('horizon_o').value);
    let x = (d < o) ? milesToFeet(calculateObjectHeightObscured(o, d, r)) : 0;
    docId('horizon_x').value = x.toFixed(1);
}

calculateHorizon();
