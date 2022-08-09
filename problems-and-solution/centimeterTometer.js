function centimeterTometer(centimeter){
   let meter = centimeter/100; 
   return meter; 
}

const mySchoolDistance = 10000000; 
const mySchoolDistanceMeter = centimeterTometer(mySchoolDistance); 
console.log(mySchoolDistanceMeter); 