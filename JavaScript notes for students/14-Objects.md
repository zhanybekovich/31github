# Objects

In JavaScript, objects are fundamental data types that allow you to store and organize data in key-value pairs. Objects in JavaScript are used to represent and manipulate complex data structures. They provide a way to group related data and functions together, enabling the creation of more organized and modular code.

## Object Literal

The simplest way to create an object is by using object literals. An object literal is a comma-separated list of key-value pairs enclosed in curly braces {}. Keys are strings or identifiers, and values can be any valid JavaScript expression.

```js
let person = {
  name: "John",
  age: 30,
  isStudent: false,
};
```

## Accessing Object Properties

```js
console.log(person.name); // John
console.log(person["age"]); // 30
```

## Adding and Modifying Properties

```js
person.job = "Engineer";
person["isStudent"] = true;
```

## Object Methods

```js
const car = {
  brand: "Toyota",
  model: "Camry",
  start: function () {
    console.log("Engine started");
  },
};

car.start(); // Engine started
```

## Object Iteration

```js
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```
