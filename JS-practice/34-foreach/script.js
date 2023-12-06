const socials = ["Twitter", "FB", "LinkedIn", "Instagram"];

socials.forEach(function (item) {
  console.log(item);
});

console.log("=======");

socials.forEach((item, idx, socials) =>
  console.log(`${idx} - ${item}`, socials)
);

console.log("==========");

// passing named func

function logSocial(social) {
  console.log(social);
}

socials.forEach(logSocial);

console.log("========");

// working with arr of objects
const socialObjects = [
  {
    name: "Twitter",
    url: "https://tw.com",
  },
  {
    name: "Tik Tok",
    url: "https://tiktok.com",
  },
];

socialObjects.forEach((item) => console.log(item.url));
