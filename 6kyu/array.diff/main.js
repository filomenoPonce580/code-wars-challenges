function arrayDiff(a, b) {
    return a.filter(elem => !b.includes(elem))
}