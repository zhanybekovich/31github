# Functions

## Function Declaration

You can declare a function in JavaScript using the function keyword. Here's a basic syntax:

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!
```

## Parameters and Arguments

Functions can take parameters, which are variables listed in the function declaration. These parameters act as placeholders for values that will be provided when the function is called.

Example:

```js
function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result); // Output: 8
```

## Return Statement

Functions can return a value using the return keyword. If no return statement is specified, the function returns undefined by default.

```js
function multiply(x, y) {
  return x * y;
}

let product = multiply(4, 6);
console.log(product); // Output: 24
```

## Anonymous Functions and Function Expressions

You can create functions without a name, known as anonymous functions. These are often used in function expressions, where a function is assigned to a variable.

```js
let square = function (x) {
  return x * x;
};

console.log(square(3)); // Output: 9
```

## Arrow Functions (ES6+)

Arrow functions provide a more concise syntax for writing functions. They are especially useful for short, one-line functions.

```js
let cube = (x) => x * x * x;

console.log(cube(2)); // Output: 8
```

## Higher-Order Functions

JavaScript supports higher-order functions, which are functions that take other functions as arguments or return functions as results. This enables powerful functional programming paradigms.

```js
function operateOnNumbers(x, y, operation) {
  return operation(x, y);
}

let result = operateOnNumbers(5, 3, (a, b) => a + b);
console.log(result); // Output: 8
```
