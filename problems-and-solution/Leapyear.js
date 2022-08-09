/*
1. first create a array with years
2. then scaning leapyears and store them in a new array 
3. return leapyears array. 

*/

function getLeapYears(years){
   let a = years.length; 
   const leapYears = []; 
   for(let i =0; i<a; i++){
      const year = years[i]; 
   if(year%4==0 && year%100!==0 || year%400==0){
      leapYears.push(year); 
   }
   }
   return leapYears; 

}

const Years = [2000,2026,2020,2024,2021,2022,1900,1950,1940,2140]; 
const LeapYears = getLeapYears(Years); 
console.log(LeapYears); 







