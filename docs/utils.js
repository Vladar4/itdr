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

function openTab(ev, id) {
    const tabs = docClass('tab');
    for(let i=0; i<tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    const links = docClass('tab-link');
    for(let i=0; i<links.length; i++) {
        links[i].className = links[i].className.replace(' active', '');
    }

    docId(id).style.display = 'block';
    ev.currentTarget.className += ' active';
}

