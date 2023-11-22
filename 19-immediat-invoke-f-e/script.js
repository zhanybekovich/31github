// immediately invoked function expression

// you may need immediately invoked function expression
// when you have other libs and you may try to
// define same var names as in other lib

(function () {
  const user = "John";
  console.log(user);

  const hello = () => console.log("hello from IFE");
  hello();
})();

// IFE with params
(function (name) {
  console.log(`hello ${name}`);
})("Bob");

// Named IFE
(function hello() {
  console.log("Hello from Named IFE");
})();
