// function toggle(e) {
//   e.target.classList.toggle("danger");
// }

// document.querySelector("button").addEventListener("click", toggle);

const posts = [
  {
    title: "Post 1",
    body: "This is post 1",
  },
  {
    title: "Post 2",
    body: "This is post 2",
  },
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;

      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 3000);
}

createPost({ title: "Post 3", body: "This is post 3" }, getPosts);

// getPosts();
