const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

function getJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      jokeContainer.innerText = data.value;
    } else {
      jokeContainer.innerText = "Something went wrong :( Try again later";
    }
  };

  xhr.send();
}

document.addEventListener("DOMContentLoaded", getJoke());
jokeBtn.addEventListener("click", getJoke);
