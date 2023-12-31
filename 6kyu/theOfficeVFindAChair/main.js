// function meeting(x, need){
//     if(need===0) return 'Game On'
  
//     let result = []
//     for(let i = 0; i < x.length; i++){
//       let chairs = x[i][1]
//       let occupied = x[i][0].length
//       let available = chairs - occupied
//       if(available <= 0){
//         result.push(0)
//       } else {
//         result.push(available)
//       }
      
//       if(result.reduce((a,c)=>a+c,0) >= need) return result
//     }
    
//     return "Not enough!"
// }

function meeting(x, need){
  
  let borrow = [];
  
  if (!need) 
    return 'Game On';
    
  for (let [ used, chairs ] of x) {
    chairs = Math.min(need, Math.max(0, chairs - used.length));
    borrow.push(chairs);
    need -= chairs;
    
    if (!need)
      return borrow;
  }
  
  return 'Not enough!';
  
}