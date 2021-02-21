let apiData = [
  {
    name: "mahdi",
    email: "mahdi@gmail.com",
  },
  {
    name: "ramez",
  },
];

/* the old method (imperative destructring) */
let first = apiData[0];
let second = apiData[1];

let firstName = first.name;
let firstEmail = first.email ? first.email : "nobody@none.tld";

let secondName = second.name;
let secondEmail = second.email ? secondEmail : "nobody@none.tld";

console.log(firstName, firstEmail);
console.log(secondName, secondEmail);

console.log("----------------------");
/* The new method (declarative destructring) */
let [
  { name: firstName1, email: firstEmail1 = "nobody@none.tld" },
  { name: secondName1, email: secondEmail1 = "nobody@none.tld" },
] = apiData;

console.log(firstName1, firstEmail1);
console.log(secondName1, secondEmail1);
