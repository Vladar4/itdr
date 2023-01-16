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
    let result = "NONE";
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
    let result = "NONE";
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
    let result = "NONE";
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

const ropeItem = "10-ft rope";

function randomGear() {
    let result = "NONE";
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
    let result = "NONE";
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
    let result = "NONE";
    switch(d(4)) {
        case 1: return "cat (STR 6, WIL 8, 2hp, d4 Claws)";
        case 2: return "mutt (STR 8, WIL 6, 2hp, d4 Bite)";
        case 3: return "owl (STR 6, WIL 6, 2hp, d4 Claws)";
        case 4: return "parrot (STR 6, WIL 6, 2hp, d4 Claws)";
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
    "Assassin",
    "Beastmaster",
    "Berserker",
    "Brawler",
    "Commander",
    "Duellist",
    "Healer",
    "Ironclad",
    "Mystic",
    "Sharpshooter",
    "Skilled",
    "Swashbuckler",
    "Tactician",
    "Thaumaturge",
    "Warrior"]; /* 15 */

const sCantripList = [
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

const sSpellList = [
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

const sSkillList = [
    "NONE",
    "animal handling",
    "athletics",
    "burgling",
    "cheating",
    "drinking",
    "quickness",
    "stealth",
    "navigation",
    "negotiation",
    "tracking"]; /* 10 */

const sGiftList = [
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

const sBackgroundList = [
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
    const out = docId('out_RandomStats');
    iStats = [stat(), stat(), stat(), stat()];
    out.innerHTML =
        "STR " + iStats[0] +
        ", DEX " + iStats[1] +
        ", WIL " + iStats[2] +
        ", Money " + iStats[3];
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
            let cantrips = shuffledIndex(sCantripList, 2).sort(
                (function(a, b) {return a - b;}));
            let spells = shuffledIndex(sSpellList, 6).sort(
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
            let skills = shuffledIndex(sSkillList, 2).sort(
                (function(a, b) {return a - b;}));
            sFeature += " (" + sSkillList[skills[0]] + ", " + sSkillList[skills[1]] + ")";
            break;

        case 14: /* Thaumaturge */
            let gifts = shuffledIndex(sGiftList, 2).sort(
                (function(a, b) {return a - b;}));
            sFeature += " 1 (d4 Gift die, " + sGiftList[gifts[0]] + ", " + sGiftList[gifts[1]] + ")";
            break;

        case 15: /* Warrior */
            sFeature += " 1 (bonus d4 weapon Damage)"
            break;

        default: break;
    }

    /* HP */
    let hp = 0;
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
            iStats[3] += nd(2, 4); /* extra 2d4s */
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
            let sStudyArea = "";
            let sStudySpecialization = "";
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
        sItemsList.push(iRope + "&#8209;ft&nbsp;rope");
    }

    log("After filtering:");
    log(sItemsList);

    sItemsList.push("simple clothes (wearing), basic camping equipment, 6&nbsp;torches, 3&nbsp;days' rations");

    /* Armour */
    let sArmour = "";
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

const sNPCDetail = [
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
    "rare hair colour*",
    "accent",
    "birthmark",
    "lazy eye",
    "prosthetic leg",
    "prosthetic arm"]; /* 22 */

function randomNPCDetail() {
    return(nd(3, 8)); /* 3d8 */
}

function anyOf(a, b, arr) {
    return ((arr.indexOf(a) > -1) && (arr.indexOf(b) > -1));
}

function compatibleDetails(d1, d2) {
    if(d1 == d2) return false;
    if(anyOf(d1, d2, [4, 22])) return false; /* one eye, lazy eye */
    if(anyOf(d1, d2, [8, 9, 19])) return false;
        /* grey hair, bald, rare hair colour* */
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
        case 19: return "with a ";     /* "rare hair colour*" */
        case 20: return "with an ";     /* "accent" */
        case 21: return "with a ";      /* "birthmark" */
        case 22: return "with a ";       /* "lazy eye" */
        case 23: return "with a ";      /* "prosthetic leg" */
        case 24: return "with a ";      /* "prosthetic arm" */
        default: return "NONE";
    }
}

function randomNPCDetails() {
    let d1, d2;
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
    if(anyOf(d1, d2, [10, 19])) return "with short hair of a rare colour*";

    if(anyOf(d1, d2, [16, 18])) return "who has sideburns with a moustache";

    if(anyOf(d1, d2, [17, 11])) return "with long hair and a bushy beard";
    if(anyOf(d1, d2, [17, 16])) return "with long hair and a moustache";
    if(anyOf(d1, d2, [17, 18])) return "with long hair and sideburns";
    if(anyOf(d1, d2, [17, 19])) return "with long hair of a rare colour*";

    if(anyOf(d1, d2, [19, 11])) return "with a rare hair colour* and a bushy beard";
    if(anyOf(d1, d2, [19, 16])) return "with a rare hair colour* and a moustache";
    if(anyOf(d1, d2, [19, 18])) return "with a rare hair colour* and sideburns";
    /* END SPECIAL CASES */
    return pre1 + sNPCDetail[d1] + " " + pre2 + sNPCDetail[d2];
}

function generateRandomNPC() {
    const out = docId('out_RandomNPC');
    const stats = "STR " + statNPC() + ", DEX " + statNPC() + ", WIL " + statNPC();
    const hp = d(6) + "hp";
    let whois = randomNPCAge() + " " + randomNPCPersonality() + " " +
                randomNPCOccupation() + " " + randomNPCDetails() + ".";

    if(whois.search("colour*") > -1) {
        whois += "<br/><i>* Usually blonde or red, depends on a population.</i>";
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
    "artificial@",
    "colonial",
    "divine",
    "eldritch",
    "ethereal@",
    "fiendish",
    "magical",
    "mutated",
    "natural",
    "primitive",
    "relict",
    "undead"], /* 12 */
    ["NONE", /* Table 2 */
    "bald",
    "barbed",
    "bloated",
    "camouflaged",
    "diseased",
    "furry",
    "gaunt",
    "graceful",
    "invisible",
    "luminous",
    "multicoloured",
    "muscular",
    "rotting",
    "rusty",
    "shadowy",
    "shimmering",
    "slimy",
    "spotted",
    "stinking",
    "striped"], /* 20 */
    ["NONE", /* Table 3 */
    "acidic",
    "acoustic",
    "adhesive",
    "armed",
    "armoured@",
    "electric",
    "fire",
    "giant@",
    "hypnotic",
    "ice@",
    "multiplying",
    "parasite",
    "poisonous",
    "psychic",
    "shelled@",
    "shooting",
    "spewing",
    "swallowing",
    "tiny",
    "vampiric"], /* 20 */
    ["NONE", /* Table 4 */
    "ambushing",
    "cunning",
    "devouring",
    "elusive",
    "friendly",
    "gibbering",
    "grappling",
    "greedy",
    "insane",
    "intelligent",
    "musical",
    "nocturnal",
    "peaceful",
    "raging",
    "scavenging",
    "screaming",
    "silent",
    "skittish",
    "swarming",
    "whispering"], /* 20 */
    ["NONE", /* Table 5 */
    "aquatic",
    "burrowing",
    "climbing",
    "crawling",
    "fast",
    "floating",
    "flowing",
    "flying",
    "gliding",
    "immobile",
    "jumping",
    "rolling",
    "running",
    "shambling",
    "slithering",
    "slow",
    "soaring",
    "subterranean",
    "teleporting",
    "walking"], /* 20 */
    ["NONE", /* Table 6 */
    "armless",
    "asymmetrical",
    "bodiless",
    "four-armed",
    "four-legged",
    "legless",
    "limbless",
    "multi-armed",
    "multi-legged",
    "multi-limbed",
    "one-armed",
    "one-legged",
    "radial",
    "spherical",
    "tailed",
    "tentacled",
    "two-armed",
    "two-headed",
    "two-legged",
    "winged"], /* 20 */
    ["NONE", /* Table 7 */
    "blind",
    "brainless",
    "deaf",
    "eyeless",
    "headless",
    "horned",
    "multi-eyed",
    "multi-headed",
    "mute",
    "one-eyed",
    "two-headed",
    ["with trunk", "with face tentacles"]], /* 12 */
    ["NONE", /* Table 8 */
    ["bone@", "chitinous@"],
    ["clay", "mud", "sludge"],
    ["cloth", "leather"],
    ["crystalline@", "gem@"],
    ["elemental", "gaseous"],
    "fleshy",
    "liquid",
    "metallic@",
    "stone@",
    "wooden@"], /* 10 */
    ["NONE", /* Table 9 */
    "amorphous mass",
    "amphibian",
    "animated object",
    "bat",
    "bird",
    "bear-like",
    "cat-like",
    ["crustacean@", "myriapod@"],
    "dog-like",
    "fish",
    "fungi",
    "hoofed",
    "humanoid",
    ["insect", "arachnid"],
    ["mollusc", "worm"],
    "plant",
    ["reptile", "serpent"],
    ["rodent", "rabbit", "hedgehog", "mole", "shrew"],
    "chimera",
    "shape-shifter"]]; /* 20 */

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
    tables.push(idForm); /* Form mable is always present */
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

    abilities = "STR " + stats[0] +
                ", DEX " + stats[1] +
                ", WIL " + stats[2] +
                ", " + hp + "hp" +
                ((armour > 0) ? (", Armour " + armour) : ("")) +
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
    opt.text = "" + i + "d6 HP";
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
        [4, "backpack", "haversack"],
        [2, "bottle"],
        [2, "box", "casket"],
        [2, "decanter"],
        [2, "drinking horn"],
        [2, "flask", "canteen"],
        [2, "jug"],
        [4, "pouch"],
        [4, "quiver"],
        [4, "sack", "bag"],
        [2, "vial"],
        [0, "waterskin"]
    ],
    [   /* 2. CONSUMABLE */
        [-1, "NONE"],
        [0, "balm", "oil", "ointment"],
        [0, "bean", "root", "seed"],
        [0, "candle", "torch"],
        [0, "chalk", "pencil"],
        [0, "dust", "powder"],
        [0, "food (fruit, pastry, etc.)"],
        [0, "herb", "flower", "leaf"],
        [0, "ink", "paint"],
        [0, "poison"],
        [0, "potion", "elixir"]
    ],
    [   /* 3. GARMENT */
        [-1, "NONE"],
        [4, "belt"],
        [3, "boots"],
        [4, "cloak"],
        [4, "coat"],
        [4, "doublet"],
        [4, "dress"],
        [4, "gloves"],
        [4, "hat"],
        [4, "hood"],
        [4, "hose"],
        [4, "jerkin"],
        [4, "mantle"],
        [4, "robe"],
        [3, "sandals"],
        [4, "shirt"],
        [3, "shoes"],
        [4, "skirt"],
        [4, "trousers"],
        [4, "tunic"],
        [4, "vestments"]
    ],
    [   /* 4. JEWELLERY */
        [-1, "NONE"],
        [2, "anklet"],
        [2, "belt buckle"],
        [2, "bracelet"],
        [2, "brooch"],
        [2, "chain"],
        [2, "cloak pin"],
        [2, "crown", "coronet"],
        [2, "diadem", "tiara"],
        [2, "earring"],
        [2, "eyepatch"],
        [2, "gorget"],
        [2, "hairpin"],
        [2, "headband"],
        [2, "locket"],
        [2, "mask"],
        [2, "medallion"],
        [2, "necklace"],
        [2, "pectoral"],
        [2, "pendant"],
        [2, "ring"]
    ],
    [   /* 5. MISC. */
        [-1, "NONE"],
        [2, "amulet", "talisman"],
        [3, "book"],
        [2, "bowl", "bucket"],
        [2, "brazier"],
        [3, "broom"],
        [3, "brush"],
        [2, "candelabrum"],
        [3, "cards", "dice"],
        [4, "carpet"],
        [2, "censer"],
        [2, "coin"],
        [2, "comb"],
        [2, "corkscrew"],
        [2, "cup", "chalice", "goblet"],
        [2, "fan"],
        [2, "figurine", "idol"],
        [3, "gem", "pearl"],
        [2, "hammer"],
        [4, "handkerchief"],
        [2, "hook"],
        [2, "horseshoe"],
        [2, "lantern"],
        [2, "lockpick"],
        [2, "manacles"],
        [2, "mirror"],
        [3, "monocle", "lens"],
        [2, "needle"],
        [3, "orb", "crystal"],
        [2, "pickaxe"],
        [2, "pipe"],
        [2, "plate", "tray"],
        [2, "prosthesis"],
        [2, "quill"],
        [2, "rod", "sceptre"],
        [4, "rope"],
        [4, "saddle"],
        [2, "sand timer"],
        [2, "scissors"],
        [2, "shovel"],
        [2, "sickle"],
        [2, "skull"],
        [2, "spectacles"],
        [2, "spike"],
        [2, "spyglass"],
        [2, "staff"],
        [4, "tablecloth"],
        [2, "tablet"],
        [2, "umbrella"],
        [2, "wand"],
        [2, "whistle"]
    ],
    [   /* 6. MUSICAL INSTRUMENT */
        [-1, "NONE"],
        [3, "bagpipe"],
        [2, "bell"],
        [3, "bladder pipe"],
        [2, "crumhorn"],
        [3, "drum"],
        [2, "dulcimer"],
        [2, "fiddle"],
        [2, "flute"],
        [2, "harp"],
        [2, "hurdy-gurdy"],
        [2, "jaw harp"],
        [2, "lute"],
        [2, "lyre"],
        [2, "mandolin"],
        [2, "ocarina"],
        [2, "rebec"],
        [2, "shawm"],
        [3, "tambourine"],
        [2, "viol"],
        [2, "zither"]
    ],
    [   /* 7. LIGHT ARMOUR */
        [-1, "NONE"],
        [3, "bracers"],
        [3, "gambeson"],
        [3, "gloves"],
        [3, "greaves"],
        [2, "helmet"],
        [3, "leather armour"]
    ],
    [   /* 8. FULL ARMOUR */
        [-1, "NONE"],
        [3, "bracers"],
        [3, "cuirass"],
        [3, "gauntlets"],
        [3, "greaves"],
        [2, "helmet"],
        [3, "mail armour"],
        [3, "plate armour"],
        [3, "sabatons"],
        [3, "scale armour"],
        [3, "segmented armour"]
    ],
    [   /* 9. SHIELD */
        [-1, "NONE"],
        [2, "buckler"],
        [2, "heater shield"],
        [2, "kite shield"],
        [2, "pavise"],
        [2, "round shield"],
        [2, "square shield"]
    ],
    [   /* 10. WEAPON & AMMO */
        [-1, "NONE"],
        [2, "arrow"],
        [2, "axe"],
        [2, "bolt"],
        [2, "boomerang"],
        [2, "bullet"],
        [2, "crossbow"],
        [2, "dagger"],
        [2, "dart"],
        [2, "halberd"],
        [2, "hunting bow"],
        [2, "lance"],
        [2, "longbow"],
        [2, "pistol"],
        [2, "mace"],
        [2, "musket"],
        [4, "sling"],
        [2, "spear"],
        [2, "sword"],
        [2, "throwing star"],
        [2, "war hammer"]
    ]];

const sItemAttribute = [
    "NONE",
    "ancient",
    "bejewelled",
    "colourful",
    "crude",
    "dingy",
    "exotic",
    "grotesque",
    "heavy",
    "intricate",
    ["light", "thin"],
    "menacing",
    "ornate",
    "otherworldly",
    "patterned",
    "peculiar",
    "refined",
    "rugged",
    "shiny",
    "sleek",
    "sophisticated"]; /* 20 */

const sItemColour = [
    "NONE",
    "snow white",
    "ash grey",
    "jet black",
    "crimson red",
    "chestnut brown",
    "pumpkin orange",
    "lemon yellow",
    "malachite green",
    "sky blue",
    "ultramarine blue",
    "lavender violet",
    "orchid magenta"]; /* 12 */

const sItemFabric = [
    "NONE",
    "cotton",
    "felt",
    "fur",
    "hair",
    "leather",
    "linen",
    "silk",
    "wool"]; /* 8 */

const sItemMaterial = [
    "NONE",
    "amber",
    ["bone", "chitin"],
    "brass",
    "bronze",
    "ceramic",
    "copper",
    "coral",
    "crystal",
    "glass",
    "gold",
    "iron",
    ["ivory", "horn"],
    "jade",
    "jet",
    "obsidian",
    "pewter",
    "silver",
    "steel",
    "stone",
    "wooden"]; /* 20 */

const sItemPeculiarity = [
    "NONE",
    "that changes colour when no one is looking",
    "that is cold to the touch",
    "that emits barely audible buzzing",
    "that faintly glows in the dark",
    "that is heavier than it looks",
    "that is lighter than it looks",
    ["that is oily to the touch", "that is slimy to the touch"],
    "that is semi-transparent",
    "that smells weirdly but not unpleasantly",
    "that sometimes appears to be slightly moving",
    "that vibrates just a little bit from time to time",
    "that is warm to the touch"]; /* 12 */

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
    let itemColour = "";
    switch(itemAppearanceCode) {
        case 0: /* colour */
            itemColour = " of " + randomArrayItem(sItemColour) + " colour";
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
            itemColour = " of " + randomArrayItem(sItemColour) + " colour";
            break;
        case 4: /* attribute + colour + fabric */
            itemAppearance = randomArrayItem(sItemAttribute) + " " +
                 randomArrayItem(sItemFabric) + " ";
            itemColour = " of " + randomArrayItem(sItemColour) + " colour";
            break;
        default: itemAppearance = "NONE "; itemColour = " of NONE colour";
    }

    let itemPeculiarity = "";
    if(d(6) == 1) {
        itemPeculiarity = " " + randomArrayItem(sItemPeculiarity);
    }

    let itemString = itemAppearance + item + itemColour + itemPeculiarity + ".";
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
        case 1: return "cold, ";
        case 6: return "warm, ";
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
        case 4: return "clear";
        case 5:
        case 6:
        case 7:
        case 8: return "cloudy";
        case 9:
        case 10:
        case 11:
        case 12: return "overcast";
        case 13:
        case 14: return "drizzle or fog";
        case 15:
        case 16:
        case 17:
        case 18: return "rain or snow";
        case 19:
        case 20: return "storm or snowstorm";
    }
}

const sWindForce = [
    "calm",
    "breeze",
    "average wind",
    "strong wind",
    "gale"]; /* 5 */

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
            direction = "adverse";
            switch(force) {
                case 1: mul = "×⅓"; break;
                case 2: mul = "×½"; break;
                case 3: mul = "×⅔"; break;
                case 4: mul = "×0"; break;
            }
            break;
        case 4:
        case 5:
            direction = "side";
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
            direction = "favourable";
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
    return direction + " " + sWindForce[force] + " (" + mul + " sailing multiplier)";
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

