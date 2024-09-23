import { globalCategories } from "../questions.js";

document.querySelector("h1").textContent = localStorage.getItem("currentUser");
const usersStats = JSON.parse(localStorage.getItem("usersStats"));
const currentUserInfo = usersStats.find(
  (user) => user.name === localStorage.getItem("currentUser")
);

const currentUserStats = currentUserInfo.stadistics;

document.querySelector(".first-log").textContent = currentUserInfo.date;

let statsLength = Object.keys(currentUserStats).length;
if (statsLength == 0) {
  document.querySelector(".category-data").innerHTML = `<h3>No stats yet</h3>`;
} else {
  for (let key in currentUserStats) {
    addCategory(key);
  }
  if (statsLength == 1) {
    document.querySelector(".category-container").style.gridTemplateColumns =
      "repeat(1, 1fr)";
  } else if (statsLength == 2) {
    document.querySelector(".category-container").style.gridTemplateColumns =
      "repeat(2, 1fr)";
  } else if (statsLength >= 3) {
    document.querySelector(".category-container").style.gridTemplateColumns =
      "repeat(3, 1fr)";
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
        <span class="data-title">Total Played:</span>
        <span class="category-played">${currentUserStats[category].totalPlayed}</span>
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
