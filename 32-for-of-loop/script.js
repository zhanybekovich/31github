// For-Of-loop

// loop arrays
const items = ["book", "table", "chair", "pencil"];

for (const item of items) {
  console.log(item);
}

// loop array of objects
const users = [
  {
    name: "Tom",
  },
  {
    name: "Pete",
  },
  {
    name: "Bob",
  },
];

console.log("=============");

for (const user of users) {
  console.log(user.name);
}

console.log("===============");

// loop strings
const str = "Bob";
for (const char of str) {
  console.log(char);
}

console.log("==========");

// loop over maps

const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}
