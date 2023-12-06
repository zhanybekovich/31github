# Control Flow

In JavaScript, the if-else statement is a fundamental control flow structure that allows you to make decisions in your code. It enables your program to execute different blocks of code based on whether a specified condition evaluates to true or false. The basic syntax for an if-else statement looks like this:

```js
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
```

**Here's a breakdown of how it works:**

The if keyword is followed by a set of parentheses () containing a condition. The condition is an expression that evaluates to either true or false.
If the condition is true, the block of code inside the curly braces {} immediately following the if statement is executed.
If the condition is false, the block of code inside the else block (the second set of curly braces) is executed.
Here's a simple example:

```js
let isRaining = true;

if (isRaining) {
  console.log("Bring an umbrella!");
} else {
  console.log("Enjoy the weather!");
}
```

In this example, if isRaining is true, the message "Bring an umbrella!" will be logged to the console. Otherwise, the message "Enjoy the weather!" will be logged.

You can also chain multiple if-else statements together to create more complex decision trees. Additionally, the else if statement can be used to check multiple conditions in a sequence. Here's an example:

```js
let temperature = 25;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature < 20) {
  console.log("It's cold.");
} else if (temperature < 30) {
  console.log("It's warm.");
} else {
  console.log("It's hot!");
}
```

## Ternary Operator

The ternary operator, also known as the conditional operator, provides a concise way to write conditional statements in JavaScript. It is often used as a shorthand for simple if-else statements. The basic syntax of the ternary operator is as follows:

```js
condition ? expressionIfTrue : expressionIfFalse;
```

Here's a breakdown of how it works:

- The condition is evaluated.
- If the condition is true, the expressionIfTrue is executed.
- If the condition is false, the expressionIfFalse is executed.

Here's a simple example:

```js
let isRaining = true;

let weatherMessage = isRaining ? "Bring an umbrella!" : "Enjoy the weather!";

console.log(weatherMessage);
```

You can also use the ternary operator for more complex expressions. Here's an example involving mathematical operations:

```js
let number = 10;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);
```
