const form = document.getElementById("item-form");

// function onSubmit(e) {
//   // console.log("submit");
//   e.preventDefault();

//   const item = document.getElementById("item-input").value;
//   const priority = document.getElementById("priority-input").value;

//   if (item === "" || priority === "0") {
//     console.log("Please fill in all fields!");
//     return;
//   }
//   console.log(item, priority);
// }

// form.addEventListener("submit", onSubmit);

/* Working with FormData */
function onSubmit(e) {
  e.preventDefault();

  // const formData = new FormData(form);

  // const item = formData.get("item");
  // const priority = formData.get("priority");

  // console.log(item, priority);

  /* ================== */

  const formData = new FormData(form);
  const entries = formData.entries();

  for (let entry of entries) {
    // console.log(entry);
    console.log(entry[0]);
  }
}

form.addEventListener("submit", onSubmit);
