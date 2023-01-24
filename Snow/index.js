const container = document.querySelector("#container");
const h1 = document.createElement("h1");

function createSnow() {
  const snowDiv = document.createElement("div");
  snowDiv.classList.add("snow");
  snowDiv.style.marginLeft = randomSnow() + "px";
  document.body.appendChild(snowDiv);
}

function randomSnow() {
  return Math.floor(Math.random() * window.innerWidth);
}
for (let i = 0; i < 550; i++) {
  createSnow();
}

const myText = "Snow falls from the sky";
let idx = 1;
function writeText() {
  h1.innerText = myText.slice(0, idx);
  idx++;
  if (idx > myText.length) {
    idx = 1;
  }
  setTimeout(writeText, 200);
}

container.appendChild(h1);
writeText();
