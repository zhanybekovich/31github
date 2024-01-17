// working with objects

// creating object

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    city: "Boston",
    street: "Main st",
    country: "KG",
  },
  hobbies: ["music", "sport"],
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

// access to property
console.log(person.name);
console.log(person["name"]);
console.log(person.address.country);
console.log(person.hobbies[0]);

// modify property
person.name = "Brad Pit";
console.log(person.name);

// remove property
delete person.age;
console.log(person.age);

// add new property
person.hasChildren = false;
console.log(person);

// calling object method
person.greet();

// other ways of creating object
const todo = new Object();
todo.id = "1";
todo.name = "Buy milk";
todo.completed = false;

console.log(todo);

// spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 2 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// old way of spread
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// methods
console.log(Object.keys(person));
console.log(Object.keys(person).length);
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty("age"));

// structuring
// const firstName = "Masha";
// const lastName = "Medvedeva";
// const age = 20;

// const person2 = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

// console.log(person2);

// desctructure of objects
const person3 = {
  firstName: "Pete",
  lastName: "Peterson",
  age: 45,
  address: {
    city: "Boston",
  },
};

const {
  firstName,
  lastName,
  age,
  address: { city },
} = person3;
console.log(firstName, lastName, age, city);

// destructure arrays
// const numbers = [1, 2, 3, 4, 5];

// const [a, b, c] = numbers;

// console.log(a, b, c);

// destructure arrays with spread
const numbers = [1, 2, 3, 4, 5, 6, 7];

const [a, b, c, ...otherNumbs] = numbers;

console.log(a, b, c, otherNumbs);
