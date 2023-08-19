function solve(s) {
    const alph = ' abcdefghijklmnopqrstuvwxyz';
    const x = s.split(/[aeiou]/g);
    let res = x.map(el => el.split('').reduce((a,b)=>a+alph.indexOf(b),0))
    return Math.max(...res);
}