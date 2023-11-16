# Arrays

## Declaring Arrays

```js
// Method 1: Using square brackets
let myArray = [1, 2, 3, 4, 5];

// Method 2: Using the Array constructor
let anotherArray = new Array("apple", "banana", "cherry");
```

## Accessing Elements

```js
let firstElement = myArray[0]; // Access the first element
let secondElement = myArray[1]; // Access the second element
```

## Modifying Elements

```js
myArray[2] = 10; // Change the value of the third element to 10
```

## Array Methods

push(): Adds one or more elements to the end of an array.

```js
myArray.push(6); // Adds 6 to the end of the array
```

pop(): Removes the last element from an array.

```js
myArray.pop(); // Removes the last element
```

shift(): Removes the first element from an array.

```js
myArray.shift(); // Removes the first element
```

unshift(): Adds one or more elements to the beginning of an array.

```js
myArray.unshift(0); // Adds 0 to the beginning of the array
```

splice(): Adds or removes elements from any position in an array.

```js
myArray.splice(2, 1); // Removes 1 element starting from index 2
```

concat(): Combines two or more arrays.

```js
let combinedArray = myArray.concat(anotherArray);
```

## Iterating Over Arrays

```js
// Using for loop
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Using forEach method
myArray.forEach(function (element) {
  console.log(element);
});
```

## Multi-dimensional Arrays

JavaScript allows you to create multi-dimensional arrays, essentially arrays of arrays. This can be useful for representing grids, matrices, or other complex data structures.

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // Accessing the element at row 1, column 2
```
