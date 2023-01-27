const container = document.getElementById("container");
const h1Text = document.createElement("h1");
const colorText = document.createElement("h2");
const changeColorBtn = document.createElement("button");

h1Text.innerText = "Random color";
changeColorBtn.innerText = "Random Color Pick & Copy";

container.appendChild(h1Text);
container.appendChild(colorText);
container.appendChild(changeColorBtn);

changeColorBtn.addEventListener("click", () => {
  const randomColor = makeRandomColor();
  colorText.innerText = randomColor;
  const rgbNumber = randomColor
    .slice(4, -1)
    .split(",")
    .map((type) => Number(type))
    .reduce((a, b) => a + b);
  document.body.style.backgroundColor = randomColor;

  const copy = (text) => {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  if (rgbNumber > 385) {
    document.body.style.color = "black";
    copy(`background-color:${randomColor};`);
  } else {
    document.body.style.color = "white";
    copy(`background-color:${randomColor};`);
  }
});

function makeRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
