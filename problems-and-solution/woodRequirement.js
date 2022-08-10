function woodRequirment(tablequantity, chairquantity, bedquantity){
  const perTableWood = 15; //cubicfeet
   const perChairWood =3; 
   const perBedWood = 50; 

   const tableWoodNeeded = perTableWood*tablequantity; 
   const chairWoodNeeded = perChairWood * chairquantity; 
   const bedWoodNeeded  = perBedWood * bedquantity; 
   const totalWoodNeeded = tableWoodNeeded+chairWoodNeeded+bedWoodNeeded; 
   return totalWoodNeeded; 

   
}

const myRequriments = woodRequirment(1, 10,2); 
console.log(myRequriments); 