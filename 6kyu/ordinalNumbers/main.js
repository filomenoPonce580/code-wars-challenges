function ordinal(number, brief) {
    //convert num to string
    let string = number.toString()
    const lastDig = string.length - 1
    const secondLastDig = string.length - 2
    
    //two branches, brief is t/f
    if(!brief){
      //check length of num string
      if(string.length > 1){
        //check if 2nd to last digit is 1
        if(string[secondLastDig] != 1){
          //check final dig
          if(string[lastDig] == 3) return 'rd'
          if(string[lastDig] == 2) return 'nd'
          if(string[lastDig] == 1) return 'st'
        } else {  // second to last == 1
          //return 'th'
        }
      } else { //one digit string
          if(string[lastDig] == 3) return 'rd'
          if(string[lastDig] == 2) return 'nd'
          if(string[lastDig] == 1) return 'st'
      }
      return 'th'
    } else { //brief branch
      //check length of num string
      if(string.length > 1){
        //check if 2nd to last digit is 1
        if(string[secondLastDig] != 1){
          //check final dig
          if(string[lastDig] == 3) return 'd'
          if(string[lastDig] == 2) return 'd'
          if(string[lastDig] == 1) return 'st'
        } else {  // second to last == 1
          //return 'th'
        }
      } else { //one digit string
          if(string[lastDig] == 3) return 'd'
          if(string[lastDig] == 2) return 'd'
          if(string[lastDig] == 1) return 'st'
      }
      return 'th'
    }
}

//better code,  not mine. study this
/*
function ordinal(number, brief) {
  var lastDigit = number % 10;
  var penultimateDigit = ((number - lastDigit) / 10) % 10;
  
  if(penultimateDigit === 1 || lastDigit === 0 || lastDigit >= 4) return "th";
  if(lastDigit === 1) return "st";
  if(brief) return "d";
  if(lastDigit === 2) return "nd";
  if(lastDigit === 3) return "rd";
}
*/