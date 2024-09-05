let accumulatedPoints = localStorage.getItem("quizPoints") || 0;
const body = document.querySelector("body");
setTimeout(() => {
  body.classList.add("show-body");
}, 500);
let incorrectAnswers = localStorage.getItem("quizFailures") || 0;
let skippedAnswers = localStorage.getItem("quizSkips") || 0;
let correctAnswers = localStorage.getItem("correctAnswers") || 0;
let maxPoints = localStorage.getItem("maxPoints");
let correctAnswersSummary = JSON.parse(
  localStorage.getItem("correctAnswersSummary")
);
let quizRedirect = document.getElementById("quiz-redirect");
let homeRedirect = document.getElementById("home-redirect");
let leaderboardRedirect = document.getElementById("leaderboard-redirect");
quizRedirect.addEventListener("click", () =>
  redirectPage("../quiz-page/index.html")
);
homeRedirect.addEventListener("click", () => redirectPage("../index.html"));
leaderboardRedirect.addEventListener("click", () => redirectPage("../leaderboard-page/index.html"));

window.onload = function () {
  perfomanceList();
  summary();
};

function perfomanceList() {
  let red = "#d75353";
  let yellow = "#ead21b";
  let green = "#1bea3a";

  const progressBar = document.getElementById("progress-bar-result");
  progressBar.style.width = `${(accumulatedPoints / maxPoints) * 100}%`;

  if ((accumulatedPoints / maxPoints) * 100 < 35) {
    progressBar.style.backgroundColor = red;
  } else if ((accumulatedPoints / maxPoints) * 100 < 65) {
    progressBar.style.backgroundColor = yellow;
  } else {
    progressBar.style.backgroundColor = green;
  }
  document.getElementById(
    "final-score"
  ).innerText = `${accumulatedPoints} / ${maxPoints}`;
  document.getElementById(
    "correct-count"
  ).innerText = `Correct: ${correctAnswers}`;
  document.getElementById(
    "incorrect-count"
  ).innerText = `Incorrect: ${incorrectAnswers}`;
  document.getElementById(
    "skipped-count"
  ).innerText = `Skipped: ${skippedAnswers}`;
}

console.log(correctAnswersSummary);
function summary() {
  let question = document.getElementById("question");
  question.innerHTML = "";
  correctAnswersSummary.forEach((item) => {
    let answer = Object.values(item)[0];
    let row = document.createElement("tr");

    let questionCell = document.createElement("td");
    questionCell.textContent = Object.keys(item)[0];
    row.appendChild(questionCell);

    let correctAnswerCell = document.createElement("td");
    correctAnswerCell.textContent = answer.pop();
    row.appendChild(correctAnswerCell);

    let explanationCell = document.createElement("td");
    explanationCell.textContent = item.explanation;
    row.appendChild(explanationCell);

    tableCorrectAnswers.append(row);
  });
}

function redirectPage(page) {
  body.classList.add("hide-body");
  setTimeout(() => {
    window.location.href = page;
  }, 700);
}
