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

function docCreate(nodename) {
    return document.createElement(nodename);
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
    if(page === 'downloads')    return ['main', 'misc']; /* TODO "sup", "adv" */
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

