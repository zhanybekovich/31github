/*
Events on every element

This is not very efficient when you have a large number of elements
*/

// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log(item);
//     e.target.remove();
//   });
// });

/*
  Event Delegation allows to add event listener on the parent element
  and find specific event through e.target
*/

const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
