function uniqueInOrder(iterable){
    let result = [];
    if(typeof iterable === 'string'){
      iterable = iterable.split('')
    }
    iterable.forEach((char, i)=>{
      if(char !== iterable[i+1]) result.push(char);   
    })
    return result
}