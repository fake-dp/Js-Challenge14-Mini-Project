const container = document.querySelector("#container");
const toggleBtn = document.createElement("button");
const clockWrapper = document.createElement("div");
const time = document.createElement("div");
const date = document.createElement("div");
const h1 = document.createElement("h1");

h1.innerText = "My Clock";
toggleBtn.innerText = "Dark Mode";
clockWrapper.className = "clockWrapper";
time.className = "time";
date.className = "date";

toggleBtn.addEventListener("click", (e) => {
  const body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    toggleBtn.classList.remove("dark");
    e.target.innerText = "Dark mode";
  } else {
    body.classList.add("dark");
    toggleBtn.classList.add("dark");
    e.target.innerText = "Light mode";
  }
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function setTime() {
  const currentTime = new Date();
  const month = currentTime.getMonth();
  const day = currentTime.getDay();
  const currentDate = currentTime.getDate();
  const hours = currentTime.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  date.innerText = `${days[day]}, ${months[month]} ${currentDate}`;
  time.innerText = `${ampm} ${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

container.appendChild(h1);
container.appendChild(toggleBtn);
container.appendChild(clockWrapper);
clockWrapper.appendChild(date);
clockWrapper.appendChild(time);

setInterval(setTime, 1000);
