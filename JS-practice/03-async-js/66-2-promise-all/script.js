function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong!");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const booksPromise = getData("./books.json");
const authorsPromise = getData("./authors.json");
const publishersPromise = getData("./publishers.json");

Promise.all([booksPromise, authorsPromise, publishersPromise])
  .then((data) => {
    const [books, authors, publishers] = data;
    console.log(books);
    console.log(authors);
    console.log(publishers);
  })
  .catch((error) => console.log(error));
