function to24hourtime(hour, minute, period) {  
    if(period==='am'){
      if (hour < 10) hour = '0' + hour 
      if (hour === 12) hour = '00'
      if (minute < 10) minute = '0' + minute
      return hour + minute.toString()
    }
    
    if(period==='pm'){
      let newHour = 12+hour
      if(hour === 12) newHour = "12"
      if (minute < 10) minute = '0' + minute
      return newHour + minute.toString()
    }
}