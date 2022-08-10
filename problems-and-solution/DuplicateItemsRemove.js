function duplicateRemove(arr){
   let length = arr.length; 
   const originalList = []; 
   for(let i =0; i<length; i++){
      let name = arr[i]; 
      if(originalList.includes(name)===false){
         originalList.push(name); 
      }
   }
   return originalList; 
}



const nameList = ["Mostafiz", "ShahJhan", "Hridoy","Ismail","Redowan","shaown", "Mostafiz","ShahJhan","Hridoy","Hridoy","Hridoy","Ismail","Ismail"]; 
const originalList = duplicateRemove(nameList); 
console.log(originalList); 