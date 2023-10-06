function wave(str){
    let result = []
    
    for(let i = 0; i < str.length; i++){
      let moddedStr = str.split('');
      if(str[i] !== ' '){
        moddedStr[i] = moddedStr[i].toUpperCase()
        result.push(moddedStr.join(''))         
      }
    }
    
    return result
}