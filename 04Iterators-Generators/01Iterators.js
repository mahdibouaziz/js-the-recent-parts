/* 
    docs:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
*/

/* 
    when you have some data source (example: data base)
    if we want to consume the values in that data source
    we can use the iterator
*/

let str = "Hello";
let world = ["w", "o", "r", "l", "d"];

let it1 = str[Symbol.iterator]();
let it2 = world[Symbol.iterator]();

console.log(it1.next()); //{ value: 'H', done: false }
console.log(it1.next()); //{ value: 'e', done: false }
console.log(it1.next()); //{ value: 'l', done: false }
console.log(it1.next()); //{ value: 'l', done: false }
console.log(it1.next()); //{ value: 'o', done: false }
console.log(it1.next()); //{ value: undefined, done: true }

console.log(it2.next()); //{ value: "w", done: false }
//..
