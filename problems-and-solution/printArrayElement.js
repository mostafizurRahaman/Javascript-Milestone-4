/*
1. Print all element of array With for loop 
2. Print all element with for of loop 
3. Print all element with for in loop 
4. Write a function by using any one of three process  

*/


const myFrinedlist = ["Hriody", "Ismail", "Fahim","Jahed","shahjhan"]; 
const a = myFrinedlist.length; 
for(let i=0; i<a;i++){
  let friend = myFrinedlist[i]; 
  console.log(i, friend); 
}
console.log("-------------This is for of loop result----------")

for(friend of myFrinedlist){
   console.log(friend); 
}

console.log("show all elements with for in loop---------"); 
for(friend in myFrinedlist){
   console.log(friend, myFrinedlist[friend]); 
}

function showArrayElements(array){
   let a = array.length; 
   for(let i =0; i<a; i++){
      console.log(i, array[i]); 
   }
}



