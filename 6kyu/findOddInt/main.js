function findOdd(a) {
    if(a.length === 1) return a[0]
  
    let integers = {}
    a.forEach(int =>{
      if(!integers[int]){
        integers[int] = 1
      }else{
        integers[int] += 1
      }
    })
    
    for(const nums in integers){
      if (integers[nums]%2===1) return Number(nums)
    }
}