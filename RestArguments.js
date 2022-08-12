function restArgument(a,b){
   console.log(arguments); // print arguments array 
   for(let i of arguments){// iterate arguments
      console.log(i); 
   }
}
restArgument(20,21,26,39,78,26,15)