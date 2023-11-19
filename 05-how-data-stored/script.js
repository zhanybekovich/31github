// Primitive data types: Stored in the stack
let a = 10;
let b = a;

console.log("a =", a);
console.log("b = ", b);

console.log("===========");

b = 50;
console.log("a =", a);
console.log("b = ", b);

// Reference data types: Stored in the heap and accessed by reference
let x = {
  name: "john",
};

let y = x;
console.log("x = ", x);
console.log("y = ", y);

console.log("===========");

y.name = "masha";
console.log("x = ", x);
console.log("y = ", y);
