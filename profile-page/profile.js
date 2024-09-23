import { globalCategories } from "../questions.js";

document.querySelector("h1").textContent = localStorage.getItem("currentUser");
const usersStats = JSON.parse(localStorage.getItem("usersStats"));
const currentUserInfo = usersStats.find(
  (user) => user.name === localStorage.getItem("currentUser")
);

const currentUserStats = currentUserInfo.stadistics;

document.querySelector(".first-log").textContent = currentUserInfo.date;



for (let key in currentUserStats) {
  console.log(key, currentUserStats[key]);
  if (!currentUserStats) {
    document.querySelector(".category-container").textContent = "No stats yet";
  } else {
    addCategory(key);
  }
}

function addCategory(category) {
  if (globalCategories[category]) {
    const newCategoryDiv = document.createElement("div");
    newCategoryDiv.classList.add("category-div");
    newCategoryDiv.style.backgroundColor =
      globalCategories[category].description.backgroundContent;
    // <span class="category-played">${currentUserStats[category].totalPlayed}</span>
    newCategoryDiv.innerHTML = `
      <span class="category-name">${globalCategories[category].description.name}</span>
      <div class="data-div">
        <span class="data-title">Total played:</span>
      </div>
      <div class="data-div">
        <span class="data-title">Corrects:</span>
        <span class="category-correct">${currentUserStats[category].corrects}</span>
      </div>
      <div class="data-div">
        <span class="data-title">Max points:</span>
        <span class="category-maxPoints">${currentUserStats[category].maxPoints}</span>
      </div>
      <div class="data-div">
        <span class="data-title">Incorrects:</span>
        <span class="category-incorrect">${currentUserStats[category].incorrects}</span>
      </div>
      <div class="data-div">
        <span class="data-title">Skips:</span>
        <span class="category-skips">${currentUserStats[category].skips}</span>
      </div>
    </div>
  `;
    document.querySelector(".category-container").appendChild(newCategoryDiv);
  }
}
