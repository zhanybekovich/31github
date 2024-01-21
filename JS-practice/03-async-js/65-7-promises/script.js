// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("Async task complete");
//     resolve({ name: "John" });
//   }, 1000);
// });

// promise.then((user) => {
//   // console.log("Promise consumed");
//   console.log(user);
// });

// console.log("hello");

// ================

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "John" });
    } else {
      reject("Error: Can not fetch user");
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("The promise resolved or rejected"));

console.log("hello");
