function sortArray(array) {
    const odds = array.filter((num) => num % 2).sort((a,b) => a - b);
    return array.map((num) => num % 2 ? odds.shift() : x);
}