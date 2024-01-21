// Fetching JSON
fetch("./movies.json")
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => console.log(data));

// Fetch text.txt
fetch("./test.txt")
  .then((response) => {
    // console.log(response);
    return response.text();
  })
  .then((data) => console.log(data));

// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    data.forEach((user) => {
      console.log(user.name);
    });
  });
