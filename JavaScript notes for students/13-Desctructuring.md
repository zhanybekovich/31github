# Desctructuring

## Array Desctructuring

The values from the array numbers are destructured into variables first, second, and fourth. The third value in the array is skipped using an empty slot (,).

```js
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, , fourth] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4
```

## Destructuring Objects

Destructuring objects is similar, but you use curly braces {}.

Here, the properties name, age, and city of the person object are extracted into variables with the same names.

```js
const person = { name: "John", age: 30, city: "New York" };

// Destructuring assignment
const { name, age, city } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York
```

## Nested Destructuring

```js
const user = {
  id: 1,
  username: "john_doe",
  info: {
    name: "John Doe",
    email: "john@example.com",
  },
};

// Nested destructuring assignment
const {
  username,
  info: { name, email },
} = user;

console.log(username); // Output: john_doe
console.log(name); // Output: John Doe
console.log(email); // Output: john@example.com
```

## Default Values

```js
const colors = ["red", "green"];

const [primary = "blue", secondary = "yellow", tertiary = "purple"] = colors;

console.log(primary); // Output: red
console.log(secondary); // Output: green
console.log(tertiary); // Output: purple
```
