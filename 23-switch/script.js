// switch

const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

console.log(month);

switch (month) {
  case 1:
    console.log("It is January");
    break;
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  default:
    console.log("Not 1st quarter of the year");
}

switch (true) {
  case hour < 12:
    console.log("Morning");
    break;
  case hour < 18:
    console.log("Day");
    break;
  default:
    console.log("Night");
}
