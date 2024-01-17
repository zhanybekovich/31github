// declaring function

function sayHello() {
  console.log("Hello World");
}

sayHello();

// function with params
function add(num1, num2) {
  console.log(num1 + num2);
}

add(2, 4);

// function with return value
function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(200, 90));

// function with default value
function registerUser(user = "Guest") {
  return `${user} is registered`;
}

console.log(registerUser("John"));

// function with ...args
function sum(...numbers) {
  total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3));

// objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in!`;
}
console.log(loginUser({ id: 1, name: "Bob" }));

// arrays as params
function getRandom(arr) {
  const rnd = Math.floor(Math.random() * arr.length);

  const item = arr[rnd];

  console.log(item);
}

getRandom([2, 4, 5, 1, 6, 7]);
