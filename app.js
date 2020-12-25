document.querySelector("#get-joke").addEventListener("click", getJoke);
document
  .querySelector("#show-punchline")
  .addEventListener("click", showPunchline);
const jokeul = document.querySelector(".random-jokes");

function getJoke(e) {
  document.querySelector("#show-punchline").style.display = "inline";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://official-joke-api.appspot.com/random_joke`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = "";
      output += `
      <p>${response.setup}</p>
      <p hidden id="hidden">${response.punchline}</p>`;
      document.querySelector(".random-jokes").innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}

function showPunchline(e) {
  document.querySelector("#hidden").style.display = "block";
  document.querySelector("#show-punchline").style.display = "none";
  e.preventDefault();
}
