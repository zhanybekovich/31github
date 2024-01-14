// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject("Something went wrong!");
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// async function getAllData() {
//   const books = await getData("./books.json");
//   const authors = await getData("./authors.json");
//   const publishers = await getData("./publishers.json");

//   console.log(books, authors, publishers);
// }

// getAllData();

// ==============

// async function getAddData() {
//   const booksRes = await fetch("./books.json");
//   const books = await booksRes.json();

//   const authorsRes = await fetch("./authors.json");
//   const authors = await authorsRes.json();

//   const publishersRes = await fetch("./publishers.json");
//   const publishers = await publishersRes.json();

//   console.log(books, authors, publishers);
// }

// getAddData();

// ===============

async function getAllDataPromises() {
  const [booksRes, authorsRes, publishersRes] = await Promise.all([
    fetch("./books.json"),
    fetch("./authors.json"),
    fetch("./publishers.json"),
  ]);

  const books = await booksRes.json();
  const authors = await authorsRes.json();
  const publishers = await publishersRes.json();

  console.log(books, authors, publishers);
}

getAllDataPromises();
