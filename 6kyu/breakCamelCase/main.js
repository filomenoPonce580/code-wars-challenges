function solution(string) {
    let uppers = /^[A-Z]*$/
    
    return string.split('').map((char, i) => {
      if (i > 0 && uppers.test(char)) {
        return ' ' + char;
      } else {
        return char;
      }
    }).join('');
}