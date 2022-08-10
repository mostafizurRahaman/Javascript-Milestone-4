/*

1. write a function which return 1 to 50 
2. when number is divided by 3 print foo 
3.when number is divided by 5 print bar 
4. when divided by 3 and 5 print foobar; 
*/

function divisable(n){
   for(let i = 1; i<=n ; i++){
      if(i%3==0 && i%5==0){
         console.log("foobar", i); 
      }else if(i%3==0){
         console.log("foo",i); 
      }else if(i%5==0){
         console.log("bar",i)
      }else{
         console.log(i); 
      }
   }
}

divisable(50); 