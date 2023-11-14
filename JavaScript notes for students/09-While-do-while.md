# While Loop

The `while` loop in JavaScript has the following syntax:

```js
let count = 0;

while (count < 5) {
    console.log(`Count is ${count}`);
    count++;
}

console.log("Loop finished.");
```

This while loop will continue executing as long as the count is less than 5.

## Do-while Loop

The `do-while` loop is used when you want to ensure that the loop body is executed at least once, regardless of whether the initial condition is true or false. The syntax is as follows:

```js
let count = 0;

do {
    console.log(`Count is ${count}`);
    count++;
} while (count < 5);

console.log("Loop finished.");
```

In this example, the loop body is executed at least once, and then the condition is checked. If the condition is true, the loop continues to execute.

Both while and do-while loops are important tools for controlling the flow of your code in JavaScript, and you can choose the one that best fits your specific requirements.
