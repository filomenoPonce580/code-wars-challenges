function addedChar(s1, s2){
    let one = Array.from(new Set(s1.split('').sort()))
    let two = Array.from(new Set(s2.split('').sort().reverse()))
    
    let cutOff = one.length
    
    console.log(one, two)
    return two.slice(cutOff).join('')
}