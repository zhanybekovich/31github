const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<p>${post.title} - ${post.body}</p>`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

createPost({ title: "Post 3", body: "This is post 3" })
  .then(getPosts)
  .catch((error) => {
    const h3 = document.createElement("h3");
    h3.innerText = `${error}`;

    document.getElementById("posts").appendChild(h3);
  });
