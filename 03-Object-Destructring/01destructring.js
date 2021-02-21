function data() {
  return { a: 1, b: 2, c: 3, d: 4, e: 5 };
}

/* the old way */
let tmp = data();
let first = tmp.a;
let second = tmp.b;
let third = tmp.c;
console.log(first, second, third);

console.log("---------------------------");
/* the new way */

let { a: first1, b: second1, c: third1, ...restOfTheObject } = data();
console.log(first1, second1, third1);
console.log(restOfTheObject);

console.log("---------------------------");
//you can use the same names as the object with this way
let { a, b, c } = data();
console.log(a, b, c);
