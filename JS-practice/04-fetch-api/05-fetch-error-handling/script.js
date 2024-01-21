// fetch("http://httpstat.us/200")
//   .then((res) => {
//     return res;
//   })
//   .then(() => {
//     console.log("success");
//   });

// fetch api does't handle error you have to manually manage it
// catch works only for network error
// fetch("http://httpstat.us/404")
//   .then((res) => {
//     return res;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// handling err
fetch("http://httpstat.us/404")
  .then((res) => {
    // console.log(res.ok);
    // console.log(res.status);

    // if (!res.ok) {
    //   // throw new Error("Request Failed");
    //   alert("Request Failed");
    // }

    if (res.status === 404) {
      alert("Error");
    } else if (res.status === 500) {
      alert("Server error");
    }
    return res;
  })
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });
