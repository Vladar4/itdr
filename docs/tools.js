var debug = true; /* Debug mode (print logs) */

function log(msg) {
    if(debug) console.log(msg);
}

function addItem(s1, s2) {
    /* return a new string separated by a comma */
    if(s1 == "") return s2;
    if(s2 == "") return s1;
    return s1 + ", " + s2;
}

function high(a) {
    /* return the last index of the array */
    return (a.length - 1);
}

function randomBool() {
    return Math.random() < 0.5;
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
}

function d(x) {
    return randomInt(1, x);
}

function shuffle(array) {
    for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}

function shuffledIndex(array, n, start=1) {
    /* return n shuffled item indexes from the array.
     * ! starts at index 1 by default ! */
    var shuffled = new Array(array.length-start);
    for(i=start; i<array.length; i++) {
        shuffled[i-start] = i;
    }
    shuffle(shuffled);
    return shuffled.slice(-n);
}

/********************/
/* RANDOM CHARACTER */
/********************/

function stat() {
    return d(6) + d(6) + d(6);
}

function swapStats(idx1, idx2) {
    [iStats[idx1], iStats[idx2]] = [iStats[idx2], iStats[idx1]];
}

function debugRNG(func, min, max, n=100000) {
    var rng = new Array(max-min+1);
    rng.fill(0);
    for(i=0; i<n; i++) {
        let s = func();
        rng[s-min] += 1;
    }
    var checksum = 0;
    console.clear();
    for(i=0; i<rng.length; i++) {
        let percent = rng[i]*100/n;
        checksum += percent;
        console.log(i+min, ": ", rng[i], " (", percent, "%)");
    }
    console.log("CHECKSUM: ", checksum, "%");
}

function randomSimpleMelee() {
    var result = "NONE";
    switch(d(4)) {
        case 1: result = "pitchfork"; break;
        case 2: result = "quarterstaff"; break;
        case 3: result = "sledgehammer"; break;
        case 4: result = "splitting maul"; break;
        default: return "NONE";
    }
    result += " (d6, 2h)";
    return result;
}

function randomMartialMelee() {
    var result = "NONE";
    switch(d(8)) {
        case 1: result = "axe"; break;
        case 2: result = "dagger"; break;
        case 3: result = "halberd"; break;
        case 4: result = "lance"; break;
        case 5: result = "mace"; break;
        case 6: result = "spear"; break;
        case 7: result = "sword"; break;
        case 8: result = "war hammer"; break;
        default: return "NONE";
    }
    if(result == "lance") result += " (d8, 2h if not mounted)";
    else result += " (d6/d8)";
    return result;
}

function randomSimpleRanged() {
    var result = "NONE";
    switch(d(6)) {
        case 1: result = "boomerang"; break;
        case 2: result = "darts"; break;
        case 3: result = "hunting bow"; break;
        case 4: result = "sling"; break;
        case 5: result = "throwing daggers"; break;
        case 6: result = "throwing stars"; break;
        default: return "NONE";
    }
    result += " (d4)";
    return result;
}

function randomMartialRanged() {
    var result = "NONE";
    switch(d(4)) {
        case 1: result = "crossbow"; break;
        case 2: result = "longbow"; break;
        case 3: result = "musket"; break;
        case 4: result = "pistol"; break;
        default: return "NONE";
    }
    result += " (d6)";
    return result;
}

let ropeItem = "10-ft rope";

function randomGear() {
    var result = "NONE";
    switch(d(12)) {
        case 1: return ropeItem;
        case 2: return "bottle";
        case 3: return "caltrops";
        case 4: return "candle";
        case 5: return "chain";
        case 6: return "chalk";
        case 7: return randomBool() ? "dice" : "playing cards";
        case 8: return "flint and steel";
        case 9: return "parchment";
        case 10: return "sack";
        case 11: return "spike";
        case 12: return "tent";
        default: return "NONE";
    }
}

