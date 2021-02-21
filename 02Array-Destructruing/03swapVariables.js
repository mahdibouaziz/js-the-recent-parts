/* the old way to swap variables*/
let x = 10;
let y = 20;

let tmp = x;
x = y;
y = tmp;
console.log(x, y);

console.log("----------------------------");
/* The new way to swap variables*/
let x1 = 10;
let y1 = 20;

[x1, y1] = [y1, x1];
console.log(x1, y1);
