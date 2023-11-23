# Sets

In JavaScript, a set is a built-in object that allows you to store unique values of any data type, whether primitive values or object references. Sets were introduced in ECMAScript 2015 (ES6) and provide a simple way to manage collections of distinct elements.

Here are some key features and methods associated with sets in JavaScript:

## Creating a Set

You can create a set using the Set constructor:

```js
let mySet = new Set();
```

## Adding Elements to a Set

You can add elements to a set using the add method:

```js
mySet.add(1);
mySet.add("Hello");
mySet.add({ key: "value" });
```

## Checking Set Size

You can get the size of a set using the size property:

```js
console.log(mySet.size); // Outputs the number of elements in the set
```

## Checking if an Element is in the Set

You can check if a specific element is in the set using the has method:

```js
console.log(mySet.has(1)); // Returns true if 1 is in the set, false otherwise
```

## Deleting Elements from a Set

You can remove elements from a set using the delete method:

```js
mySet.delete(1); // Removes the element 1 from the set
```

## Iterating Over a Set

Sets are iterable, so you can use various methods to iterate over their elements:

```js
for (let item of mySet) {
  console.log(item);
}

// Alternatively, using forEach
mySet.forEach((value) => {
  console.log(value);
});
```

## Converting Set to Array:

You can convert a set to an array using the spread operator or the Array.from method:

```js
let arrayFromSet = [...mySet];
// or
let arrayFromSet = Array.from(mySet);
```

## Operations on Sets

Sets support various set operations, such as union, intersection, and difference. For example:

```js
let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

// Union
let unionSet = new Set([...set1, ...set2]);

// Intersection
let intersectionSet = new Set([...set1].filter((x) => set2.has(x)));

// Difference
let differenceSet = new Set([...set1].filter((x) => !set2.has(x)));
```

## Clearing a Set

You can remove all elements from a set using the clear method:

```js
mySet.clear(); // Removes all elements from the set
```
