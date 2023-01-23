const container = document.querySelector("#container");
const h1 = document.createElement("h1");
const form = document.createElement("form");
const input = document.createElement("input");

const colors = [
  "#4285f4",
  "#ea4335",
  "#fbbc05",
  "#4285f4",
  "#34a853",
  "#ea4335",
];

const texts = ["G", "o", "o", "g", "l", "e"];
for (let idx in texts) {
  const span = document.createElement("span");
  span.innerText = `${texts[idx]}`;
  span.style.color = colors[idx];
  h1.appendChild(span);
}

form.setAttribute("action", "https://www.google.co.kr/search");
form.setAttribute("method", "GET");
input.setAttribute("type", "text");
input.setAttribute("name", "q");
input.setAttribute("placeholder", "Google 검색 또는 URL 입력");

container.appendChild(h1);
container.appendChild(form);
form.appendChild(input);
