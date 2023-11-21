// function expression
const addDollarSign = function (value) {
  return "$" + value;
};

console.log(addDollarSign(50));

// arrow functions ES6
const add = (a, b) => a + b;
console.log(add(1, 2));

const double = (a) => a * 2;
console.log(double);

// return object in arrow
const createObj = () => ({
  name: "john",
  age: 20,
});

console.log(createObj());
