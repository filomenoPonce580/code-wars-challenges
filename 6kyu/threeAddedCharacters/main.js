function addedChar(s1, s2){
    let one = [...s1].sort()
    let two = [...s2].sort()
    return two.find((char, i) => char !== one[i])
}

// function addedChar(s1, s2){
//     let one = Array.from(new Set(s1.split('').sort()))
//     let two = Array.from(new Set(s2.split('').sort().reverse()))
    
//     let cutOff = one.length
    
//     console.log(one, two)
//     return two.slice(cutOff).join('')
// }