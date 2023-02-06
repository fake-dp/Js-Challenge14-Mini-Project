const container = document.getElementById("container");
const jokeText = document.createElement("p");
const createJokeBtn = document.createElement("button");

container.append(jokeText);
container.append(createJokeBtn);
createJokeBtn.innerText = "Create Joke";

createJokeBtn.addEventListener("click", getJokeData);
getJokeData();

async function getJokeData() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  console.log(data);
  jokeText.innerText = data.joke;
}
