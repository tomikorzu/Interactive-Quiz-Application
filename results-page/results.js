let correctAnswersSummary = JSON.parse(
  localStorage.getItem("correctAnswersSummary")
);
let questionIndex = 0;
const selecter = document.getElementById("selecter");
const main = document.querySelector("main");
const selecterContent = document.createElement("div");

import userButton from "../utils/mainFunctions.js";
import { globalCategories, difficultySettings } from "../questions.js";

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
document.getElementById("quiz-redirect").addEventListener("click", function () {
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
  console.log(Object.keys(difficultySettings));
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

if (!correctAnswersSummary) {
  const body = document.querySelector("body");

  setTimeout(() => {
    body.classList.add("hide-body");
  }, 500);

  setTimeout(() => {
    redirectPage("../page-not-found/index.html");
  }, 500);
}
