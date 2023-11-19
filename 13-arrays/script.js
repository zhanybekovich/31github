// working with arrays

// array literal
const nums = [1, 34, 57, 12, 456];
console.log(nums);

// array constructor
const fruits = new Array("apple", "grape", "orange");
console.log(fruits);

console.log(fruits.length);

console.log(nums[0]);
console.log(fruits[0]);

console.log(nums[0] + nums[2]);

// change element
fruits[0] = "melon";
console.log(fruits);

fruits[fruits.length] = "banana";
console.log(fruits);

// methods
const arr = [4, 5, 1, 50, 30];

// adding el to the end
arr.push(100);
console.log(arr);

// delete last el
arr.pop();
console.log(arr);

// add el to 0 index
arr.unshift("hello");
console.log(arr);

// remove el at 0 index
arr.shift();
console.log(arr);

// reverse
arr.reverse();
console.log(arr);

// check
console.log(arr.includes(3));

// index of specific value
console.log(arr.indexOf(50));

// slice(start, end) end is not included returns new arr
console.log(arr.slice(1, 3));

// splice => changes the init array
// console.log(arr.splice(1, 3));

// remove specific el
// console.log(arr.splice(1, 1));

// chaning methods
const newStr = arr.splice(1, 4).reverse().toString();
console.log(newStr);

// nesting
const fr = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry"];

fr.push(berries);
console.log(fr);
console.log(fr[3][0]);

const all = [fr, berries];
console.log(all);

// concating with spread
const all2 = [...fr, ...berries];
console.log(all2);

// spread
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// flatten
const arr4 = [1, [2, 3], 4, 5];
const arr5 = arr4.flat();
console.log(arr5);

// static methods on Array Object
console.log(Array.isArray(arr5));

const arr6 = Array.from("12345");
console.log(arr6);

const a = 1;
const b = 2;
const c = 3;
const arr7 = Array.of(a, b, c);
console.log(arr7);

// CHALLENGE:
// 1 - reverse arr
const nums1 = [1, 2, 3, 4, 5, 6];
nums1.reverse();
console.log(nums1);
