const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clear = document.getElementById("clear");

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");

  button.appendChild(icon);

  return button;
}

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (newItem === "") {
    alert("Add Item");
    return;
  }

  // create new element
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = "";
}

function removeItem(e) {
  // console.log(e.target);
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems() {
  // itemList.innerHTML = "";

  // better way
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clear.addEventListener("click", clearItems);
