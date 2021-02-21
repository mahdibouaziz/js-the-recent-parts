function data() {
  return { a: 1, c: 3, d: 4, e: 5 };
}

let { a: first1 = 23, b: second1 = 50, c: third1, ...restOfTheObject } = data();
console.log(first1, second1, third1);
console.log(restOfTheObject);
