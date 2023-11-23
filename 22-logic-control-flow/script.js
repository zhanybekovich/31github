// if statements

if (true) {
  console.log("This is true");
}

if (false) {
  console.log("This is not true");
}

const x = 10;
const y = 5;

if (x > y) {
  console.log("X is greater than Y");
}

if (x === y) {
  console.log("X is greater than Y");
}

if (x >= y) {
  console.log("X is greater than or equal to Y");
}

if (x === y) {
  console.log("X is greater than Y");
} else {
  console.log("Not equal");
}

// else if
const d = new Date(10, 30, 2022, 9, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good Night");
}

// nested if
if (hour < 12) {
  console.log("Good morning");
  if (hour === 6) {
    console.log("Wake Up!");
  }
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good Night");

  if (hour >= 20) {
    console.log("ZZZZ....");
  }
}

// multiple condition
if (hour >= 7 && hour < 15) {
  console.log("It is work time");
}

if (hour === 6 || hour === 15) {
  console.log("Brush your teeth");
}
