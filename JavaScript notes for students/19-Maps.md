# Maps in JavaScript

In JavaScript, maps are a data structure that allows you to store key-value pairs. Unlike objects, where keys are limited to strings and symbols, Map keys can be of any data type, including objects and primitive values. Maps provide a way to associate values with keys and offer various methods for manipulating and retrieving data.

Here's a basic introduction to using maps in JavaScript:

## Creating a Map

You can create a new Map by using the Map constructor:

```js
let myMap = new Map();
```

## Adding Key-Value Pairs

You can add key-value pairs to a map using the set method:

```js
myMap.set("name", "John");
myMap.set(1, "One");
myMap.set({ id: 1 }, "Object Key");
```

## Getting Values by Key

You can retrieve values using the get method:

```js
console.log(myMap.get("name")); // Output: John
console.log(myMap.get(1)); // Output: One

let objKey = { id: 1 };
console.log(myMap.get(objKey)); // Output: Object Key
```

## Checking for the Presence of a Key

You can check if a key exists in a map using the has method:

```js
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("age")); // Output: false
```

## Removing Key-Value Pairs

To remove a key-value pair, you can use the delete method:

```js
myMap.delete(1);
console.log(myMap.has(1)); // Output: false
```

## Iterating Over a Map

You can use various methods to iterate over the keys, values, or entries (key-value pairs) of a map:

```js
// Iterating over keys
for (let key of myMap.keys()) {
  console.log(key);
}

// Iterating over values
for (let value of myMap.values()) {
  console.log(value);
}

// Iterating over entries (key-value pairs)
for (let entry of myMap.entries()) {
  console.log(entry[0], entry[1]);
}
```

## Map Size

You can get the size of a map using the size property:

```js
console.log(myMap.size);
```

## Using Objects as Keys

One notable feature of maps is that they allow objects as keys, which is not the case with regular JavaScript objects:

```js
let objMap = new Map();
let objKey1 = { id: 1 };
let objKey2 = { id: 2 };

objMap.set(objKey1, "Value 1");
objMap.set(objKey2, "Value 2");

console.log(objMap.get(objKey1)); // Output: Value 1
```
