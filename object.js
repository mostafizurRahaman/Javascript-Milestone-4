const student = {
   Name: "Ratul hossain",
   Roll: 478889,
   eyeColor: "black",
   height: 5.4,
   weight: 36,
   age: 24,
};
console.log(student);
console.log(student.Name);
console.log(student["Name"]);
let propertyName = "Name";
let propertyValue = student[propertyName];
console.log(propertyValue);
student[propertyName] = "Mostafizur"; 
console.log(propertyValue); 
console.log(student); 
console.log(propertyValue);


let keys = Object.keys(student); 
let values = Object.values(student); 
console.log(keys); 
console.log(values); 
for(let i=0; i<keys.length; i++){
   console.log(keys[i], values[i]); 
}

for(a of keys){
   let provalues  = student[a]; 
   console.log(provalues, a); 
}

for(b in student){
   console.log(b, student[b]); 
}