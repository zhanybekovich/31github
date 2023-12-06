// ||= assigns the right side value only if the left is a falsy value
let a = false;
if (!a) {
  a = 20;
}
console.log(a);

// short way of above code
// a = a || 10;
console.log(a);

// short way with logic or assignment
a ||= 10;
console.log(a);

// &&= assigns the right side value only if the left is a truthy value
let b = 20;
if (b) {
  b = 10;
}
console.log(b);

b = b && 20;
console.log(b);

b &&= 20;
console.log(b);

// ??= assigns the right side value only if the left is null or undefined
let c = null;

if (c === null || c === undefined) {
  c = 100;
}
console.log(c);

c = c ?? 500;
console.log(c);

c ??= 500;
console.log(c);
