function duplicateCount(text){
    let count = 0
    
    let splitText = text.toLowerCase().split('')
    
    splitText.forEach((letter, indx)=>{
      if(indx !== splitText.lastIndexOf(letter) && splitText.indexOf(letter) === indx){
        count++
      }
    })
    
    return count
}