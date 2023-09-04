function arrayDiff(a, b) {
    if(b.length === 0) return a
    
    return a.filter(elem => {
      return !b.includes(elem)
    })
}