// convert feet to inch 

function feetToInch(feet){
      const Inches = feet*12; 
      return Inches; 
}

let myHeightInFeets = 5.6;
let myHeightInInches = feetToInch(myHeightInFeets); 
console.log(myHeightInInches); 