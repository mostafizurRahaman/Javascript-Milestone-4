function mileToKiloMeter(mile){
   let KiloMeter = mile*1.60934; 
   return KiloMeter.toFixed(2); 
}


const miles = 50; 
const kiloMeter = mileToKiloMeter(miles); 
console.log(kiloMeter); 