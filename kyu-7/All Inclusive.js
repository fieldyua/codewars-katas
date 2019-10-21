function containAllRots(strng, arr) {
    return [...strng].map((_, i) => strng.slice(i) + strng.slice(0, i)).every(s => ~arr.indexOf(s));
}
