function generateHashtag (str) {
    if (str === '' || str.split(" ").filter(x=>x!=='').length===0) return false
    let array = str.split(' ').map((word)=>{
      if (!word.trim()) {
        return '';
      }
      return word[0].toUpperCase() + word.slice(1)
    })
    
    array.unshift('#')
    
    return array.join('').length <= 140 ? array.join('') : false
}