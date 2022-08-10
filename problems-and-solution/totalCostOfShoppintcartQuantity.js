function totalCostOfShopping(products){
   let a = products.length; 
   let totalCost = 0; 
   for(let i=0; i<a; i++){
      let product = products[i]; 
      totalCost += product.price*product.quantity; 
   }
   return totalCost; 
}

const products = [
   {name: "shoes", price:1000,quantity: 2}, 
   {name:"shirt", price:1200,quantity: 3}, 
   {name: "t-shirt", price:300,quantity: 5}, 
   {name: "pant", price:500,quantity: 3},
]; 
const TotalPrice = totalCostOfShopping(products); 
console.log(TotalPrice); 