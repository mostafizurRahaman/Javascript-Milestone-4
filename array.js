const fruits = ["banana","Mango","Orange","Apple"]; 
const fruitsFriend = ["bagan","tree"]; 
console.log(fruits);
console.log(fruits.indexOf("Mango")); 
console.log(fruits[1]); 
 
fruits[3] = "Lichi"; 
console.log(fruits); 
fruits.push("Jam","Papaiya","Graps");
console.log(fruits); 
let a = fruits.pop(); 
console.log(fruits); 

fruits.unshift('Stoberi',"Lemon","jackFruits");
console.log(fruits); 
fruits.shift(); 
console.log(fruits);
console.log(Array.isArray(fruits)); 
console.log(typeof fruits);
console.log(fruits instanceof Object); 
console.log(fruits instanceof Array) ; 
const TotalArray = fruits.concat(fruitsFriend); 
console.log(TotalArray); 
let stringCoversion = TotalArray.toString(); 
console.log(stringCoversion); 
let Stringconversion1 = TotalArray.join("*"); 
console.log(Stringconversion1); 
let mostafiz =TotalArray.splice(3,5,"Mostafizur er sathe bayadopi korli kano"); 
console.log(TotalArray); 
console.log(mostafiz); 
delete fruits[5]; 
console.log(fruits); 


for(let i=0; i<fruits.length;i++){
   let item = fruits[i]; 
   console.log(item); 
}
for(a in fruits){
   console.log(a, fruits[a]); 
}
for(a of fruits){
   console.log(a); 
}

fruits.forEach(itarableFun); 
function itarableFun(i){
   console.log("mostafiz" , i); 
}
 