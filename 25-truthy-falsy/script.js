// TRUTHY and FALSY values

/*

  Falsy values
  - false
  - 0
  - "" (empty string)
  - null
  - undefined
  - NaN

*/

/*
  Everything that is not FALSY is TRUTHY
*/

const x = 0;

if (x) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// checking for truthy and falsy does'n work for arrays and objects check their length and keys
const users = [];

if (users.length > 0) {
  console.log("show user");
} else {
  console.log("No user found");
}

const post = {};

if (Object.keys(post).length > 0) {
  console.log("Show post");
} else {
  console.log("No post found");
}
