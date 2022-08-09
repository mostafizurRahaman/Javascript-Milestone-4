/*
1. Create a function for get simple Interest 
      Rules : 
      I = Prn;    
      I = Interest; 
      P = Principle balance
      r = ratio
      n = years
      A = I + p; 
*/

function simpleInterest(P,r,n){
   let I = P*(r/100)*n; 
   let A = I + P; 
   return {I , A}; 
}

const myTotalInterest = simpleInterest(3000,10,5); 
console.log(myTotalInterest); 