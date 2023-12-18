// logical AND
console.log(10 > 20 && 30 > 15);
console.log(10 < 20 && 30 > 15);
console.log(10 < 20 && 30 > 15 && 10 > 2);

// logical OR
console.log(10 < 20 || 30 > 15);
console.log(10 < 20 || 30 > 15);
console.log(10 > 20 || (30 < 15 && 10 > 2));

console.log("===============");

// && returns first falsy value of the last value
let a;

a = 10 && 20;
console.log(a);
a = 10 && 20 && 30;
console.log(a);
a = 10 && 0 && 30;
console.log(a);
a = 10 && "" && 0 && 30;
console.log(a);

// when this is used
// doesn't show posts if posts is empty
/* const post = [];
post.length > 0 && console.log(post[0]); */

// show posts if posts is not empty
const post = ["post1", "post2"];
post.length > 0 && console.log(post[0]);

// || will return the 1st truthy value or the last value
let b;

b = 10 || 20;
console.log(b);
b = 0 || 20;
console.log(b);
b = 0 || null || "" || undefined;
console.log(b);

// ?? - nullish nullish coalescing operator ---> returns the right side operand when the left is null or undefined
let c;

c = 10 ?? 20;
console.log(c);
c = null ?? 20;
console.log(c);
c = undefined ?? 30;
console.log(c);
c = 0 ?? 20;
console.log(c);
c = "" ?? 20;
console.log(c);
