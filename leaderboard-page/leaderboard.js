let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
let currentLeaderboard = [];
order();

const selecter = document.getElementById("selecter");
const main = document.querySelector("main");
const categoryTitle = document.querySelector(".category-title");
const selecterContent = document.createElement("div");

import { globalCategories, difficultySettings } from "../questions.js";
import functions from "../utils/mainFunctions.js";

let arrow = document.querySelector(".arrow-button");
arrow.addEventListener("click", function () {
  arrow.children[0].classList.toggle("fa-rotate-180");
  if (leaderboard) {
    let newOrder = [];
    for (let i = currentLeaderboard.length - 1; i >= 0; i--) {
      newOrder.push(currentLeaderboard[i]);
    }
    currentLeaderboard = newOrder.map(function (n) {
      return n;
    });
    updateLeaderboard();
  }
});

let categoryCell = document.querySelector(".rank-category");
categoryCell.style.cursor = "pointer";
categoryCell.addEventListener("click", function () {
  if (categoryTitle.children[0]) {
    categoryTitle.children[0].remove();
  }
  arrow.children[0].classList.remove("fa-rotate-180");
  currentLeaderboard = leaderboard.map(function (l) {
    return l;
  });
  updateLeaderboard();
});

functions.userButton();

function updatePodium(leaderboard) {
  const podiumSpots = [
    { element: document.getElementById("first"), position: 0 },
    { element: document.getElementById("second"), position: 1 },
    { element: document.getElementById("third"), position: 2 },
  ];
  let orderInverted = arrow.children[0].classList.contains("fa-rotate-180");
  if (leaderboard) {
    if (orderInverted) {
      let newOrder = [];
      for (let i = leaderboard.length - 1; i >= 0; i--) {
        newOrder.push(leaderboard[i]);
      }
      leaderboard = newOrder.map(function (n) {
        return n;
      });
    }
    for (let spot of podiumSpots) {
      if (leaderboard[spot.position]) {
        spot.element.querySelector(".podium-name").textContent =
          leaderboard[spot.position].name;
        spot.element.querySelector(".podium-score").textContent =
          leaderboard[spot.position].score;
      } else {
        spot.element.querySelector(".podium-name").textContent = "";
        spot.element.querySelector(".podium-score").textContent = "";
      }
    }
  }
}

function updateLeaderboard() {
  let leaderboardTable = document.querySelector("#leaderboard tbody");
  leaderboardTable.innerHTML = "";

  for (let i = 0; i < currentLeaderboard.length; i++) {
    let entry = currentLeaderboard[i];

    let row = document.createElement("tr");

    let rankCell = document.createElement("td");
    rankCell.textContent = entry.rank;
    row.appendChild(rankCell);

    let nameCell = document.createElement("td");
    nameCell.textContent = entry.name;
      
    row.appendChild(nameCell);
// nameCell.classList.add("name-cell")
// let username = localStorage.getItem("currentUser")
// let userStats = JSON.parse(localStorage.getItem("usersStats")).find(function(u){return u.name === username})
// let defaultFileImg = "../public/user-solid.svg";
// let image = userStats.image || defaultFileImg
// nameCell.innerHTML = `<div class="profile-data-cell podium-name"><img class="profile-image" src="${image}" alt="">${entry.name}</div>`
    let categoryCell = document.createElement("td");
    let catergoryToUpperCase = entry.category[0].toUpperCase();
    for (let i = 1; i < entry.category.length; i++) {
      catergoryToUpperCase += entry.category[i];
    }
    categoryCell.textContent = catergoryToUpperCase;
    row.appendChild(categoryCell);

    let scoreCell = document.createElement("td");
    scoreCell.textContent = entry.score;
    row.appendChild(scoreCell);

    leaderboardTable.appendChild(row);
  }
  document.querySelectorAll("#leaderboard tbody tr").forEach(function (tr) {
    tr.children[2].classList.add("rank-category");
    tr.children[2].addEventListener("click", function () {
      categoryTitle.innerHTML = `<span class="appear-category">${tr.children[2].textContent}</span>`;
      categoryTitle.children[0].style.color =
        globalCategories[
          tr.children[2].textContent.toLowerCase()
        ].description.leaderboard;
      let newOrder = [];
      for (let i = 0; i < currentLeaderboard.length; i++) {
        if (
          currentLeaderboard[i].category ===
          tr.children[2].textContent.toLowerCase()
        ) {
          newOrder.push(currentLeaderboard[i]);
        }
      }
      currentLeaderboard = newOrder.map(function (n) {
        return n;
      });
      updateLeaderboard(currentLeaderboard);
    });
  });

  updatePodium(currentLeaderboard);
}

function order() {
  if (leaderboard) {
    for (let i = 0; i < leaderboard.length; i++) {
      for (let j = i + 1; j < leaderboard.length; j++) {
        if (leaderboard[j].score > leaderboard[i].score) {
          let temp = leaderboard[i];
          leaderboard[i] = leaderboard[j];
          leaderboard[j] = temp;
        }
      }
    }
    for (let i = 0; i < leaderboard.length; i++) {
      leaderboard[i].rank = i + 1;
    }
    currentLeaderboard = leaderboard.map(function (l) {
      return l;
    });
  } else {
  }
}

