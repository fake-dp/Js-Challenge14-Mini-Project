const container = document.getElementById("container");
const imgList = document.createElement("div");
const selectImg = document.createElement("div");

selectImg.id = "selectImg";

const imgColors = [
  "grayscale(100%)",
  "sepia(100%)",
  "saturate(8)",
  "hue-rotate(90deg)",
  "brightness(150%)",
  "contrast(200%)",
  "invert(100%)",
  "opacity(50%)",
  "blur(5px)",
];

const label = document.createElement("label");
label.innerText = "이미지를 선택해주세요";
label.htmlFor = "file-input";
label.classList.add("label");
container.appendChild(label);

const input = document.createElement("input");
input.type = "file";
input.accept = "image/*";
input.id = "file-input";
input.classList.add("input");
container.appendChild(input);

input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    for (let i = 0; i < imgColors.length; i++) {
      const myimg = document.createElement("img");
      myimg.src = reader.result;
      myimg.classList.add("imgColor");
      myimg.style.filter = imgColors[i];
      imgList.appendChild(myimg);
    }
  };
});

container.appendChild(imgList);
container.appendChild(selectImg);
input.addEventListener("click", (e) => {
  const imgColor = document.querySelectorAll(".imgColor");
  imgColor.forEach((img) => {
    img.remove();
    select.remove();
    saveBtn.remove();
  });
});

const select = document.createElement("img");
imgList.addEventListener("click", (e) => {
  const img = e.target;
  select.src = img.src;
  select.id = "select";
  select.style.filter = img.style.filter;
  selectImg.appendChild(select);
  container.appendChild(saveBtn);
  if (selectImg.childNodes.length > 1) {
    selectImg.removeChild(selectImg.childNodes[0]);
  }
});

const saveBtn = document.createElement("button");
saveBtn.innerText = "저장";
saveBtn.classList.add("saveBtn");

saveBtn.addEventListener("click", () => {
  html2canvas(document.querySelector("#select")).then((canvas) => {
    saveAs(canvas.toDataURL("image/jpg"), "image.jpg");
  });
});
function saveAs(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
}