function randomTool() {
    var result = "NONE";
    switch(d(20)) {
        case 1: return "animal trap";
        case 2: return "collapsible pole";
        case 3: return "chisel and mallet";
        case 4: return "clamp";
        case 5: return "crowbar";
        case 6: return "drill";
        case 7: return randomBool() ? "file" : "rasp";
        case 8: return "fishing pole";
        case 9: return "grappling hook";
        case 10: return "hammer";
        case 11: return "hatchet";
        case 12: return "lockpicks";
        case 13: return "padlock";
        case 14: return "pickaxe";
        case 15: return "pliers";
        case 16: return "saw";
        case 17: return "scissors";
        case 18: return "shovel";
        case 19: return "wrench";
        case 20: return "writing set";
        default: return "NONE";
    }
}

function randomPet() {
    var result = "NONE";
    switch(d(4)) {
        case 1: return "cat (STR 6, WIL 8, 2hp, d4 Claws)";
        case 2: return "mutt (STR 8, WIL 6, 2hp, d4 Bite)";
        case 3: return "owl (STR 6, WIL 6, 2hp, d4 Claws)";
        case 4: return "parrot (STR 6, WIL 6, 2hp, d4 Claws)";
        default: return "NONE";
    }
}

function randomGearOrTool(items) {
    var result = [];
    var next = "";
    if(randomBool()) {
        for(i=0; i<2; i++) {
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

var iStats;

let sFeatureList = [
    "NONE",
    "Assassin",
    "Beastmaster",
    "Berserker",
    "Brawler",
    "Commander",
    "Duelist",
    "Healer",
    "Ironclad",
    "Mystic",
    "Sharpshooter",
    "Skilled",
    "Swashbuckler",
    "Tactician",
    "Thaumaturge",
    "Warrior"]; /* 15 */

let sCantripList = [
    "NONE",
    "acid splash",
    "arcane mark",
    "daze",
    "detect magic",
    "detect poison",
    "disrupt undead",
    "flare",
    "ghost sound",
    "guided strike",
    "jinx",
    "hide",
    "light/douse",
    "magic hand",
    "mending",
    "mute",
    "prestidigitation",
    "provocation",
    "ray of frost",
    "resistance",
    "spark"]; /* 20 */

let sSpellList = [
    "NONE",
    "alarm",
    "animate rope",
    "burning hands",
    "cause fear",
    "charm person",
    "chill touch",
    "colour spray",
    "comprehend languages",
    "camouflage",
    "courage",
    "detect secret doors",
    "detect dead",
    "disguise self",
    "endure elements",
    "enlarge/reduce",
    "erase",
    "expeditious retreat",
    "feather fall",
    "floating disk",
    "glue",
    "grease",
    "gust of wind",
    "hideous laughter",
    "hold portal",
    "hypnotism",
    "identify",
    "jump",
    "magic missile",
    "mount",
    "obscuring mist",
    "protection",
    "pyrotechnics",
    "shield",
    "shocking grasp",
    "silent image",
    "sleep",
    "summon creature",
    "swarm",
    "true strike",
    "unseen servant"]; /* 40 */

let sSkillList = [
    "NONE",
    "animal handling",
    "athletics",
    "burgling",
    "cheating",
    "drinking",
    "quickness",
    "stealth",
    "negotiation"]; /* 8 */

let sGiftList = [
    "NONE",
    "aegis",
    "awakening",
    "bond",
    "command",
    "control",
    "credence",
    "harmony",
    "omen",
    "smite",
    "turn"]; /* 10 */

let sBackgroundList = [
    "NONE",
    "Criminal",
    "Hunter",
    "Labourer",
    "Minstrel",
    "Noble",
    "Sailor",
    "Scholar",
    "Soldier" /* 8 */
    ];

function generateRandomStats() {
    let out = document.getElementById('out_RandomStats');
    iStats = [stat(), stat(), stat(), stat()];
    out.innerHTML =
        "STR " + iStats[0] +
        ", DEX " + iStats[1] +
        ", WIL " + iStats[2] +
        ", Money " + iStats[3];
    document.getElementById('out_RandomStats').style.display="";
    document.getElementById('swap_RandomCharacter').style.display="";
    document.getElementById('out_RandomCharacter').innerHTML="";
}

function generateRandomCharacter(swap) {
    let out = document.getElementById('out_RandomCharacter');
    document.getElementById('out_RandomStats').style.display="none";
    document.getElementById('swap_RandomCharacter').style.display="none";

    switch(swap) {
        case 0: break;
        /* STR <-> DEX */
        case 12: swapStats(0, 1); break;
        /* STR <-> WIL */
        case 13: swapStats(0, 2); break;
        /* STR <-> Money */
        case 14: swapStats(0, 3); break;
        /* DEX <-> WIL */
        case 23: swapStats(1, 2); break;
        /* DEX <-> Money */
        case 24: swapStats(1, 3); break;
        /* WIL <-> Money */
        case 34: swapStats(2, 3); break;
        default: break;
    }

    log("STR " + iStats[0] + ", DEX " + iStats[1] + ", WIL " + iStats[2] + ", Money " + iStats[3]);

    /* FEATURE */
    var iFeature = parseInt(document.getElementById("select_feature").value);
    if(iFeature == 0) iFeature = d(high(sFeatureList));
    var sFeature = sFeatureList[iFeature];
    log("Feature " + iFeature + " (" + sFeature + ")");
    var bBrawler = false; /* for unarmoured defense */
    var bMystic = false; /* can't use armour */
    var iPets = 0;
    var maxPets = 1;
    var sPets = "";
    var sFeatureItems = [];
    var sTome = "";
    switch(iFeature) {
        case 0: /* NONE */
            break;

        case 2: /* Beastmaster */
            sFeature += " 1 (max. 2 pets)";
            maxPets = 2;
            break;

        case 4: /* Brawler */
            sFeature += " 1 (bonus d4 unarmed Damage)";
            bBrawler = true;
            break;

        case 7: /* Healer */
            sFeatureItems.push("5s&nbsp;worth of healing supplies");
            break;

        case 9: /* Mystic */
            sFeature += " 1";
            bMystic = true;
            sFeatureItems.push("mystic's focus", "mystic's tome");
            var cantrips = shuffledIndex(sCantripList, 2).sort(
                (function(a, b) {return a - b;}));
            var spells = shuffledIndex(sSpellList, 6).sort(
                (function(a, b) {return a - b;}));
            sTome = "Mystic's Tome Contents: Cantrips: " +
                sCantripList[cantrips[0]] + ", " +
                sCantripList[cantrips[1]]+ ";<br/>1st Circle: " +
                sSpellList[spells[0]] + ", " +
                sSpellList[spells[1]] + ", " +
                sSpellList[spells[2]] + ", " +
                sSpellList[spells[3]] + ", " +
                sSpellList[spells[4]] + ", " +
                sSpellList[spells[5]] + ".";
            break;

        case 11: /* Skilled */
            var skills = shuffledIndex(sSkillList, 2).sort(
                (function(a, b) {return a - b;}));
            sFeature += " (" + sSkillList[skills[0]] + ", " + sSkillList[skills[1]] + ")";
            break;

        case 14: /* Thaumaturge */
            var gifts = shuffledIndex(sGiftList, 2).sort(
                (function(a, b) {return a - b;}));
            sFeature += " 1 (d4 Gift die, " + sGiftList[gifts[0]] + ", " + sGiftList[gifts[1]] + ")";
            break;

        case 15: /* Warrior */
            sFeature += " 1 (bonus d4 weapon Damage)"
            break;

        default: break;
    }

    /* HP */
    var hp = 0;
    switch(iFeature) {
        case 3: /* Berserker */
        case 4: /* Brawler */
        case 6: /* Duellist */
        case 8: /* Ironclad */
        case 12: /* Swashbuckler */
        case 13: /* Tactician */
        case 15: /* Warrior */
            hp = Math.max(d(6), d(6));
        default:
            hp = d(6);
            break;
    }

    /* BACKGROUND */
    var iBackground = parseInt(document.getElementById("select_background").value);
    if(iBackground == 0) iBackground = d(high(sBackgroundList));
    var sBackground = sBackgroundList[iBackground];
    log("Background " + iBackground + " (" + sBackground + ")");
    var bBackgroundMelee = false;
    var bTwohandedMelee = false;
    var bBackgroundRanged = false;
    var sBackgroundWeapons = "";
    var sBackgroundItems = [];
    var iRope = 0;
    switch(iBackground) {
        case 1: /* Criminal */
            sBackgroundWeapons = "dagger (d6/d8)";
            bBackgroundMelee = true;
            switch(d(6)) {
                case 1: sBackgroundItems.push("blackjack (sap)"); break;
                case 2: sBackgroundItems.push("crowbar"); break;
                case 3: sBackgroundItems.push("grappling hook"); break;
                case 4: sBackgroundItems.push("loaded dice"); break;
                case 5: sBackgroundItems.push("lockpicks"); break;
                case 6: sBackgroundItems.push("marked cards"); break;
            }
            sBackground += " (with a contact in the criminal world)";
            break;

        case 2: /* Hunter */
            sBackgroundWeapons = randomBool() ? "longbow (d6)" : "simple musket (d6)";
            bBackgroundRanged = true;
            sBackgroundItems.push("animal trap");
            sBackground += " (hunting and tracking expertise)";
            break;

        case 3: /* Labourer */
            bBackgroundMelee = true;
            bTwohandedMelee = true;
            switch(d(6)) {
                case 1:
                    sBackground = "Farmer";
                    sBackgroundWeapons = "pitchfork (d6, 2h)";
                    sBackgroundItems.push("sickle", "sieve");
                    break;
                case 2:
                    sBackground = "Gardener";
                    sBackgroundWeapons = "scythe (d6, 2h)";
                    sBackgroundItems.push("hatchet", "shovel");
                    break;
                case 3:
                    sBackground = "Herder";
                    sBackgroundWeapons = "quarterstaff (d6, 2h)";
                    sBackgroundItems.push("scissors", "whip");
                    break;
                case 4:
                    sBackground = "Lumberjack";
                    sBackgroundWeapons = "splitting maul (d6, 2h)";
                    sBackgroundItems.push("saw", "wedge");
                    break;
                case 5:
                    sBackground = "Mason";
                    sBackgroundWeapons = "sledgehammer (d6, 2h)";
                    sBackgroundItems.push("bucket", "trowel");
                    break;
                case 6:
                    sBackground = "Miner";
                    sBackgroundWeapons = "mattock (d6, 2h)";
                    sBackgroundItems.push("drill", "mallet");
                    break;
                default: break;
            }
            iRope = 20;
            sBackground += " (common folk treat you as one of them)";
            iStats[3] += d(4) + d(4); /* extra 2d4s */
            break;

        case 4: /* Minstrel */
            switch(d(10)) { /* random instrument */
                case 1: sBackgroundItems.push(randomBool() ? "bagpipe" : "bladder pipe"); break;
                case 2: sBackgroundItems.push(randomBool() ? "drum" : "tambourine"); break;
                case 3: sBackgroundItems.push(randomBool() ? "flute" : "ocarina"); break;
                case 4: sBackgroundItems.push("jaw harp"); break;
                case 5: sBackgroundItems.push(randomBool() ? "harp" : "lyre"); break;
                case 6: sBackgroundItems.push(randomBool() ? "crumhorn" : "shawm"); break;
                case 7: sBackgroundItems.push("hurdy-gurdy"); break;
                case 8: sBackgroundItems.push(randomBool() ? "lute" : "mandolin"); break;
                case 9:
                    switch(d(3)) {
                        case 1: sBackgroundItems.push("viol"); break;
                        case 2: sBackgroundItems.push("fiddle"); break;
                        case 3: sBackgroundItems.push("rebec"); break;
                        default: break;
                    }
                    break;
                case 10: sBackgroundItems.push(randomBool() ? "zither" : "dulcimer"); break;
                default: break;
            }
            sBackground += " (legend lore 4-in-6)";
            break;

        case 5: /* Noble */
            iStats[3] *= 2; /* double money */
            sBackground += " (your name still carries some weight)";
            break;

        case 6: /* Sailor */
            iPets += 1;
            sPets = randomBool() ?
                "talking parrot (STR 6, WIL 6, 2hp, d4 Claws)" :
                "small monkey (STR 7, WIL 7, 3hp, d4 Bite)";
            sBackground += " (seafaring knowledge)";
            break;

        case 7: /* Scholar */
            var sStudyArea = "";
            var sStudySpecialization = "";
            switch(d(12)) {
                case 1:
                    sStudyArea = "History";
                    sStudySpecialization = "archaeology";
                    break;
                case 2:
                    sStudyArea = "History";
                    sStudySpecialization = "culture and religion";
                    break;
                case 3:
                    sStudyArea = "History";
                    sStudySpecialization = "geography and politics";
                    break;
                case 4:
                    sStudyArea = "Life Science";
                    sStudySpecialization = "herbalism";
                    break;
                case 5:
                    sStudyArea = "Life Science";
                    sStudySpecialization = "medicine";
                    break;
                case 6:
                    sStudyArea = "Life Science";
                    sStudySpecialization = "zoology";
                    break;
                case 7:
                    sStudyArea = "Philology";
                    sStudySpecialization = "dead languages";
                    break;
                case 8:
                    sStudyArea = "Philology";
                    sStudySpecialization = "folklore and literature";
                    break;
                case 9:
                    sStudyArea = "Philology";
                    sStudySpecialization = "foreign languages";
                    break;
                case 10:
                    sStudyArea = "Physical Science";
                    sStudySpecialization = "astronomy and physics";
                    break;
                case 11:
                    sStudyArea = "Physical Science";
                    sStudySpecialization = "chemistry";
                    break;
                case 12:
                    sStudyArea = "Physical Science";
                    sStudySpecialization = "geoscience";
                    break;
                default: break;
            }
            sBackgroundItems.push("writing set", "a journal with your notes", "a book about " + sStudySpecialization);
                sBackground += " of " + sStudyArea + " (" + sStudySpecialization + ")";
            break;

        case 8: /* Soldier */
            switch(d(6)) {
                case 1:
                    sBackground += " (archer)";
                    sBackgroundWeapons = "longbow (d6)";
                    bBackgroundRanged = true;
                    break;
                case 2:
                    sBackground += " (cavalry)";
                    sBackgroundWeapons = "lance (d8, 2h if not mounted)";
                    bBackgroundMelee = true;
                    bTwohandedMelee = true;
                    break;
                case 3:
                    sBackground += " (musketeer)";
                    sBackgroundWeapons = "musket (d6)";
                    bBackgroundRanged = true;
                    break;
                case 4:
                    sBackground += " (officer)";
                    sBackgroundWeapons = "pistol (d6)";
                    bBackgroundRanged = true;
                    break;
                case 5:
                    sBackground += " (pikeman)";
                    sBackgroundWeapons = "pike (d8, 2h)";
                    bBackgroundMelee = true;
                    bTwohandedMelee = true;
                    break;
                case 6:
                    sBackground += " (swordsman)";
                    sBackgroundWeapons = "claymore (d8, 2h)";
                    bBackgroundMelee = true;
                    bTwohandedMelee = true;
                    break;
                default: break;
            }
            break;

        default: break;
    }

    /* ITEMS */
    var bMelee = bBackgroundMelee;
    var bRanged = bBackgroundRanged;
    var bShield = false;
    var bLightArmour = false;
    var sWeapons = "";
    var sItemsList = [];

    if(document.getElementById("checkbox_equipment").checked) {
        var spareMoney = 0;
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
            spareMoney = d(4) + d(4);
        }
        var money = iStats[3] - spareMoney;

        log("Total money is " + iStats[3]);
        log("Spare money is " + spareMoney);
        log("Spendable money is " + money);

        function buyMartialMelee() {
            let item = randomMartialMelee();
            if(item.includes("lance")) bTwohandedMelee = true; /* special case */
            sWeapons = addItem(sWeapons, item);
            money -= 10;
            bMelee = true;
            log("Bought " + item);
        }

        function buyMartialRanged() {
            let item = randomMartialRanged();
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
            let item = randomPet();
            iPets += 1;
            sPets = addItem(sPets, item);
            money -= 5;
            log("Bought " + item);
        }

        function buySimpleMelee() {
            let item = randomSimpleMelee();
            sWeapons = addItem(sWeapons, item);
            bTwohandedMelee = true;
            money -= 1;
            bMelee = true;
            log("Bought " + item);
        }

        function buySimpleRanged() {
            let item = randomSimpleRanged();
            sWeapons = addItem(sWeapons, item);
            money -= 1;
            bRanged = true;
            log("Bought " + item);
        }

        var iGear = 0;
        var iTool = 0;

        function buyGearOrTool() {
            var item;
            repeat:
            do {
                if(iGear > iTool) item = randomTool();
                else if(iTool > iGear) item = randomGear();
                else item = randomGearOrTool(sItemsList);
                log(item);
                /* check for repeats */
                if(item.constructor === Array) { /* item is an Array */
                    for(i = 0; i<item.length; i++) {
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
                if(bMelee && !bTwohandedMelee && !bShield) {
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
            else if (money > 5) spend5();
            else spend1();
        }
        iStats[3] = money + spareMoney;
    } // random equipment

    log("Before filtering:");
    log(sItemsList);

    /* Rope */
    var i = sItemsList.length;
    while(i--) {
        if(sItemsList[i] == ropeItem) {
            iRope += 10;
            sItemsList.splice(i, 1);
        }
    }
    sItemsList = sItemsList.filter(el => {return el != null && el != '';});

    sItemsList = sItemsList.sort();
    if(iRope > 0) {
        sItemsList.push(iRope + "&#8209;ft&nbsp;rope");
    }

    log("After filtering:");
    log(sItemsList);

    sItemsList.push("simple clothes (wearing), basic camping equipment, 6&nbsp;torches, 3&nbsp;days' rations");

    /* Armour */
    var sArmour = "";
    if(bLightArmour && bShield) sArmour = "Armour&nbsp;2 (light+shield)";
    else if(bLightArmour) sArmour = "Armour&nbsp;1 (light)";
    else if(bShield) sArmour = "Armour&nbsp;1 (shield)";
    if(bBrawler) { /* (brawler) */
        sArmour = "Armour&nbsp;1 (when unarmoured)"
    }

    /* OUT */
    out.innerHTML =
        "STR&nbsp;" + iStats[0] +
        ", DEX&nbsp;" + iStats[1] +
        ", WIL&nbsp;" + iStats[2] +
        ", " + hp + "hp";
    out.innerHTML = addItem(out.innerHTML, sArmour);
    out.innerHTML = addItem(out.innerHTML, sBackgroundWeapons);
    out.innerHTML = addItem(out.innerHTML, sWeapons);
    out.innerHTML = addItem(out.innerHTML, sPets);
    out.innerHTML = addItem(out.innerHTML, sBackground);
    out.innerHTML = addItem(out.innerHTML, sFeature) + ".";
    out.innerHTML += "<br/><br/>Backpack: " + sItemsList.join(", ") + ", " + iStats[3] + "&nbsp;shilling" + (iStats[3] > 1 ? "s." : ".");
    if(sTome.length > 0) {
        out.innerHTML += "<br/><br/>" + sTome;
    }

    document.getElementById('out_RandomCharacter').style.display="";
}

/* populate select_feature */
let sfeat = document.getElementById("select_feature");
var opt = document.createElement("option");
opt.text = "Random";
opt.value = 0;
sfeat.appendChild(opt);
for(i=1; i<sFeatureList.length; i++) {
    opt = document.createElement("option");
    opt.text = sFeatureList[i];
    opt.value = i;
    sfeat.appendChild(opt);
}

/* populate select_background */
let sback = document.getElementById("select_background");
opt = document.createElement("option");
opt.text = "Random";
opt.value = 0;
sback.appendChild(opt);
for(i=1; i<sBackgroundList.length; i++) {
    opt = document.createElement("option");
    opt.text = sBackgroundList[i];
    opt.value = i;
    sback.appendChild(opt);
}

/**************/
/* RANDOM NPC */
/**************/

function statNPC() {
    return d(8) + d(8) + 1;
}

function randomNPCAge() {
    switch(d(8)) {
        case 1:
        case 2: return "young";
        case 3:
        case 4:
        case 5:
        case 6: return "middle-aged";
        case 7:
        case 8: return "old";
        default: return "NONE";
    }
}

function randomNPCOccupation() {
    switch(stat()) { /* 3d6 */
        case 3: return "scholar";
        case 4: return "healer";
        case 5: return "artist";
        case 6: return "entertainer";
        case 7: return "criminal";
        case 8: return (randomBool() ? "vagabond" : "beggar");
        case 9: return (randomBool() ? "hunter" : "fisherman");
        case 10: return (randomBool() ? "farmer" : "peasant");
        case 11: return "craftsman";
        case 12: return "servant";
        case 13: return "merchant";
        case 14: return (randomBool() ? "soldier" : "guard");
        case 15: return "sailor";
        case 16: return (randomBool() ? "scribe" : "clerk");
        case 17: return "priest";
        case 18: return "noble";
        default: return "NONE";
    }
}

function randomNPCPersonality() {
    switch(d(20)) {
        case 1:  return "arrogant";
        case 2:  return "curious";
        case 3:  return "dimwitted";
        case 4:  return "dishonest";
        case 5:  return "friendly";
        case 6:  return "generous";
        case 7:  return "greedy";
        case 8:  return "gullible";
        case 9:  return "honest";
        case 10: return "hot-tempered";
        case 11: return "humble";
        case 12: return "inattentive";
        case 13: return "joyful";
        case 14: return "melancholic";
        case 15: return "polite";
        case 16: return "rude";
        case 17: return "smart";
        case 18: return "tranquil";
        case 19: return "unfriendly";
        case 20: return "wary";
        default: return "NONE";
    }
}

let sNPCDetail = [
    "NONE", /* 0 */
    "NONE", /* 1 */
    "NONE", /* 2 */
    "hunchback",
    "one eye",
    "scar",
    "stutter",
    "drunkard",
    "grey hair",
    "bald",
    "short hair",
    "bushy beard",
    "thin",
    "short",
    "tall",
    "overweight",
    "moustache",
    "long hair",
    "sideburns",
    "uncommon hair color*",
    "accent",
    "birthmark",
    "lazy eye",
    "prosthetic leg",
    "prosthetic arm"]; /* 22 */

function randomNPCDetail() {
    return(d(8) + d(8) + d(8)); /* 3d8 */
}

function anyOf(a, b, arr) {
    return ((arr.indexOf(a) > -1) && (arr.indexOf(b) > -1));
}

function compatibleDetails(d1, d2) {
    if(d1 == d2) return false;
    if(anyOf(d1, d2, [4, 22])) return false; /* one eye, lazy eye */
    if(anyOf(d1, d2, [8, 9, 19])) return false;
        /* grey hair, bald, uncommon hair color* */
    if(anyOf(d1, d2, [9, 10, 17])) return false; /* bald, short hair, long hair */
    if(anyOf(d1, d2, [12, 15])) return false; /* thin, overweight */
    if(anyOf(d1, d2, [13, 14])) return false; /* short, tall */
    return true;
}

function randomNPCDetailPrefix(n) {
    switch(n) {
        case 3: return "who is a ";     /* "hunchback" */
        case 4: return "with ";         /* "one eye" */
        case 5: return "with a ";       /* "scar" */
        case 6: return "who has a ";    /* "stutter" */
        case 7: return "who is a ";     /* "drunkard" */
        case 8: return "with ";         /* "grey hair" */
        case 9: return "who is ";       /* "bald" */
        case 10: return "with ";        /* "short hair" */
        case 11: return "with a ";      /* "bushy beard" */
        case 12: return "who is ";      /* "thin" */
        case 13: return "who is ";      /* "short" */
        case 14: return "who is ";      /* "tall" */
        case 15: return "who is ";      /* "overweight" */
        case 16: return "with a ";      /* "moustache" */
        case 17: return "with ";        /* "long hair" */
        case 18: return "with ";        /* "sideburns" */
        case 19: return "with an ";     /* "uncommon hair color*" */
        case 20: return "with an ";     /* "accent" */
        case 21: return "with a ";      /* "birthmark" */
        case 22: return "with a ";       /* "lazy eye" */
        case 23: return "with a ";      /* "prosthetic leg" */
        case 24: return "with a ";      /* "prosthetic arm" */
        default: return "NONE";
    }
}

function randomNPCDetails() {
    var d1, d2;
    do { /* COMPATIBLE DETAILS */
        d1 = randomNPCDetail();
        do { /* REPEATS */
            d2 = randomNPCDetail();
            if(d1 == d2 == 4) return "who is blind"; /* "one eye" */
            if(d1 == d2 == 5) return "covered in scars"; /* "scar" */
            if(d1 == d2 == 12) return "who looks haggard"; /* "thin" */
            if(d1 == d2 == 13) return "of a very short stature"; /* "short" */
            if(d1 == d2 == 14) return "of extremely tall stature"; /* "tall" */
            if(d1 == d2 == 15) return "who looks obese"; /* "overweight" */
            if(d1 == d2 == 23) return "with two prosthetic legs"; /* "prosthetic leg" */
            if(d1 == d2 == 24) return "with two prosthetic arms"; /* "prosthetic arm" */
            if(((d1 == 23) && d2 == 24) || ((d1 == 24) && (d2 == 23))) return "with a prosthetic arm and leg";
        } while(d1 == d2); /* END REPEATS */
    } while(!compatibleDetails(d1, d2)) /* END COMPATIBLE DETAILS */

    /* SPECIAL CASES */
    if(d2 == 3)  {d2 = d1; d1 = 3;}  /* hunchback */
    if(d2 == 7)  {d2 = d1; d1 = 7;}  /* drunkard */
    if(d2 == 9)  {d2 = d1; d1 = 9;}  /* bald */
    if(d2 == 12) {d2 = d1; d1 = 12;} /* thin */
    if(d2 == 15) {d2 = d1; d1 = 15;} /* overweight */
    if(d2 == 13) {d2 = d1; d1 = 13;} /* short */
    if(d2 == 14) {d2 = d1; d1 = 14;} /* tall */
    pre1 = randomNPCDetailPrefix(d1);
    pre2 = randomNPCDetailPrefix(d2);
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

    if(anyOf(d1, d2, [8, 10]))  return "with short grey hair";
    if(anyOf(d1, d2, [8, 11]))  return "with grey hair and a bushy beard";
    if(anyOf(d1, d2, [8, 16]))  return "with grey hair and a moustache";
    if(anyOf(d1, d2, [8, 17]))  return "with long grey hair";
    if(anyOf(d1, d2, [8, 18]))  return "with grey hair and sideburns";

    if(anyOf(d1, d2, [9, 11]))  return "who is bald and has a bushy beard";
    if(anyOf(d1, d2, [9, 16]))  return "who is bald and has a moustache";
    if(anyOf(d1, d2, [9, 18]))  return "who is bald and has sideburns";

    if(anyOf(d1, d2, [11, 16])) return "who has a beard with a moustache";
    if(anyOf(d1, d2, [11, 18])) return "who has sideburns with a goatee";

    if(anyOf(d1, d2, [10, 11])) return "with short hair and a bushy beard";
    if(anyOf(d1, d2, [10, 16])) return "with short hair and a moustache";
    if(anyOf(d1, d2, [10, 18])) return "with short hair and sideburns";
    if(anyOf(d1, d2, [10, 19])) return "with short hair of uncommon color*";

    if(anyOf(d1, d2, [16, 18])) return "who has sideburns with a moustache";

    if(anyOf(d1, d2, [17, 11])) return "with long hair and a bushy beard";
    if(anyOf(d1, d2, [17, 16])) return "with long hair and a moustache";
    if(anyOf(d1, d2, [17, 18])) return "with long hair and sideburns";
    if(anyOf(d1, d2, [17, 19])) return "with long hair of uncommon color*";

    if(anyOf(d1, d2, [19, 11])) return "with uncommon hair color* and a bushy beard";
    if(anyOf(d1, d2, [19, 16])) return "with uncommon hair color* and a moustache";
    if(anyOf(d1, d2, [19, 18])) return "with uncommon hair color* and sideburns";
    /* END SPECIAL CASES */
    return pre1 + sNPCDetail[d1] + " " + pre2 + sNPCDetail[d2];
}

function generateRandomNPC() {
    let out = document.getElementById('out_RandomNPC');
    let stats = "STR " + statNPC() + ", DEX " + statNPC() + ", WIL " + statNPC();
    let hp = d(6) + "hp";
    var whois = randomNPCAge() + " " + randomNPCPersonality() + " " +
                randomNPCOccupation() + " " + randomNPCDetails() + ".";

    if(whois.search("color*") > -1) {
        whois += "<br /><i>* Usually blonde or red, depends on a population.</i>";
    }

    out.innerHTML = "";
    out.innerHTML = addItem(out.innerHTML, stats);
    out.innerHTML = addItem(out.innerHTML, hp);
    out.innerHTML = addItem(out.innerHTML, whois);
    document.getElementById('out_RandomNPC').style.display="";
}

