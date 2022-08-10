function reversedWord(sentence){
   
   const sentenceWords = sentence.split(" ");  
   let a = sentenceWords.length;
   const reversewords = []; 
   for(let i=0; i<a; i++){
      const word = sentenceWords[i];
      reversewords.unshift(word); 

   }
   return reversewords.join(" "); 
}


const sentence = "I am a student of cumilla polytechnic institute .I Want to be a Web developer"; 
const reverseWords = reversedWord(sentence); 
console.log(reverseWords); 