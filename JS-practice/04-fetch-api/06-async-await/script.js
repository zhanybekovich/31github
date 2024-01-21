/*  Promise example */
// function getUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// getUsers();

// ========================

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   console.log(data);
// }

// getUsers();

// ===================

/* async await with arrow function */

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  console.log(data);
};

getPosts();
