/* we have the for ... of loop */

let str = "Hello";

let it = str[Symbol.iterator]();

for (let v of it) {
  console.log(v);
}
console.log("---------------");

for (let v of str) {
  console.log(v);
}

/* you can make your own iterator, and then iterate over a complex situations
    but if you're gonna use the basic built in iterator, just do a "for...of" loop directly
    over the iterable value because most of the built in structres are iterable (strings, arrays, ...)
*/

let letters = [...str];
console.log(letters);
