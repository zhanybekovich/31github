/*
  What are events?
  - Clicking on element
  - Typing into a text field
  - Hovering ove an element
  - Submitting a form
  - Closing a window
  - Dragging element
  - Resizing an element
  - etc
*/

// not recommended way of event listener
// <button onclick="alert('Hello')">
// <button onclick="runClick()">

// JS event listener
// const clearBtn = document.querySelector("#clear");

// clearBtn.onclick = function () {
//   alert("Hello");
// };

// Recommended way
// const clearBtn = document.querySelector("#clear");

// clearBtn.addEventListener("click", function () {
//   alert("Hello");
// });

// clearBtn.addEventListener("click", function () {
//   console.log("Hello");
// });

// Using named function

// const clearBtn = document.querySelector("#clear");
// function showAlert() {
//   alert("Hello00");
// }

// clearBtn.addEventListener("click", showAlert);

// Remove event listener
// setTimeout(() => clearBtn.removeEventListener("click", showAlert), 2000);

// Fire event programmatically
// setTimeout(() => clearBtn.click(), 3000);

// Clear items in Shopping List
// const clearBtn = document.querySelector("#clear");

// short not performed way
/* function onClear() {
  const itemList = document.querySelector("ul");

  itemList.innerHTML = "";
}

clearBtn.addEventListener("click", onClear); */

// Better way
const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  const items = document.querySelectorAll("li");

  items.forEach((item) => {
    item.remove();
  });
}
clearBtn.addEventListener("click", onClear);
