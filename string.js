console.log("------------------------")
let yourName = "I am a simple string"; 
console.log(yourName); 
console.log("------------------------")
console.log(yourName.length); 
console.log("--------------------:O"); 
console.log(yourName.indexOf("si")); 
console.log("--------------------:O"); 
console.log(yourName.includes("string")); 
console.log("--------------------:O"); 
console.log(yourName.startsWith("am")); 
console.log("--------------------:O"); 
console.log(yourName.endsWith("string")); 
console.log("---------Access with index-----------:O"); 
let storage = yourName[10]; 
console.log(storage); 
console.log("--------slice()------------:O"); 
console.log(yourName.slice(7,13));
console.log("--------------------:O"); 
console.log(yourName.slice(7)); 
console.log("--------------------:O"); 
console.log(yourName.slice(-13,-7 )); 
console.log("-----------substring-----------:O")
console.log(yourName.substring(7,13)); 
console.log("-----------substr()-------------------")
console.log(yourName.substr(7,6)); 
console.log("----------------concat()---------------")
let anotherstring = "I am the author of the programming folder.";
let concatedString = anotherstring.concat(" ",yourName); 
console.log(concatedString); 
console.log("-------------------------------------");
let spliteString = concatedString.split(" "); 
console.log(spliteString); 
console.log("-----------------------------------------"); 
for(i of concatedString){
   console.log(i); 
}
let letter = "ami english letter valobasi tume ki bangla letter valobaso??"; 
console.log(letter.toLowerCase()); 
console.log(letter.toUpperCase()); 
console.log("-------------------------"); 
let spaceString = "            cumilla            "; 
console.log(spaceString.trim()); 

let numbers = "10"; 
let number1 = "20.5"; 
console.log(parseInt(numbers)); 
console.log(parseFloat(number1)); 


















