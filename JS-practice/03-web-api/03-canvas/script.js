const canvas = document.getElementById("my-canvas");

const context = canvas.getContext("2d");

// Drawing rectangle
context.fillStyle = "green";
context.fillRect(10, 10, 150, 100);

// Drawing cirlce
context.arc(300, 300, 100, 0, Math.PI * 2);
context.fillStyle = "blue";
context.fill();

// Draw lines
context.beginPath();
context.moveTo(10, 10);
context.lineTo(300, 300);
context.strokeStyle = "yellow";
context.lineWidth = 5;
context.stroke();

// Draw text
context.font = "30px Arial";
context.lineWidth = 1;
context.fillStyle = "orange";
context.strokeStyle = "blue";
context.fillText("Hello World", 300, 100, 300);
context.strokeText("Hello World", 300, 500, 300);

// Draw image
const image = document.querySelector("img");
image.style.display = "none";

image.addEventListener("load", () => {
  context.drawImage(image, 250, 250, 100, 100);
});
