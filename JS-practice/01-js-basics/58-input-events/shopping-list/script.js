const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

/* Working with text field */
// function onIput(e) {
//   heading.textContent = e.target.value;
// }

// itemInput.addEventListener("keypress", onIput);
// itemInput.addEventListener("input", onIput);

// ==========================

/* Working with select element */
// function onInput(e) {
//   heading.textContent = e.target.value;
// }

// priorityInput.addEventListener("change", onInput);
// priorityInput.addEventListener("input", onInput);

// ==========================

/* Working with checkbox */
// function onChecked(e) {
//   // heading.textContent = e.target.checked;

//   const isChecked = e.target.checked;
//   heading.textContent = isChecked ? "checked" : "unchecked";
// }

// checkbox.addEventListener("input", onChecked);

// ==========================
/* Focus and blur */
function onFocus(e) {
  // console.log("On Focus!");
  // console.log(e.target);
  e.target.style.borderColor = "Green";
}

function onBlur(e) {
  // console.log("Blurred!");
  e.target.style.backgroundColor = "green";
}
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
