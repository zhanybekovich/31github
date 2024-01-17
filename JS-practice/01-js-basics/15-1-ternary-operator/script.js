// basic condition with if statement

const age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}

// shorter way with ternary operator
age >= 18 ? console.log("You can drive") : console.log("You can not drive");

// assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote);

// multiple statements
const auth = true;
// let redirect;

/* if (auth) {
  console.log("Welcome to the dashboard");
  redirect = "/dashboard";
} else {
  console.log("Access denied");
  redirect = "/login";
}

console.log(redirect); */

// shorter way with ternary
const redirect = auth
  ? (console.log("Hello"), "/dashboard")
  : (console.log("denied"), "/login");

//shorthand if there is no else in ternary use and operator
auth ? console.log("hello") : null; // if we set null

auth && console.log("welcome to the dashboard");