function redirectPage(page) {
  let body = document.querySelector("body");

  body.classList.add("hide-body");
  setTimeout(() => {
    window.location.href = page;
  }, 500);
}

document.getElementById("home").addEventListener("click", () => {
  redirectPage("../");
});
document.getElementById("restart").addEventListener("click", function () {
  if (localStorage.getItem("currentUser")) {
    viewCategories();
  } else {
    redirectPage("../sign-page/signin.html");
  }
});

function viewCategories() {
  applyBlur();
  selectCategory();
  const quitBtn = document.getElementById("quit-btn");
  quitBtn.addEventListener("click", quitSelecter);
  const categoriesBtn = document.querySelectorAll(".btn-category");
  categoriesBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem("preferences", btn.textContent.toLowerCase());
      selectDificult();
      const exitBtn = document.getElementById("exit-btn");
      exitBtn.addEventListener("click", quitSelecter);
    });
  });
}
function selectCategory() {
  selecter.innerHTML = "";
  selecterContent.classList.add("selecter-div");
  selecterContent.innerHTML = `<button id="quit-btn"><i class="fa-solid fa-xmark quit-icon"></i></button><h3 class="h2-category">Select one category</h3>
            <ul class="ul-category">
                </ul>`;
  selecter.append(selecterContent);
  const categoryContainer = document.querySelector(".ul-category");
  Object.keys(globalCategories).forEach((category) => {
    let description = Object.values(globalCategories[category]);
    category = createCategory(
      description[0].name,
      description[0].icon,
      description[0].color,
      description[0].hoverColor
    );
    categoryContainer.append(category);
  });
  selecter.classList.add("selecter-show");
  selecterContent.classList.add("selecter-content-show");
}

function createCategory(name, icon, color, hoverColor) {
  let category = document.createElement("li");
  category.innerHTML = `<button class="btn-category"><i class="${icon} icon-category"></i>${name}</button>`;
  const categoryBtn = category.querySelector(".btn-category");
  categoryBtn.style.backgroundColor = color;
  categoryBtn.style.cursor = "pointer";
  categoryBtn.addEventListener("mouseover", function () {
    categoryBtn.style.backgroundColor = hoverColor;
  });
  categoryBtn.addEventListener("mouseout", function () {
    categoryBtn.style.backgroundColor = color;
  });
  return category;
}

function selectDificult() {
  selecter.innerHTML = "";
  selecter.classList.add("difficult-menu");
  selecterContent.classList.add("selecter-div");
  selecterContent.classList.add("category-selecter");
  selecterContent.innerHTML = `<button class="back-btn" id="back-btn"><i class="fa-solid fa-arrow-left back-icon"></i></button><button id="exit-btn"><i class="fa-solid fa-xmark quit-icon"></i></button><h3 class="h2-category h2-margin">Select the difficulty</h3>
            <ul class="ul-category" id="ul-difficulty">
            </ul>`;
  selecter.append(selecterContent);
  const difficultyContainerBtns = document.getElementById("ul-difficulty");
  Object.keys(difficultySettings).forEach((difficultyBtn) => {
    let description = difficultySettings[difficultyBtn];
    difficultyBtn = createDifficultyButton(
      description.name,
      description.backgroundBtn,
      description.backgroundBtnHover
    );
    difficultyContainerBtns.append(difficultyBtn);
  });
  const goBackBtn = document.getElementById("back-btn");
  goBackBtn.addEventListener("click", goBack);
  const difficultyBtn = document.querySelectorAll(".btn-difficult");
  difficultyBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      localStorage.setItem("difficult", btn.textContent.toLowerCase());
      redirectPage("../quiz-page/");
    });
  });
}

const createDifficultyButton = (name, btnColor, btnColorHover) => {
  let difficultyBtn = document.createElement("li");
  difficultyBtn.innerHTML = `<button class="btn-category btn-difficult">${name}</button>`;
  const difficultyBtns = difficultyBtn.querySelector(".btn-difficult");
  difficultyBtns.style.backgroundColor = btnColor;
  difficultyBtns.style.cursor = "pointer";
  difficultyBtns.addEventListener("mouseover", function () {
    difficultyBtns.style.backgroundColor = btnColorHover;
  });
  difficultyBtns.addEventListener("mouseout", function () {
    difficultyBtns.style.backgroundColor = btnColor;
  });
  return difficultyBtn;
};

function quitSelecter() {
  selecter.classList.remove("selecter-show");
  quitBlur();
  localStorage.removeItem("difficult");
  localStorage.removeItem("preferences");
}
function goBack() {
  viewCategories();
  localStorage.removeItem("difficult");
  localStorage.removeItem("preferences");
}

function applyBlur() {
  main.style.filter = "blur(5px)";
}
function quitBlur() {
  main.style.filter = "blur(0px)";
}
window.onload = function () {
  updateLeaderboard(leaderboard);

  let body = document.querySelector("body");

  setTimeout(() => {
    body.classList.add("show-body");
  }, 500);
};
