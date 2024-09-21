let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
order();
let currentLeaderboard = leaderboard.map(function (l) {
  return l;
});

import userButton from "../utils/mainFunctions.js";

let arrow = document.querySelector(".arrow-button");
arrow.addEventListener("click", function () {
  arrow.children[0].classList.toggle("fa-rotate-180");
  let newOrder = [];
  for (let i = currentLeaderboard.length - 1; i >= 0; i--) {
    newOrder.push(currentLeaderboard[i]);
  }
  currentLeaderboard = newOrder.map(function (n) {
    return n;
  });
  updateLeaderboard(currentLeaderboard);
});

userButton();

function updatePodium() {
  const podiumSpots = [
    { element: document.getElementById("first"), position: 0 },
    { element: document.getElementById("second"), position: 1 },
    { element: document.getElementById("third"), position: 2 },
  ];

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

function updateLeaderboard(currentLeaderboard) {
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
  updatePodium();
}

function order() {
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
document.getElementById("restart").addEventListener("click", () => {
  redirectPage("../quiz-page/index.html");
});

window.onload = function () {
  updateLeaderboard(leaderboard);

  let body = document.querySelector("body");

  setTimeout(() => {
    body.classList.add("show-body");
  }, 500);
  if (!leaderboard) {
    redirectPage("../quiz-page/index.html");
  }
};
