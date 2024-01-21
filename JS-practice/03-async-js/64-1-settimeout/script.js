// setTimeout(function () {
//   console.log("Hello from callback");
// }, 2000);

// console.log("Hello form global scope");

// function changeText() {
//   document.querySelector("h1").textContent = "Hello from callback";
// }

// setTimeout(changeText, 1000);
// console.log("Hello");

// ===============

function changeText() {
  document.querySelector("h1").textContent = "Hello from callback";
}

const timerId = setTimeout(changeText, 2000);

document.querySelector("#cancel").addEventListener("click", () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log("Timer cancelled");
});
