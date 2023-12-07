function alphabetPosition(text) {
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return text.toLowerCase().replace(/[^A-Za-z]/g, '').split('').map((char, i)=>{
      return alph.indexOf(char) + 1
    }).join(' ');
}