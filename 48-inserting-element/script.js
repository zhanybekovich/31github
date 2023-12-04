// insertAdjacentElement Example
function insertElement() {
  // inserting before filter element
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1);

  // filter.insertAdjacentElement("afterend", h1);
}

insertElement();

// insertAdjacentText Example
function insertText() {
  // insert text Apples
  const item = document.querySelector("li:first-child");

  item.insertAdjacentText("beforebegin", "Hello World");
  // item.insertAdjacentText("afterbegin", "Hello World");
}
insertText();

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("beforebegin", "<h2>Hello again</h2>");
}

insertHTML();

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.textContent = "Hello insert before!";

  const thirdItem = document.querySelector("li:nth-child(3)");

  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();

////// There is no insertAfter() method, you have to write it on your own

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
