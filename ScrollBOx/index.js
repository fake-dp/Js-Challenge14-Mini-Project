const container = document.getElementById("container");

const BOXES = 20;

for (let i = 0; i < BOXES; i++) {
  const contents = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerText = `Scroll Box ${i}`;
  contents.classList.add("box");
  contents.appendChild(h1);
  container.appendChild(contents);
}

const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", scrollBoxes);
scrollBoxes();

function scrollBoxes() {
  const innerHeight = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    // console.log("boxTop", boxTop, "innerHeight", innerHeight, boxTop < innerHeight);

    if (boxTop < innerHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
