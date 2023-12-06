const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");

function run() {
  // className
  // console.log(itemList.className);

  // overrides classes
  // text.className = "dark";
  // text.className = "card dark";

  // classList
  console.log(itemList.classList);
  // foreach works for classList
  itemList.classList.forEach((className) => console.log(className));

  // adding class
  itemList.classList.add("dark");

  // remove class
  itemList.classList.remove("card");

  // toggle class
  text.classList.toggle("dark");

  // replace clas
  text.classList.replace("card", "dark");

  // change style
  itemList.style.lineHeight = "3";

  items.forEach((item, index) => {
    item.style.color = "orange";

    if (index === 2) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run;
