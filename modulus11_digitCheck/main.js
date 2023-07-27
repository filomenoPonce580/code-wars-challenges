function addCheckDigit(number) {

    let factor = 2
    let totals = 0
    let numberArr = number.split('').map((num)=>{
      return Number(num)
    })
    
    
    for(let i = number.length-1; i > -1; i--){
      totals += numberArr[i] * factor
      factor++
      if(factor > 7) factor = 2
    }
    
    let remainder = totals % 11
    
    if(remainder === 0) return number + remainder
    return remainder === 1 ? number + "X" : number + (11 - remainder)
}