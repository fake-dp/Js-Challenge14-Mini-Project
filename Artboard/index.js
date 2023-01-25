const container = document.getElementById("container");
const btnWrapper = document.getElementById("btnWrapper");
const saveImgBtn = document.createElement("button");
const reseImgtBtn = document.createElement("button");

btnWrapper.appendChild(saveImgBtn);
btnWrapper.appendChild(reseImgtBtn);

saveImgBtn.innerText = "save";
reseImgtBtn.innerText = "reset";

saveImgBtn.id = "saveImg";
reseImgtBtn.id = "reset";

const colors = [
  "#e84118",
  "#fbc531",
  "#4cd137",
  "#00a8ff",
  "#8c7ae6",
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
];
const BOXS = 540;

for (let i = 0; i < BOXS; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.addEventListener("click", () => setColor(box));
  container.appendChild(box);

  const resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", () => {
    box.style.background = "#1d1d1d";
    box.style.boxShadow = "0 0 2px #000";
  });
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const saveBtn = document.getElementById("saveImg");
saveBtn.addEventListener("click", () => {
  html2canvas(document.querySelector("#container")).then((canvas) => {
    saveAs(canvas.toDataURL("image/jpg"), "image.jpg");
  });
});
function saveAs(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
}
