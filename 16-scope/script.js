// global scope - global vars ara accessible everywhere
// example of global window object
console.log(window.innerWidth);

// global window is accessible inside function
function getWindowHeight() {
  console.log(window.innerHeight);
}
getWindowHeight();

// variable declared in global scope also accessible
const message = "Hello";
function showMessage() {
  console.log(message);
}
showMessage();

// variables declared inside functions are not accessible outside
function someFunc() {
  x = "Foo";
}
// console.log(x); ---> Error x is not defined

// block scope
const y = 100;
if (true) {
  const z = 200;
  console.log(y, z);
}
// console.log(y, z); ---> Error z is not defined

// block scope of loops
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// console.log(i); ---> Error i is not defined

// scope of variable declared with var keyword, var is accessible from outside
if (true) {
  let d = 1;
  const f = 2;
  var v = "var";
}
// console.log(d); ---> Error d is not defined
// console.log(f); ---> Error f is not defined
console.log(v); // var is accessible outside

// var in function scope
function hello() {
  var zzz = "zzz";
}
// console.log(zzz); ---> Error zzz is not defined. Var inside function is function scoped
