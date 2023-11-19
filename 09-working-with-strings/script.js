// working with strings

let firstName = "john";
let lastName = "doe";

// concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);

// template strings ES2015 or ES6
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

// string properties and methods
let myString = "Hello World";
console.log(myString.length);

// access by index
console.log(myString[0]);
console.log(myString[2]);

// methods
// see all protype
console.log(myString.__proto__);

console.log(myString.toUpperCase());
console.log(myString.toLocaleLowerCase());
console.log(myString.charAt(0));
console.log(myString.indexOf("H"));

// substring
console.log(myString.substring(0, 4));
console.log(myString.substring(2));

console.log(myString.slice(1, 4));
console.log(myString.slice(-11, -3));

console.log(myString.trim());
console.log(myString.replace("World", "john"));

console.log(myString.includes("Hello"));

let arrOfLetters = myString.split("");
console.log(arrOfLetters);

// CHALLENGE: capitalize string
// solution 1
let str = "developer";
let firstLetter = str[0].toUpperCase();
let result = firstLetter + str.substring(1);
console.log(result);

// solution 2
result = `${str[0].toLocaleUpperCase()}${str.slice(1)}`;
console.log(result);
