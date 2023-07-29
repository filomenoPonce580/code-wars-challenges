function encryptor (key, message) {
    let letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    let lowerCaseArray = letters.split('');
    let upperCaseArray = letters.toUpperCase().split('');
    
    key = key % 26;
    
    if(key === 0 || message === '') return message
    
    if(key > 0){
      return message.split('').map((character) => {
          if (!character.match(/[A-Za-z]/)) return character;
  
          if(character === character.toUpperCase()){ //means character in question is CAP
            let encryptedIndex = upperCaseArray.indexOf(character) + key;
            if (encryptedIndex < 0) encryptedIndex += 26;
            return upperCaseArray[encryptedIndex];
          } else {
            let encryptedIndex = lowerCaseArray.indexOf(character) + key;
            if (encryptedIndex < 0) encryptedIndex += 26;
            return lowerCaseArray[encryptedIndex];
          }
      }).join('');  
    } else if (key < 0) {
      return message.split('').map((character) => {
        if (!character.match(/[A-Za-z]/)) return character;
  
        if(character === character.toUpperCase()){ //means character in question is CAP
          let encryptedIndex = upperCaseArray.lastIndexOf(character) + key;
          if (encryptedIndex < 0) encryptedIndex += 26;
          return upperCaseArray[encryptedIndex];
        } else {
          let encryptedIndex = lowerCaseArray.lastIndexOf(character) + key;
          if (encryptedIndex < 0) encryptedIndex += 26;
          return lowerCaseArray[encryptedIndex];
        }
      }).join(''); 
    }
}