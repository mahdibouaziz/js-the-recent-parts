function data() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

/* the old way */
let tmp = data();

let first = tmp[0];
let second = tmp[1];
let third = tmp[2];
let fourth = tmp.slice(3);

console.log(first, second, third);
console.log(fourth);

console.log("------------------------");
/* the new way */
let [first1, second1, third1, ...fourth1] = data();

console.log(first1, second1, third1);
console.log(fourth1);

console.log("------------------------");
//we can have an empty position if we don't want it
let [first2, , third2, ...fourth2] = data();

console.log(first2, third2);
console.log(fourth2);
