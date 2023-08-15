function getScore(dice) {
    let count = (array, x) => array.reduce((a, b) => a + (b === x ? 1 : 0), 0);
    let counter = Array.from({length: 7}, v => 0);
    dice.forEach(n => counter[n]++);
    if (count(counter, 1) === 6) return 1000;
    if (count(counter, 2) === 3) return 750;
    let factors = [0, 10, 2, 3, 4, 5, 6];
    let result = 0;
    for (let i = 1; i <= 6; i += 1) {
        if (counter[i] >= 3) {
            result += factors[i] * (counter[i] - 2) * 100;
            counter[i] = 0;
        }
    }
    result += counter[1] * factors[1] * 10;
    result += counter[5] * factors[5] * 10;
    return result || "Zonk";
};