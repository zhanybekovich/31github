// reduce method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, current) {
  return (accumulator += current);
}, 0);

// short way
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
console.log(sum2);

// example of calculating sum of the cart
const cart = [
  { id: 1, name: "Prod 1", price: 130 },
  { id: 2, name: "Prod 2", price: 150 },
  { id: 3, name: "Prod 3", price: 60 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);
