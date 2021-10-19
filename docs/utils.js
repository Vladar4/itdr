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
    if(s1 == "") return s2;
    if(s2 == "") return s1;
    return s1 + ", " + s2;
}

