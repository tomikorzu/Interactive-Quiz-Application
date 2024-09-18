let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
import userButton from "../utils/mainFunctions.js";

userButton();

function getLastUserInfo() {
  let lastUserName = null;
  let lastUserScore = null;

  if (leaderboard.length > 0) {
    let lastUserIndex = leaderboard.length - 1;
    lastUserName = leaderboard[lastUserIndex].name;
    lastUserScore = leaderboard[lastUserIndex].score;
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

function updateLeaderboard() {
  let leaderboardTable = document.querySelector("#leaderboard tbody");
  leaderboardTable.innerHTML = "";
  order();

  for (let i = 0; i < leaderboard.length && i < 10; i++) {
    let entry = leaderboard[i];

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
  for (let i = 0; i < leaderboard.length; i++) {
    for (let j = i + 1; j < leaderboard.length; j++) {
      if (leaderboard[j].score > leaderboard[i].score) {
        let temp = leaderboard[i];
        leaderboard[i] = leaderboard[j];
        leaderboard[j] = temp;
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
  }, 1000);
}

window.onload = function () {
  updateLeaderboard();
  scoreUpdate();

  let body = document.querySelector("body");

  setTimeout(() => {
    body.classList.add("show-body");
  }, 500);
  if (!leaderboard) {
    redirectPage("../quiz-page/index.html");
  }
};
