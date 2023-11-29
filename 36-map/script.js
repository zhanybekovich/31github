// map high order method

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// imperative way with foreach

const doubledNumbers2 = [];

numbers.forEach((number) => doubledNumbers2.push(number * 2));
console.log(doubledNumbers2);

// working with arr of objects
const companies = [
  {
    name: "One",
    category: "Finance",
    start: 2023,
  },
  {
    name: "Two",
    category: "Auto",
    start: 1998,
  },
  {
    name: "Three",
    category: "Retail",
    start: 2021,
  },
  {
    name: "Four",
    category: "Auto",
    start: 2002,
  },
  {
    name: "Five",
    category: "Retail",
    start: 1992,
  },
];

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

console.log(companyInfo);

const companyTitles = companies.map((company) => {
  return `<li>${company.name}</li`;
});

console.log(companyTitles);
