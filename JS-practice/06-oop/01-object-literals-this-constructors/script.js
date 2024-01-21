/*
  Object:
  'Self-contained' piece of code that is a collection of methods and properties.
  Objects are used as building blocks and can interact with one another.

*/

// const rectangle = {
//   name: "Rectangle 1",
//   width: 10,
//   height: 10,

//   area: function () {
//     return this.width * this.height;
//   },
// };

// const rectangle2 = {
//   name: "Rectangle 2",
//   width: 20,
//   height: 10,

//   area: function () {
//     return this.width * this.height;
//   },
// };

// console.log(rectangle.area());
// console.log(rectangle2.area());

// =======================

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;

  this.area = function area() {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 10, 20);
const rect2 = new Rectangle("Rectangle 2", 60, 40);
const rect3 = new Rectangle("Rectangle 3", 80, 50);

console.log(rect1);
console.log(rect2);
console.log(rect3);
