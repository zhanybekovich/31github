const logo = document.querySelector("img");

const onClick = () => console.log("Click event");

const onDoubleClick = () => {
  // console.log("Double click event");
  if (document.body.style.backgroundColor !== "yellow") {
    document.body.style.backgroundColor = "yellow";
  }
};

const onRightClick = () => {
  document.body.style.backgroundColor = "red";
};

const onMouseDown = () => {
  document.body.style.backgroundColor = "blue";
};

const onMouseUp = () => {
  document.body.style.backgroundColor = "orange";
};

const onMouseWheel = () => {
  document.body.style.backgroundColor = "white";
};

const onMouseOver = () => {
  document.body.style.backgroundColor = "fuchsia";
};

const onMouseOut = () => {
  document.body.style.backgroundColor = "yellow";
};

const onDragStart = () => {
  document.body.style.backgroundColor = "green";
};

const onDrag = () => {
  document.body.style.backgroundColor = "lime";
};

const onDragEnd = () => {
  console.log("Drag End");
};

// event listeners
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
logo.addEventListener("wheel", onMouseWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);
logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("dragend", onDragEnd);
logo.addEventListener("drag", onDrag);
