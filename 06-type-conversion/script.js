// Type conversion
// to number
let userNumber = prompt("Enter your number: ");
console.log(userNumber, typeof userNumber);

let userIntNumber = parseInt(userNumber);
console.log(userIntNumber, typeof userIntNumber);

let userFloatNumber = parseFloat(userNumber);
console.log(userFloatNumber, typeof userFloatNumber);

userNumber = +userNumber;
console.log(userNumber, typeof userNumber);

userNumber = Number(userNumber);

// to string

let myNumber = 45;
let stringNumber = myNumber.toString();
console.log(stringNumber, typeof stringNumber);

stringNumber = String(myNumber);

// to bolean
let num = 20;
console.log(Boolean(n));

let myStr = "hello";
console.log(Boolean(myStr));
