const button = document.querySelector("form button");
const div = document.querySelector(".form-div");
const form = document.getElementById("item-form");

/* Event of button bubbling up to body */
// button.addEventListener("click", () => {
//   alert("button clicked");
// });

// div.addEventListener("click", () => {
//   alert("div clicked");
// });

// form.addEventListener("click", () => {
//   alert("form clicked");
// });

// document.body.addEventListener("click", () => {
//   alert("body clicked");
// });

/* Stopping this propagation */
button.addEventListener("click", (e) => {
  alert("button clicked");
  e.stopPropagation();
});

div.addEventListener("click", () => {
  alert("div clicked");
});

form.addEventListener("click", () => {
  alert("form clicked");
});

document.body.addEventListener("click", () => {
  alert("body clicked");
});
