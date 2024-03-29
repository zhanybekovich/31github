function getData(endpoint) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

getData("./books.json");
getData("./authors.json");
getData("./publishers.json");

// function getData(endpoint, cb) {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", endpoint);

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       cb(JSON.parse(this.responseText));
//     }
//   };

//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }

// getData("./books.json", (data) => {
//   console.log(data);

//   getData("./authors.json", (data) => {
//     console.log(data);

//     getData("./publishers.json", (data) => {
//       console.log(data);
//     });
//   });
// });
