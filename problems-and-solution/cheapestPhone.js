
function cheapestPhone(phones){
   const a = phones.length; 
   let cheapest = phones[0]; 
   for(let i =0; i<a; i++){
      const phone = phones[i]; 
      if(phone.price< cheapest.price){
         cheapest = phone; 
      }
   }
   return cheapest; 
}

const phones= [
   {name: "samsung", camera: 12, ram: 4, storage: 64, price:24000, color: "water gray"},
   {name: "Realme c25s",camere: 48, ram: 4, storage: 128, price: 15000,color: "water gray" }, 
   {name: "Walton 56", camera:20, ram:3, storage: 128, price: 1300, color: "black"},
   {name: "Real c11", camera: 13, ram: 3, storage: 64, price:1200, color:"water gray"}
]

const myChoice = cheapestPhone(phones); 
console.log(myChoice); 