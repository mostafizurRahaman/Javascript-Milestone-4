/*
1. Create a function to Find second hight number of an array with Math.max.apply(); 
 
2. Create a function to find second highest number of an array with for loop ; 
*/

function getSecondHighest(numbers){
   const max = Math.max.apply(null, numbers);
   numbers.splice(numbers.indexOf(max), 1) ; 
   const secondMax = Math.max.apply(null, numbers); 
   return secondMax; 
   
}

const numbers = [20,110,30, 39, 20, 30, 90];
const secondHighest = getSecondHighest(numbers); 
console.log(secondHighest); 


function getSecond(numbers){
   let max = numbers[0]; 
   for(let i =0; i<numbers.length; i++){
      const number = numbers[i]; 
      if(number>max){
         max = number; 
      }
   }
   numbers.splice(numbers.indexOf(max), 1); 
   let second = numbers[0]; 
   for(let i =0; i<numbers.length; i++){
      const number = numbers[i]; 
      if(second<number){
         second = number; 
      }
   }
   return second;
}


const number1= [20,110,30, 39, 20, 30, 90];
const secondMaxNumber = getSecond(number1); 
console.log(secondMaxNumber); 


