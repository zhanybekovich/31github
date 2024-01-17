const itemInput = document.getElementById("item-input");

// const onKeyPress = (e) => {
//   // console.log("hell");
// };

// itemInput.addEventListener("keypress", onKeyPress);

// keyup event
// const onKeyUp = (e) => {
//   console.log("key is up");
// };

// itemInput.addEventListener("keyup", onKeyUp);

// keydown
const onKeyDown = (e) => {
  // console.log("key is down");

  // key
  // console.log(e.key);
  // if (e.key === "Enter") {
  //   alert("Hello");
  // }

  // keycode
  // https://www.toptal.com/developers/keycode/table
  // console.log(e.keyCode);
  // if (e.keyCode === 13) {
  //   alert("Enter");
  // }

  // code
  console.log(e.code);
  if (e.code === "Digit1") {
    console.log(1);
  }

  // checking for shift alt ctr keys
  console.log(e.shiftKey);
  console.log(e.ctrlKey);
  console.log(e.altKey);
};
itemInput.addEventListener("keydown", onKeyDown);
