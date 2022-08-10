function shoppingCartCost(products){
      let a = products.length;
      let Totalcost = 0; 
      for(let i =0; i<a; i++){
         const product = products[i]; 
         Totalcost += product.price; 
      }
      return Totalcost; 
}

const products = [
      {name: "shoes", price:1000}, 
      {name:"shirt", price: 1200}, 
      {name: "t-shirt", price: 300}, 
      {name: "pant", price: 500}
]; 
const TotalPrice = shoppingCartCost(products); 
console.log(TotalPrice); 