/*
  Take the people array and create an array called youngPeople that stores objects
  with ONLY name and email props of all the people that are 25 and under.
  The name prop should have their first and last name
*/

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@john.com",
    phone: "111-111-111",
    age: 30,
  },
  {
    firstName: "Pete",
    lastName: "Doe",
    email: "pete@john.com",
    phone: "221-111-111",
    age: 25,
  },
  {
    firstName: "Pete",
    lastName: "Max",
    email: "pete@max.com",
    phone: "221-111-000",
    age: 45,
  },
  {
    firstName: "Mary",
    lastName: "Doe",
    email: "mary@john.com",
    phone: "221-111-111",
    age: 21,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + " " + person.lastName,
    email: person.email,
  }));

console.log(youngPeople);

/*
  Add all th positive numbers in the array
*/

const numbers = [2, -30, 50, -12, -4, 7];

const sumOfPositive = numbers
  .filter((n) => n > 0)
  .reduce((sum, current) => sum + current, 0);

console.log(sumOfPositive);

/*
  Create a new array called capitalizedWords with the words from the words array with the 1st letter of each word capitalized
*/

const words = ["coder", "developer", "programmer"];

const capitalizedWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(capitalizedWords);
