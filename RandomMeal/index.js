const container = document.getElementById("container");
const button = document.createElement("button");

const img = document.createElement("img");
const MealTitle = document.createElement("h1");
const youtube = document.createElement("a");
const strInstructions = document.createElement("p");

button.innerText = "Random Meal";
container.append(button);

button.addEventListener("click", getMealData);
getMealData();
async function getMealData() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  // console.log(data);
  img.src = data.meals[0].strMealThumb;
  MealTitle.innerText = data.meals[0].strMeal;
  strInstructions.innerText = data.meals[0].strInstructions;
  youtube.href = data.meals[0].strYoutube;
  youtube.innerText = "Youtube";
  container.append(img);
  container.append(MealTitle);
  container.append(strInstructions);
  container.append(youtube);
}
