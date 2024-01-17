// JS datatypes are: primitive and reference types

// primitive types
/*
string
number: integer and floats have same number type
boolean
null
undefined
symbol (ES2015)
bigInt

*/

//===========================//

// Reference types
/*

Reference types or "objects" are a non-primitive value and when
assigned to a variable, the variable is given a reference to that value.
Object literals and functions are all reference types

*/

//===========================//

// strings
const firstName = "Sara";
console.log(firstName, typeof firstName);

// numbers
const age = 25;
const price = 4.5;
console.log(age, typeof age);
console.log(price, typeof price);

// boolean
const hasKids = true;
const isMarried = false;
console.log(hasKids, typeof hasKids);
console.log(isMarried, typeof isMarried);

// null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// undefined
let score;
console.log(score, typeof score);

// symbol
const id = Symbol("id");
console.log(id, typeof id);

// bigInt
const hugeNumber = 2304920398502039502985n;
console.log(hugeNumber, typeof hugeNumber);

// reference types
// array
const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);

// object literal
const person = {
  name: "John",
};
console.log(person, typeof person);

// functions
function sayHello() {
  console.log("Hello");
}
console.log(sayHello, typeof sayHello);
