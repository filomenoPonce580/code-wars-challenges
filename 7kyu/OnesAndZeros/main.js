const binaryArrayToNumber = arr => {
    let result = 0
    let multiplier = 1
    arr.reverse().forEach((num, i)=>{
      if(num === 1){
        result += multiplier
      }
      multiplier = multiplier*2
    })
    return result
};