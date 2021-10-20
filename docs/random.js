function randomBool() {
    /* return true or false randomly */
    return Math.random() < 0.5;
}

function randomInt(min, max) {
    /* return random integer in the min-max range (inclusive) */
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
}

function d(x) {
    /* 1dX die roll */
    return randomInt(1, x);
}

function nd(n, x) {
    /* NdX die roll */
    let result = 0;
    for(let i=0; i<n; i++) {
        result += d(x);
    }
    return result;
}

function shuffle(array) {
    /* shuffles array in-place randomly */
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}

function shuffledIndex(array, n, start=1) {
    /* return n shuffled item indexes from the array.
     * ! starts at index 1 by default ! */
    let shuffled = new Array(array.length-start);
    for(let i=start; i<array.length; i++) {
        shuffled[i-start] = i;
    }
    shuffle(shuffled);
    return shuffled.slice(-n);
}

