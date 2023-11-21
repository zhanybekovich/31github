# Hoisting

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use a variable or invoke a function in your code even before it's declared in the source code.

However, it's important to note that only the declarations are hoisted, not the initializations. Let's look at examples of hoisting for both variables and functions:

```js
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

## Function Hoisting

The function sayHello and its entire definition are hoisted to the top of the scope during compilation, allowing us to call the function before its actual position in the code.

```js
sayHello(); // "Hello, world!"
function sayHello() {
  console.log("Hello, world!");
}
```

## Hoisting with Function Expressions

In this case, only the variable declaration (var greet;) is hoisted, not the function expression itself. Therefore, when we try to call greet before its definition, a TypeError occurs because greet is initially undefined until the assignment statement is reached.

Remember that while hoisting can be a useful concept to understand, it's generally recommended to declare and initialize variables at the beginning of their scope to avoid unexpected behavior and make the code more readable. Additionally, relying on hoisting for function declarations can lead to code that is harder to understand, so it's often better to define functions before they are called.

```js
greet(); // TypeError: greet is not a function
var greet = function () {
  console.log("Hello!");
};
```
