// working with math object

console.log(Math);

console.log(Math.sqrt(9));
console.log(Math.abs(-10));
console.log(Math.ceil(34.567));
console.log(Math.floor(34.567));
console.log(Math.round(4.2));
console.log(Math.pow(2, 3));
console.log(Math.min(2, 4, 1, 6));
console.log(Math.max(3, 5, 2, 9, 10));
console.log(Math.random());

// generate randoms between 0 - 10
console.log(Math.floor(Math.random() * 10));
// add +1 to start from 1 and end with 10
console.log(Math.floor(Math.random() * 10 + 1));

// CHALLENGE: Generate random for x between 1 and 100 for y between 1 and 50 and summ x and y

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);
const sum = x + y;
console.log(sum);
