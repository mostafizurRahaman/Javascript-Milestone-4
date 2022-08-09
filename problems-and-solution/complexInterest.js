/* 
1. Create a function for calculate Complex Interest; 
      C = complex priciple; 
      CI = Complex interest; 
      P = Principle
      R  = Ratio 
      N = Years
*/

function complexInterest(p,r,n){
   r = r/100; 
   const C = (p*(1+r)**n).toFixed(2); 
   const CI = (C-p).toFixed(); 
   return {
      C, CI
   }
}
const result = complexInterest(3000,10,5);
console.log(result); 