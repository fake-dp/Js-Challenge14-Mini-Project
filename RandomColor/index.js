const container = document.getElementById("container");
const h1Text = document.createElement("h1");
const colorText = document.createElement("h2");
const changeColorBtn = document.createElement("button");

h1Text.innerText = "What's your color?";
changeColorBtn.innerText = "Random Color Pick";

container.appendChild(h1Text);
container.appendChild(colorText);
container.appendChild(changeColorBtn);

changeColorBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const randomColor =
    (document.body.style.backgroundColor = `rgb(${r},${g},${b})`);
  colorText.innerText = randomColor;
});
