const container = document.getElementById("container");
const leftBtn = document.createElement("button");
const rightBtn = document.createElement("button");

leftBtn.innerText = "left";
rightBtn.innerText = "right";
leftBtn.id = "left";
rightBtn.id = "right";

container.append(leftBtn);

const imgBox = [
  "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",
];

for (let i = 0; i < imgBox.length; i++) {
  const slideBox = document.createElement("div");

  if (i === 0) {
    slideBox.classList.add("slide", "active");
  }
  slideBox.classList.add("slide");
  slideBox.style.borderRadius = "10px";
  slideBox.style.backgroundImage = `url(${imgBox[i]})`;
  container.appendChild(slideBox);
}

container.appendChild(rightBtn);

const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtnId = document.getElementById("left");
const rightBtnId = document.getElementById("right");

let slideInx = 0;

rightBtnId.addEventListener("click", () => {
  slideInx++;
  if (slideInx > slides.length - 1) {
    slideInx = 0;
  }

  bodyBg();
  activeSlide();
});

leftBtn.addEventListener("click", () => {
  slideInx--;
  if (slideInx < 0) {
    slideInx = slides.length - 1;
  }

  bodyBg();
  activeSlide();
});

bodyBg();

function bodyBg() {
  body.style.backgroundImage = slides[slideInx].style.backgroundImage;
}

function activeSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideInx].classList.add("active");
}
