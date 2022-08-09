/*
1. Create an function separate  even number and odd numbers  from an array 
2.and return them with a new array 

*/
function getEvenNumber(numbers){
   const a = numbers.length; 
   const evenNumbers = []; 
   const OddNumbers =[]; 
   for(let i = 0; i<a; i++){
      const number = numbers[i]; 
      if(number%2===0){
         evenNumbers.push(number); 
      }else{
         OddNumbers.push(number); 
      }
   }
   return {evenNumbers, OddNumbers}; 
}
const numbers = [10,20,36,20,12,21,36,62,17,69,63,26,81,51]
const separatedNumbers = getEvenNumber(numbers); 
console.log(separatedNumbers); 