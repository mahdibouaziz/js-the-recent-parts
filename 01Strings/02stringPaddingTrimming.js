let str = "Hello";

/* 
    "padStart" not telling it how many padding charachters to add  
    but you need to tell them what length you want to pad to    
    
*/
console.log(str.padStart(5)); //I need in total 5 charachters with padding
console.log(str.padStart(8)); //I need in total 8 charachters with padding
console.log(str.padStart(8, "*")); //I need in total 8 charachters with padding replaced by "*"
console.log(str.padStart(8, "12345"));
console.log(str.padStart(8, "ab"));

console.log("---------------------------");
/* padEnd */
console.log(str.padEnd(5)); //I need in total 5 charachters with padding
console.log(str.padEnd(8)); //I need in total 8 charachters with padding
console.log(str.padEnd(8, "*")); //I need in total 8 charachters with padding replaced by "*"
console.log(str.padEnd(8, "12345"));
console.log(str.padEnd(8, "ab"));

console.log("---------------------------");
/* Trimming */
let str1 = "    some stuff   \t\t";
console.log(str1.trim()); //"some stuff"
console.log(str1.trimStart()); // "some stuff         "
console.log(str1.trimEnd()); //"    some stuff"
