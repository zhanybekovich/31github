# Looping through objects

`for...in` loop

The for...in loop iterates over the enumerable properties of an object, including inherited properties from the prototype chain. Here's an example:

```js
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

Be cautious when using for...in loops, as they can include properties from the object's prototype chain. You can use hasOwnProperty to filter out inherited properties if needed.

`Object.keys()`

The Object.keys() method returns an array of a given object's own enumerable property names. You can then iterate through this array

```js
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
```

`Object.values()`

The Object.values() method returns an array of a given object's own enumerable property values. You can use it to loop through the values directly:

```js
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

Object.values(person).forEach((value) => {
  console.log(value);
});
```

`Object.entries()`
The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs. This can be useful if you need both the key and the value during iteration:

```js
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```
