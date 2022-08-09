function hourToseconds(hour){
   let seconds = hour*3600; 
   return seconds; 
}

const mySleepingHour = 5; 
const sleepingInSeconds = hourToseconds(mySleepingHour); 
console.log(sleepingInSeconds); 