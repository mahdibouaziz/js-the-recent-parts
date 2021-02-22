function* main() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

/* the * indicates that we are dealing with a special kind of function called a generator
    this is a new type of function that was added in the ES6
    when we invoke a generator they don't run, they produce an iterator
*/

let it = main();
/* the it is a standard iterator  => it has the ".next()" method
   the "next()" method gonna gives us the values in the yield 
   
*/

console.log(it.next()); //{value:1,done:false}
console.log(it.next()); //{value:2,done:false}
console.log(it.next()); //{value:3,done:false}
console.log(it.next()); //{value:4,done:true}

/* in the ... destructring when he find the keyword true, it stops */
console.log([...main()]); //[1, 2, 3]


/* in js objects are not iterable ==> we define our own iterable in this way */
let obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    //the * indicates that this function is a generator
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  },
};

console.log([...obj]); //[1,2,3]
