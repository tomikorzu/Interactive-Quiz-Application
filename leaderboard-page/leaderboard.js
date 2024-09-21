let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
let currentLeaderboard = [];
order();

const selecter = document.getElementById("selecter");
const main = document.querySelector("main");
const selecterContent = document.createElement("div");

import { globalCategories, difficultySettings } from "../questions.js";
import userButton from "../utils/mainFunctions.js";

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
categoryCell.addEventListener("mouseover", function () {
  categoryCell.style.textShadow = "0 0 30px #fff";
});
categoryCell.addEventListener("mouseleave", function () {
  categoryCell.style.textShadow = "0 0 0 ";
});
categoryCell.addEventListener("click", function () {
  arrow.children[0].classList.remove("fa-rotate-180");
  currentLeaderboard = leaderboard.map(function (l) {
    return l;
  });
  updateLeaderboard();
});

userButton();

function updatePodium() {
  const podiumSpots = [
    { element: document.getElementById("first"), position: 0 },
    { element: document.getElementById("second"), position: 1 },
    { element: document.getElementById("third"), position: 2 },
  ];

  if (leaderboard) {
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

    let categoryCell = document.createElement("td");
    categoryCell.textContent = entry.category;
    row.appendChild(categoryCell);

    let scoreCell = document.createElement("td");
    scoreCell.textContent = entry.score;
    row.appendChild(scoreCell);

    leaderboardTable.appendChild(row);
  }
  document.querySelectorAll("#leaderboard tbody tr").forEach(function (tr) {
    tr.children[2].style.cursor = "pointer";
    tr.children[2].addEventListener("click", function () {
      let newOrder = [];
      for (let i = 0; i < currentLeaderboard.length; i++) {
        if (currentLeaderboard[i].category === tr.children[2].textContent) {
          newOrder.push(currentLeaderboard[i]);
        }
      }
      currentLeaderboard = newOrder.map(function (n) {
        return n;
      });
      updateLeaderboard(currentLeaderboard);
    });

    tr.children[2].addEventListener("mouseover", function () {
      tr.children[2].style.textShadow = "0 0 30px #fff";
    });
    tr.children[2].addEventListener("mouseleave", function () {
      tr.children[2].style.textShadow = "0 0 0 ";
    });
  });

  updatePodium();
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
  redirectPage("../index.html");
});
document.getElementById("results").addEventListener("click", () => {
  redirectPage("../results-page/index.html");
});
document.getElementById("restart").addEventListener("click", function () {
  viewCategories();
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
      redirectPage("../quiz-page/index.html");
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
