
function reversed(text){
   let a = text.length;  
   let reversedLetter = ""; 
   for(let i = a-1; i>=0; i--){
      let letter = text[i]; 
      reversedLetter = reversedLetter+letter; 
   }
   return reversedLetter; 
}

const Name = "Mostafizur Rahaman"; 
const reversedLetterName = reversed(Name); 
console.log(reversedLetterName); 