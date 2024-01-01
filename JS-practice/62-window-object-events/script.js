// window.onload = function () {
//   document.querySelector("h1").textContent = "HELLO";
// };

/* Load events waits for loading of all resources (imgs etc) */
// window.addEventListener("load", function () {
//   document.querySelector("h1").textContent = "HELLO";
// });

// window.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("h1").textContent = "HELLO";
// });

window.addEventListener("resize", function () {
  document.querySelector(
    "h1"
  ).textContent = `Resized to ${window.innerWidth} * ${window.innerHeight}`;
});

window.addEventListener("scroll", function () {
  console.log(`Scrolled: X:${window.scrollX} Y: ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

/*
  If you wish you also can use defer atrribute on your script
*/
