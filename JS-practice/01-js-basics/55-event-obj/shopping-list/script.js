const logo = document.querySelector("img");

// function onClick(e) {
//   console.log(e);
//   console.log(e.target);
//   // e.target.style.backgroundColor = "black";
//   // console.log(e.currentTarget);
// }

// logo.addEventListener("click", onClick);

// // difference of target and currentTarget
// document.addEventListener("click", onClick);

function onClick(e) {
  // console.log(e.type)
  // console.log(e.timeStamp)

  // position of the cursor relative to window
  // console.log(e.clientX)
  // console.log(e.clientY)

  // position of the cursor relative to the Object
  // console.log(e.offsetX)
  // console.log(e.offsetY)

  // position of the mouse click relative to the page
  // console.log(e.pageX)
  // console.log(e.pageY)

  // position of the mouse click relative to entire screen
  // console.log(e.screenX)
  // console.log(e.screenY)

  // prevent default
    e.preventDefault();

    
}

logo.addEventListener("click", onClick)
