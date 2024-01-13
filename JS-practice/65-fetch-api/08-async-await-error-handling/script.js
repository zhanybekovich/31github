const getUsers = async () => {
  try {
    /* Basic err handling */
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await res.json();
    // console.log(data);

    /* Catching 404 err */
    const res = await fetch("http://httpstat.us/404");

    if (!res.ok) {
      throw new Error("Request Failed");
    }
    const data = await res.text();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();
