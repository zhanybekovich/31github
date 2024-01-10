/*
Requests are made through HTTP

Requests may be for:
  - get data via GET
  - send data via POST
  - update data via PUT, PATCH
  - delete data via DELETE

Making request with JS can be done by:
  - AJAX / XMLHttpRequest - XHR
  - Fetch API
  - Axios

When you get response for request they are followed by status codes
  - 100 -> Continue
  - 200 -> Success
    - 200 -> Success
    - 201 -> Created
    - 204 -> No Content
  - 300 -> Redirect
    - 301 -> Resource Moved
  - 400 -> Client Error
    - 400 -> Bad Request
    - 401 -> Unauthorized
    - 403 -> Forbidden
    - 404 -> Not Found
  - 500 -> Server Error
*/

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "./movies.json");

/*
Readystatechange has 5 possible values
  0 : request not initialized
  1 : server connection established
  2 : request received
  3 : processing request
  4 : request finished and response is ready
*/

// working with JSON file

/* xhr.onreadystatechange = function () {
  // console.log(this.readyState);
  // console.log(this.status);

  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));

    const data = JSON.parse(this.responseText);

    data.forEach((movie) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;

      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send(); */

// working with API

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/zhanybekovich/repos");

xhr.onreadystatechange = function () {
  // console.log(this.readyState);
  // console.log(this.status);

  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));

    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;

      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();
