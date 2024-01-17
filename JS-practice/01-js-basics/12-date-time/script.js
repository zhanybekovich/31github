// working with date and time

let d = new Date();
console.log(d);

// setting specific date
let birthDate = new Date(2001, 5, 10, 12, 34, 0);
birthDate = new Date("2001-05-10T12:34:00");
console.log(birthDate);

// unix timestamps since 1st jan of 1970
let now = Date.now();
console.log(now);

// timestamps of specific day
let myDay = new Date(2001, 5, 10, 12, 34, 0);
console.log(myDay.getTime());

// methods of Date

let time = new Date();

console.log(time.toString());
console.log(time.getTime());
console.log(time.getFullYear());

// months are 0 based
console.log(time.getMonth() + 1);

console.log(time.getDate());

// days of the week are 0 based
console.log(time.getDay());

// Intl for localising date
myDay = Intl.DateTimeFormat("ru-ru").format(d);
myDay = Intl.DateTimeFormat("en-GB").format(d);
myDay = Intl.DateTimeFormat("default").format(d);

console.log(myDay);

// formating
myDay = Intl.DateTimeFormat("default", { month: "long" }).format(d);
console.log(myDay);

// international date with Intl API
let myDate = new Date(2014, 11, 31, 12, 30, 0);

let formatter = new Intl.DateTimeFormat("ky", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log(formatter.format(myDate));
