/*
   1. Create a function which add all elements of number array and return result. 

   2.Create a for loop which add all element 
*/


function getSum(numbers){
   const a = numbers.length; 
   let sum = 0 ; 
   for(let i=0; i<a; i++){
      sum += numbers[i]; 
   }
   return sum; 
}
const numbers = [10,20,30,40,50,60,70,80,96,30,46,63]; 
const sumOfNumbers = getSum(numbers); 
console.log(sumOfNumbers); 


/* for loop */ 
let sum = 0; 
for(i of numbers){
   sum = sum + i ; 
}
console.log(sum); 
