// remove element
function removeClearBtn() {
  document.querySelector("#clear").remove();
}

removeClearBtn();

// remove child
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}
removeFirstItem();

// remove item
function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}
removeItem(2);
