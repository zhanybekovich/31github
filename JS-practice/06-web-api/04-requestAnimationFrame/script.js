const image = document.querySelector("img");

let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  if (elapsed > 5000) {
    done = true;
  }

  if (done) {
    return;
  }

  image.style.transform = `translateX(${elapsed / 15}px) rotate(${
    elapsed / 15
  }deg)`;

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
