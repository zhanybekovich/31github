// CHALLENGE 1
/*
  Create func called getCelsius() that takes a temp in Fahrenheit
  and returns the temp in Celsius
  Celsius = (F - 31) * 5 / 9
*/

function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius;
}

console.log(getCelsius(40));

// CHALLENGE 2
/*
  Create an arrow func called minMax() that takes in an array of
  numbers and returns and object with the minimum and maximum numbers in the array
*/

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min: min,
    max: max,
  };
};

console.log(minMax([1, 2, 4, 5]));

// CHALLENGE 3
/*
  Create an IFE that takes in the length and width of a
  rectangle outputs it to the console in a message as soon
  as the page loads.
*/
(function (l, w) {
  console.log(l * w);
})(40, 60);
