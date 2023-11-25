// for loops
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("YEAA lucky number");
  } else {
    console.log(i);
  }
}

// nested
for (let i = 1; i <= 10; i++) {
  console.log(`Outer: ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// looping arrays
const names = ["Bob", "John", "Sara", "Tim"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Sara") {
    console.log("Sara is the Best");
  } else {
    console.log(names[i]);
  }
}

// break

for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Breaking...");
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    continue;
  }
  console.log(i);
}
