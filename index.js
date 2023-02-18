// test
const container = document.querySelector("#container");
const listMyPortfolio = document.createElement("ul");
const h1 = document.createElement("h1");
h1.innerText = "My JS Challenge14";
container.appendChild(h1);

const myPortfolio = [
  {
    id: 0,
    title: "Art Board",
    url: "https://js-challenge14-artboard.vercel.app/",
    img: "https://velog.velcdn.com/images/leecodeh/post/44ca2e90-3ead-4029-8d68-7b75eba1bc5b/image.gif",
  },
  {
    id: 1,
    title: "Clock",
    url: "https://js-challenge14-mini-project.vercel.app/Clock/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/11921a61-c113-42f1-9e99-c970b00bad53/image.gif",
  },
  {
    id: 2,
    title: "Google Form",
    url: "https://js-challenge14-mini-project.vercel.app/GoogleForm/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/82186082-357d-4751-a0d1-ffbb20f439e7/image.gif",
  },
  {
    id: 3,
    title: "Joke API",
    url: "https://js-challenge14-mini-project.vercel.app/JokeApi/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/335edc73-b671-438e-a638-f84d7c1cf9f1/image.gif",
  },
  {
    id: 4,
    title: "Memo App",
    url: "https://js-challenge14-mini-project.vercel.app/MemoApp/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/6cd282ff-6681-46bd-a684-6a1522e27ad6/image.gif",
  },
  {
    id: 5,
    title: "Random Color",
    url: "https://js-challenge14-mini-project.vercel.app/RandomColor/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/dfc69a96-c32b-4ff0-9173-071f48ca979f/image.gif",
  },
  {
    id: 6,
    title: "Snow",
    url: "https://js-challenge14-mini-project.vercel.app/Snow/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/7a18a8ea-4cd3-4794-bc06-1db08ce79428/image.gif",
  },
  {
    id: 7,
    title: "Scroll Box",
    url: "https://js-challenge14-scrollbox.vercel.app/",
    img: "https://velog.velcdn.com/images/leecodeh/post/f1504109-9096-4f49-8b09-40075b03fef4/image.gif",
  },
  {
    id: 8,
    title: "Slide Img",
    url: "https://js-challenge14-mini-project.vercel.app/SlideImg/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/71d13ee7-1444-407b-af18-7ed42cca0daa/image.gif",
  },
  {
    id: 9,
    title: "Random Meal",
    url: "https://js-challenge14-mini-project.vercel.app/RandomMeal/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/c5a8b64b-f11b-43c0-b84b-8c389cf60286/image.gif",
  },
  {
    id: 10,
    title: "Find Users",
    url: "https://js-challenge14-mini-project.vercel.app/FindUsers/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/00bad735-3eaf-47e3-9957-284b7e5f4cb9/image.gif",
  },
  {
    id: 11,
    title: "Img Filter",
    url: "https://js-challenge14-mini-project.vercel.app/ImgFilter/index.html",
    img: "https://velog.velcdn.com/images/leecodeh/post/2513fa3c-fa24-464b-af51-ffec5f58af5f/image.gif",
  },
];

myPortfolio.forEach((portfolio) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  img.src = portfolio.img;
  a.href = portfolio.url;
  a.innerText = portfolio.title;
  a.setAttribute("target", "_blank");
  a.appendChild(img);
  li.appendChild(a);
  listMyPortfolio.appendChild(li);
});

container.appendChild(listMyPortfolio);

// test
