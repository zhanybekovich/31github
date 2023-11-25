// For in Loop for iterating objects

const colorOjb = {
  color1: "red",
  color2: "orange",
  color3: "blue",
};

for (const key in colorOjb) {
  console.log(key);
}

for (const key in colorOjb) {
  console.log(key, colorOjb[key]);
}

// iterating arrays
const colorArr = ["bluish", "black", "white"];
for (const color in colorArr) {
  console.log(colorArr[color]);
}
