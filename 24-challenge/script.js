/*
  Create function called calculator that takes three params
  num1, num2, num3 and operator. The operator can be + - * or /.
  The func should return the result of the calculation.
*/

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      console.log("Invalid operator");
  }
}

console.log(calculator(2, 2, "+"));
console.log(calculator(2, 2, "-"));
console.log(calculator(2, 2, "*"));
console.log(calculator(2, 2, "/"));
