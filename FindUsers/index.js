const search = document.getElementById("search");
const filterInput = document.createElement("input");
const h3 = document.createElement("h3");

const container = document.getElementById("container");
const ul = document.createElement("ul");
const filter = document.getElementById("filter");
const listItems = [];

search.appendChild(h3);
search.appendChild(filterInput);
h3.innerText = "Find random users in real time";
container.appendChild(ul);

getUserData();

filterInput.addEventListener("input", (e) => {
  const text = e.target.value.toLowerCase();
  filterList(text);
});

async function getUserData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
        <p>${user.email}, ${user.phone}</p>
    </div>
    `;
    ul.appendChild(li);
  });
}

function filterList(text) {
  listItems.forEach((item) => {
    if (item.innerText.includes(text)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
