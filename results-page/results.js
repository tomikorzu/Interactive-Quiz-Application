let accumulatedPoints = localStorage.getItem("quizPoints") || 0;
const body = document.querySelector("body");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const questionTitle = document.getElementById("question-title");
let questionIndex = 0;
let questionCorrect = document.getElementById("question-correct");
let answerCorrect = document.getElementById("answer-correct");
let explainCorrect = document.getElementById("explain-correct");
const progressBar = document.getElementById("progress-bar-result");

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
leaderboardRedirect.addEventListener("click", () =>
  redirectPage("../leaderboard-page/index.html")
);

window.onload = function () {
  perfomanceList();
  summary();
};

function perfomanceList() {
  progressBarStyle();
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

function summary() {
  questionTitle.textContent = `Question: ${questionIndex + 1}`;

  questionCorrect.textContent = Object.keys(
    correctAnswersSummary[questionIndex]
  )[0];
  answerCorrect.textContent = Object.values(
    correctAnswersSummary[questionIndex]
  )[0][1];
  explainCorrect.textContent = correctAnswersSummary[questionIndex].explanation;

  setDisableButtonCondition();
  backBtn.addEventListener("click", () => {
    questionIndex--;
    backOrNextQuestion();
  });
  nextBtn.addEventListener("click", () => {
    questionIndex++;
    backOrNextQuestion();
  });
}

function redirectPage(page) {
  body.classList.add("hide-body");
  setTimeout(() => {
    window.location.href = page;
  }, 700);
}

function setDisableButtonCondition() {
  if (questionIndex === 0) {
    backBtn.style.pointerEvents = "none";
    backBtn.style.opacity = 0.6;
  } else {
    backBtn.style.pointerEvents = "auto";
    backBtn.style.opacity = 1;
  }
  if (questionIndex === correctAnswersSummary.length - 1) {
    nextBtn.style.pointerEvents = "none";
    nextBtn.style.opacity = 0.6;
  } else {
    nextBtn.style.pointerEvents = "auto";
    nextBtn.style.opacity = 1;
  }
}

function backOrNextQuestion() {
  questionTitle.textContent = `Question: ${questionIndex + 1}`;
  questionCorrect.textContent = "";
  answerCorrect.textContent = "";
  explainCorrect.textContent = "";
  questionCorrect.textContent = Object.keys(
    correctAnswersSummary[questionIndex]
  )[0];
  answerCorrect.textContent = Object.values(
    correctAnswersSummary[questionIndex]
  )[0][1];
  explainCorrect.textContent = correctAnswersSummary[questionIndex].explanation;
  setDisableButtonCondition();
}
function progressBarStyle() {
  let red = "#d75353";
  let yellow = "#ead21b";
  let green = "#1bea3a";
  progressBar.style.width = `${(accumulatedPoints / maxPoints) * 100}%`;
  if ((accumulatedPoints / maxPoints) * 100 < 35) {
    progressBar.style.backgroundColor = red;
  } else if ((accumulatedPoints / maxPoints) * 100 < 65) {
    progressBar.style.backgroundColor = yellow;
  } else {
    progressBar.style.backgroundColor = green;
  }
}
if (!correctAnswersSummary) {
  setTimeout(() => {
    body.classList.add("hide-body");
  }, 500);

  setTimeout(() => {
    redirectPage("../page-not-found/index.html");
  }, 500);
}
