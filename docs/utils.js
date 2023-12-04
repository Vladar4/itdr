var debug = true; /* Debug mode (print logs) */

function log(msg) {
    /* log message in debug mode */
    if(debug) console.log(msg);
}

/* ARRAY */

function high(a) {
    /* return the last index of the array */
    return (a.length - 1);
}

/* STRING */

function addItem(s1, s2) {
    /* return a new string separated by a comma */
    if(s1 === "") return s2;
    if(s2 === "") return s1;
    return (s1 + ", " + s2);
}

/* DOCUMENT */

function docId(id) {
    return document.getElementById(id);
}

function docClass(classname) {
    return document.getElementsByClassName(classname);
}

function docTag(tagname) {
    return document.getElementsByTagName(tagname);
}

function docCreate(nodename) {
    return document.createElement(nodename);
}

/* SPOILERS */

function spoiler(event, id) {
    var elem = docId(id);
    if(elem.classList.contains('spoiler-hidden')) {
        elem.classList.replace('spoiler-hidden', 'spoiler-shown');
    }
    else if(elem.classList.contains('spoiler-shown')){
        elem.classList.replace('spoiler-shown', 'spoiler-hidden');
    }
    if(event.target.classList.contains('spoiler')) {
        event.target.classList.replace('spoiler', 'spoiler-clicked');
    }
    else if(event.target.classList.contains('spoiler-clicked')) {
        event.target.classList.replace('spoiler-clicked', 'spoiler');
    }
}

/* TABS */

function openTab(button, id) {
    /*
     *  Open the `id` tab in the document.
     *
     *  `button` - tab button object
     *  `id` - tab id
     */
    const tabs = docClass('tab');
    for(let i=0; i<tabs.length; i++) {
        /* hide all tabs */
        tabs[i].style.display = 'none';
    }

    const links = docClass('tab-link');
    for(let i=0; i<links.length; i++) {
        /* set all buttons as inactive */
        links[i].className = links[i].className.replace(' active', '');
    }

    /* show tab */
    docId(id).style.display = 'block';
    /* set button as active */
    button.className += ' active';
    /* update the address bar hash */
    window.location.hash = "#"+id;
    /* reset page scroll */
    docTag('body')[0].scrollIntoView();
    window.scrollTo(0, 0);
}

function onOpenTab(ev, id) {
    /* get button object from the `ev` event */
    const button = ev.currentTarget;
    openTab(button, id);
}

function pageTabs(page) {
    /*
     *  Return an array of the `page`'s tabs.
     */
    if(page === 'downloads')    return ['main', 'sup', 'adv', 'misc'];
    else if(page === 'tools')   return ['creatures', 'misc'];
    else return [];
}

function onLoadTab(page, main) {
    /*
     *  Call as
     *  ```
     *      <body onload="onLoadTab("page_name", "id_name")">
     *  ```
     *
     * `page` - page from which the function is called (see `pageTabs()` above)
     *  `main` - main address hash, default = 'main'
     */
    var main = main;
    if(main.length < 1) main = 'main';

    /* get tabs array for the page */
    const tabs = pageTabs(page);
    /* get address hash without # */
    var hash = window.location.hash.toLowerCase().substring(1);
    /* check if hash is empty */
    if(hash.length < 1) hash = main;

    /* open the tab that hash is pointing to */
    if(tabs.includes(hash)) openTab(docId('btn-'+hash), hash);  /* found */
    else openTab(docId('btn-'+main), main);                     /* not found */
}

/* COUNTDOWN */

function formatDays(message, days) {
    return message.replace('${days}', days === 1 ? `${days} day` : `${days} days`);
}

function updateCountdown(id, targetDate, msg1, msg2) {
    const currentDate = new Date().getTime();
    const delta = targetDate - currentDate;
    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    var elem = docId(id);
    if (days > 0) {
        elem.innerHTML = formatDays(msg1, days);
    } else {
        elem.innerHTML = msg2;
    }
    if (delta < 0) {
        elem.innerHTML = "";
    }
    return delta;
}

/*
 *  startCountdown(date, timeZone, msg1, msg2, id);
 *
 *  * date - in format of "Dec 23, 2023 23:59:59"
 *  * timeZone - in format of "America/New_York"
 *  * msg1 - event countdown message, in format of "${days} left until ..."
 *  * msg2 - event happening message, in format of "... is today!"
 *  * id - countdown element id, default is "countdown"
 *
 *  "${days}" in the text of msg1 will be replaced by amount of days left ("1 day", "2 days", etc.)
 */
function startCountdown(date, timeZone, msg1, msg2, id='countdown') {
    const targetDateUtc = new Date(date).toLocaleString("en-US", { timeZone });
    const targetDate = new Date(targetDateUtc).getTime();

    updateCountdown(id, targetDate, msg1, msg2);
    const x = setInterval(function() {
        if (updateCountdown(id, targetDate, msg1, msg2) < 0) {
            clearInterval(x);
        }
    }, 60000);
}

