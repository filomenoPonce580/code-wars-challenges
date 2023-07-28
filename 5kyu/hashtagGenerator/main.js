function generateHashtag (str) {
    if(!str || str.split(" ").filter(x=>x!=='').length===0) return false;
    
    let result = '#' + str.split(' ').map( word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
 
    return result.length > 140 ? false : result;
}