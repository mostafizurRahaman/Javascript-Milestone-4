/*
1. Create Factorial function 
*/

function getFactorail(n){
  let factorial = 1; 
  if(n==1 && n==0){
   return factorial; 
  }else{
   for(let i =1; i<=n;i++){
      factorial =factorial*i; 
   }
   return factorial; 
  }
}

console.log(getFactorail(6)); 