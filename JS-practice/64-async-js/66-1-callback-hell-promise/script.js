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

getData("./books.json")
  .then((books) => {
    console.log(books);
    return getData("./authors.json");
  })
  .then((authors) => {
    console.log(authors);
    return getData("./publishers.json");
  })
  .then((publishers) => {
    console.log(publishers);
  })
  .catch((error) => console.log(error));
