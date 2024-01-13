/* Try catch syntax */
// try {
//   console.log(x);
// } catch (err) {
//   console.log("Something went wrong!");
// }

// ===========
/* Throw own error */
function double(number) {
  if (isNaN(number)) {
    throw new Error("It is not a number");
  }

  return number * 2;
}

try {
  // const y = double(1);
  // console.log(y);
  const y = double("hello");
  console.log(y);
} catch (err) {
  console.log(err);
}
