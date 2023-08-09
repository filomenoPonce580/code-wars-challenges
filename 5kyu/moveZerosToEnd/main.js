function moveZeros(arr) {
    let zeros = []
    let removed = arr.filter((elem, indx)=>{
      if(elem === 0) zeros.push(elem)
      return elem !== 0
    })
    return [...removed, ...zeros]
}