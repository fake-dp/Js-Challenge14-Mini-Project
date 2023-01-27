const hello = document.querySelector("#hello");
const goodbye = document.querySelector("#goodbye");

console.log(hello);

hello.addEventListener("click", () => {
  console.log("hello");
});

goodbye.addEventListener("click", () => {
  console.log("goodbye");
});
