function encryptor (key, message) {
    let letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let lowerCaseArray = letters.split('')
    let upperCaseArray = letters.toUpperCase().split('')
    const specials = /[^A-Za-z 0-9]/g
    
    if(key === 0 || message === '') return message
    
    if(key > 0){
      return message.split('').map((character)=>{
        if(character === ' ' || specials.test(character)) return character
        if(character === character.toUpperCase()){ //means character in question is CAP
          return upperCaseArray[upperCaseArray.indexOf(character)+key]
        } else {
          return lowerCaseArray[lowerCaseArray.indexOf(character)+key]
        }
      }).join('')
    } 
    
    else if (key < 0) {
      return message.split('').map((character)=>{
        if(character === ' ' || specials.test(character)) return character
        
        if(character === character.toUpperCase()){ //means character in question is CAP
          return upperCaseArray[upperCaseArray.lastIndexOf(character)+key]
        } else {
          return lowerCaseArray[lowerCaseArray.lastIndexOf(character)+key]
        }
      }).join('')
    }
}