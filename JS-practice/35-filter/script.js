const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

console.log("============");

// short
const evenN2 = numbers.filter((number) => number % 2 === 0);
console.log(evenN2);

console.log("===========");

const users = ["bob", "tim", "pete", "ali", "marat"];

const usersA = users.filter((user) => user[0] === "a");
console.log(usersA);

console.log("============");

// working with arr of objects
const companies = [
  {
    name: "One",
    category: "Finance",
  },
  {
    name: "Two",
    category: "Auto",
  },
  {
    name: "Three",
    category: "Retail",
  },
  {
    name: "Four",
    category: "Auto",
  },
  {
    name: "Five",
    category: "Retail",
  },
];

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
console.log(retailCompanies);
