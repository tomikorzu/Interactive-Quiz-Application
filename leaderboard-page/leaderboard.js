let userStats = JSON.parse(localStorage.getItem("userStats"));
import userButton from "../utils/mainFunctions.js";

userButton();

function getLastUserInfo() {
  let lastUserName = null;
  let lastUserScore = null;

  if (userStats.length > 0) {
    let lastUserIndex = userStats.length - 1;
    lastUserName = userStats[lastUserIndex].name;
    lastUserScore = userStats[lastUserIndex].score;
  }
  return {
    name: lastUserName,
    score: lastUserScore,
  };
}

function updatePodium() {
  const podiumSpots = [
    { element: document.getElementById("first"), position: 0 },
    { element: document.getElementById("second"), position: 1 },
    { element: document.getElementById("third"), position: 2 },
  ];

  for (let spot of podiumSpots) {
    if (userStats[spot.position]) {
      spot.element.querySelector(".podium-name").textContent =
        userStats[spot.position].name;
      spot.element.querySelector(".podium-score").textContent =
        userStats[spot.position].score;
    } else {
      spot.element.querySelector(".podium-name").textContent = "";
      spot.element.querySelector(".podium-score").textContent = "";
    }
  }
}

function updateLeaderboard() {
  let leaderboardTable = document.querySelector("#leaderboard tbody");
  leaderboardTable.innerHTML = "";
  order();

  for (let i = 0; i < userStats.length && i < 10; i++) {
    let entry = userStats[i];

    let row = document.createElement("tr");

    let rankCell = document.createElement("td");
    rankCell.textContent = i + 1;
    row.appendChild(rankCell);

    let nameCell = document.createElement("td");
    nameCell.textContent = entry.name;
    row.appendChild(nameCell);

    let scoreCell = document.createElement("td");
    scoreCell.textContent = entry.score;
    row.appendChild(scoreCell);

    leaderboardTable.appendChild(row);
  }
  updatePodium();
}

function order() {
  for (let i = 0; i < userStats.length; i++) {
    for (let j = i + 1; j < userStats.length; j++) {
      if (userStats[j].score > userStats[i].score) {
        let temp = userStats[i];
        userStats[i] = userStats[j];
        userStats[j] = temp;
      }
    }
  }
}

function scoreUpdate() {
  let user = getLastUserInfo();
  let score = user.score;

  if (isNaN(score)) {
    alert("No score available from the last game.");
    return;
  }

  // let existingEntry = leaderboard.find(user => user.name === name);

  // if (existingEntry) {
  //     if (score > existingEntry.score) {
  //         existingEntry.score = score;
  //     }
  // }

  updateLeaderboard();
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
  updateLeaderboard();
  scoreUpdate();

  let body = document.querySelector("body");

  setTimeout(() => {
    body.classList.add("show-body");
  }, 500);
  if (!userStats) {
    redirectPage("../quiz-page/index.html");
  }
};
