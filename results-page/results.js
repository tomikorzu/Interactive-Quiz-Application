let correctAnswersSummary = JSON.parse(
  localStorage.getItem("correctAnswersSummary")
);
let questionIndex = 0;
import userButton from "../utils/mainFunctions.js";

userButton();

window.onload = function () {
  perfomanceList();
  summary();

  setTimeout(() => {
    const body = document.querySelector("body");
    body.classList.add("show-body");
  }, 500);
};

function perfomanceList() {
  let incorrectAnswers = localStorage.getItem("quizFailures") || 0;
  let skippedAnswers = localStorage.getItem("quizSkips") || 0;
  let correctAnswers = localStorage.getItem("correctAnswers") || 0;

  progressBarStyle();
  let maxPoints = localStorage.getItem("maxPoints");
  let accumulatedPoints = localStorage.getItem("quizPoints") || 0;

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
  let explainCorrect = document.getElementById("explain-correct");
  let answerCorrect = document.getElementById("answer-correct");
  let questionCorrect = document.getElementById("question-correct");
  const questionTitle = document.getElementById("question-title");

  questionTitle.textContent = `Question: ${questionIndex + 1}`;

  questionCorrect.textContent = Object.keys(
    correctAnswersSummary[questionIndex]
  )[0];
  answerCorrect.textContent = Object.values(
    correctAnswersSummary[questionIndex]
  )[0][1];
  explainCorrect.textContent = correctAnswersSummary[questionIndex].explanation;

  setDisableButtonCondition();
  const backBtn = document.getElementById("back-btn");
  const nextBtn = document.getElementById("next-btn");

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
  const body = document.querySelector("body");

  body.classList.add("hide-body");
  setTimeout(() => {
    window.location.href = page;
  }, 700);
}

function setDisableButtonCondition() {
  const backBtn = document.getElementById("back-btn");
  const nextBtn = document.getElementById("next-btn");

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
  let explainCorrect = document.getElementById("explain-correct");
  let answerCorrect = document.getElementById("answer-correct");
  let questionCorrect = document.getElementById("question-correct");
  const questionTitle = document.getElementById("question-title");

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
  const progressBar = document.getElementById("progress-bar-result");
  let accumulatedPoints = localStorage.getItem("quizPoints") || 0;
  let maxPoints = localStorage.getItem("maxPoints");
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

document.getElementById("home-redirect").addEventListener("click", () => {
  redirectPage("../home-css/index.html");
});
document
  .getElementById("leaderboard-redirect")
  .addEventListener("click", () => {
    redirectPage("../leaderboard-page/index.html");
  });
document.getElementById("quiz-redirect").addEventListener("click", () => {
  redirectPage("../quiz-page/index.html");
});

if (!correctAnswersSummary) {
  const body = document.querySelector("body");

  setTimeout(() => {
    body.classList.add("hide-body");
  }, 500);

  setTimeout(() => {
    redirectPage("../page-not-found/index.html");
  }, 500);
}
