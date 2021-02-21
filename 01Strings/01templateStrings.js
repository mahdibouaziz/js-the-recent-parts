/* 
    MDN docs for template strings: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

/* problems that template strings trying to solve */
let namee = "Mahdi";
let email = "mahdi@gmail.com";

let msg = "Welcome " + namee + " your email is: " + email + ".";
console.log(msg);

/* ES6 Version of doing this */
let msg1 = `Welcome ${namee} your email is: ${email}.`;
console.log(msg1);

// you can also broke the line (new line) / make tabs ....
let msg2 = `Welcome ${namee} 
your email is: ${email}.`;
console.log(msg2);

/* You can check the tagged templates to format your strings (check docs) */