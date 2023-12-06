/*
  You may think since there is and insertBefore() method, there is also an
  insertAfter(), but there isn't. In this challenge, I want you to create a
  custom insertAfter() function.
  If you don't want to do it as a challenge, that's  just follow along

*/

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert me after!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

// Custom function
function insertAfter(newElement, existingElement) {
  existingElement.parentElement.insertBefore(
    newElement,
    existingElement.nextSibling
  );
}

insertAfter(li, firstItem);
