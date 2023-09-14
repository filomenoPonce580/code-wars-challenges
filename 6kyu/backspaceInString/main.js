function cleanString(s) {
    let array = s.split('')
    let deletes = 0
    let result = [];
    for(let i = array.length - 1; i >= 0; i--){
      if(array[i] !== "#"){
        if (deletes === 0){
          result.unshift(array[i])
        } else {
          deletes --
        }
      } else if (array[i] === '#'){
        deletes ++
      }
    }
    return result.join('')
}