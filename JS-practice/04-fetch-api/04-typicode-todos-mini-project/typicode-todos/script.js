const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function addTodoToDOM(todo) {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
}

function getTodos() {
  fetch(apiUrl + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      data.forEach((todo) => addTodoToDOM(todo));
    });
}

function createTodo(e) {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
}

function updateTodo(id, completed) {
  // console.log(id, completed);

  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed: completed }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function toggleCompleted(e) {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");

    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
}

function deleteTodo(e) {
  if (e.target.classList.contains("todo")) {
    const id = e.target.dataset.id;

    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
}

function init() {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
}

init();
