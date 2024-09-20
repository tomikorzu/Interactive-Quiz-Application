import { globalCategories, difficultySettings } from "../questions.js";
import userButton from "../utils/mainFunctions.js";

userButton();

let selectedCategory = localStorage.getItem("preferences");
let selectedDificulty = localStorage.getItem("difficult");
let userName = localStorage.getItem("userName");

const body = document.querySelector("body");
const main = document.querySelector("main");
const categoryTitle = document.querySelector(".category-tittle");
const levelDifficulty = document.querySelector(".level-dificulty");
const contentBox = document.querySelector(".content-box");

let answers = document.querySelectorAll(".answer");
let skipButton = document.getElementById("next-question");
let explanationButton = document.querySelector(".explanation");
let progress = document.getElementById("progress");
let progressBar = document.getElementById("progress-bar");
let progressIcon = document.querySelector(".progress-icon");
let h2 = document.querySelector("h2");
let timer = document.getElementById("timer");
let explainMenu = document.querySelector(".explain-menu");
let quitExplainButton = document.getElementById("quit-explain");
let nextExplainButton = document.getElementById("next-question");
let backBtn = document.getElementById("back-btn");
let finishMessageMenu = document.createElement("div");

let seconds = 15;
let stopTimer = false;
let answered = false;
let userSelection = [];
let currentExplanation = "";
let correctAnswer = "";
let skips = 0;
let correct = 0;
let incorrect = 0;
let id = 0;

let category = {};
let questions = {};
let initialOrder = [];
let order = [];

let totalQuestions = 0;

let basePoints = 0;
let maxPoints = 0;

let pointsEarned = 0;
let maxBonusPoints = 10;
let correctAnswersSummary = [];
let usersStats = JSON.parse(localStorage.getItem("usersStats")) || [];

skipButton.addEventListener("click", skipQuestion);
explanationButton.addEventListener("click", showExplain);
quitExplainButton.addEventListener("click", function () {
  explainMenu.style.display = "none";
  explainMenu.classList.remove("show");
  quitBlur();
  nextExplainButton.style.pointerEvents = "auto";
  explanationButton.style.pointerEvents = "auto";
});
nextExplainButton.addEventListener("click", skipQuestion);

backBtn.addEventListener("click", goBack);

function getValues(property, values) {
  return values[property];
}
function getQuestion(order, questions) {
  return questions[order[0]];
}
function getAnswer(answers) {
  let answersEntries = Object.entries(answers);
  return answersEntries.find(function () {
    return answersEntries[1];
  })[0];
}

function orderQuestions(questions) {
  let random = 0;
  let order = [];
  while (order.length < questions.length) {
    random = Math.floor(Math.random() * questions.length);
    if (!order.includes(random)) {
      order.push(random);
    }
  }
  return order;
}
function orderAnswers(ans) {
  let ansEntries = Object.entries(ans);
  let order = [];
  while (order.length < ansEntries.length) {
    let random = Math.floor(Math.random() * ansEntries.length);
    if (!order.includes(random)) {
      order.push(random);
    }
  }
  return order;
}

function setColorTheme() {
  console.log(globalCategories[selectedCategory].description.name);
  categoryTitle.textContent =
    globalCategories[selectedCategory].description.name;
  body.style.backgroundColor =
    globalCategories[selectedCategory].description.backgroundBody;
  contentBox.style.backgroundColor =
    globalCategories[selectedCategory].description.backgroundContent;
  if (!selectedCategory) {
    body.innerHTML = "";
    redirectPage();
  } else {
    body.classList.add("appear-body");
  }
}
function setQuestion() {
  skipButton.textContent = "Skip";
  progress.style.width =
    parseInt(100 - (order.length * 100) / questions.length) + "%";
  let question = getQuestion(order, questions);
  correctAnswersSummary.push({
    [h2.textContent]: [question, correctAnswer],
    explanation: currentExplanation,
  });
  if (question) {
    currentExplanation = question.explanation;
    h2.textContent = question.question;
    setAnswers(question.answers);
    order.shift();
  } else {
    h2.style.pointerEvents = "none";
    answers.forEach(function (answer) {
      answer.style.pointerEvents = "none";
    });
    skipButton.style.pointerEvents = "none";
    nextExplainButton.style.pointerEvents = "none";
    explanationButton.style.pointerEvents = "none";
    setTimeout(function () {
      progressBar.style.width = "30px";
      progressBar.style.backgroundColor = "green";
    }, 500);
    setTimeout(function () {
      progressIcon.classList.add("check-icon-appear");
    }, 1100);
    setTimeout(function () {
      setFinishMessage();
    }, 1500);
    sendResults();
  }
}
function setAnswers(question) {
  setStartQuestionTransition();
  let orderAnswer = orderAnswers(Object.entries(question));
  correctAnswer = getAnswer(question);
  answers.forEach(function (answer, index) {
    answer.textContent = Object.keys(question)[orderAnswer[index]];
    answer.addEventListener("click", function () {
      if (!userSelection.includes(correctAnswer) && answered) {
        answered = false;
        userSelection.push({
          [h2.textContent]: [answer.textContent, correctAnswer],
          explanation: currentExplanation,
        });
        setEndQuestionTransition(correctAnswer, answer.textContent);

        if (answer.textContent == correctAnswer) {
          correct++;
          pointsEarned += calculatePoints(seconds);
        } else {
          incorrect++;
        }
      }
    });
  });
  stopTimer = false;
}
function setStartQuestionTransition() {
  answers.forEach(function (answer) {
    answer.style.pointerEvents = "auto";
  });
  answered = true;
  explanationButton.style.display = "none";
  explainMenu.classList.remove("show");
  quitBlur();
  timer.textContent = seconds;
  stopTimer = false;
  seconds = 15;
  timer.textContent = seconds;
  manageTimer();
}
function setEndQuestionTransition(correctAnswer, userAnswer) {
  skipButton.textContent = "Next question";
  explanationButton.style.display = "block";
  stopTimer = true;
  answers.forEach(function (answer) {
    if (answer.textContent == userAnswer) {
      answer.classList.add("incorrect");
      answer.classList.remove("correct");
    }
    if (answer.textContent == correctAnswer) {
      answer.classList.remove("incorrect");
      answer.classList.add("correct");
    }
    answer.style.pointerEvents = "none";
  });
}
function setDifficulty() {
  levelDifficulty.textContent = `${difficultySettings[selectedDificulty].name} level`;
  levelDifficulty.style.color =
    difficultySettings[selectedDificulty].quizDifficultyTextColor;
}
function setFinishMessage() {
  applyBlur();

  finishMessageMenu.innerHTML = `<h4 class="h2-finish">Congratulations you finished the ${selectedCategory} Quiz</h4><div class="btns-div">
  <button class="btn-finish" id="go-home">Go Home</button><button class="btn-finish" id="go-results">View Results</button><button class="btn-finish" id="go-leaderboard">View Leaderboard</button></div>`;
  finishMessageMenu.classList.add("message-menu");
  body.append(finishMessageMenu);
  setTimeout(function () {
    finishMessageMenu.classList.add("show-menu");
  }, 400);
  let goHomeBtn = document.getElementById("go-home");
  let goResultsBtn = document.getElementById("go-results");
  let goLeaderboardBtn = document.getElementById("go-leaderboard");
  goHomeBtn.addEventListener("click", goHome);
  goResultsBtn.addEventListener("click", goResults);
  goLeaderboardBtn.addEventListener("click", goLeaderboard);
}

function skipQuestion() {
  answers.forEach(function (answer) {
    answer.classList.remove("incorrect");
    answer.classList.remove("correct");
  });
  stopTimer = true;
  clearTimeout(id);
  if (skipButton.textContent == "Skip") {
    skips++;
  }
  seconds = 15;
  setQuestion();
}

function contTimer() {
  if (seconds > 0 && !stopTimer) {
    seconds--;
    manageTimer();
    timer.textContent = seconds;
  } else if (!stopTimer) {
    setEndQuestionTransition(correctAnswer, null);
  }
}
function manageTimer() {
  if (stopTimer) {
    return;
  }
  if (seconds >= 0 && !stopTimer) {
    id = setTimeout(contTimer, 1000);
  }
}

function showExplain() {
  explanationButton.style.pointerEvents = "none";
  nextExplainButton.style.pointerEvents = "none";
  explainMenu.style.display = "flex";
  setTimeout(function () {
    applyBlur();
    explainMenu.classList.add("show");
  }, 100);
  let explain = explainMenu.querySelector(".text-explain");
  explain.textContent = currentExplanation;
}

function applyBlur() {
  main.style.filter = "blur(5px)";
}
function quitBlur() {
  main.style.filter = "blur(0)";
}

function sendResults() {
  correctAnswersSummary.shift();
  localStorage.setItem("correctAnswers", correct);
  localStorage.setItem("quizFailures", incorrect);
  localStorage.setItem("quizSkips", skips);
  localStorage.setItem("quizPoints", pointsEarned);
  localStorage.setItem("maxPoints", maxPoints);
  localStorage.setItem(
    "correctAnswersSummary",
    JSON.stringify(correctAnswersSummary)
  );
  updateUser(pointsEarned);
}

function goHome() {
  main.classList.add("hide-main");
  body.classList.add("change-bg");
  backBtn.classList.add("hide-back-btn");
  finishMessageMenu.classList.remove("show-menu");
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 700);
}
function goBack() {
  body.classList.remove("appear-body");
  body.style.backgroundColor = "var(--bg-color)";
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 400);
}
function goResults() {
  main.classList.add("hide-main");
  body.classList.add("change-bg");
  backBtn.classList.add("hide-back-btn");
  finishMessageMenu.classList.remove("show-menu");
  setTimeout(function () {
    window.location.href = "../results-page/index.html";
  }, 700);
}
function goLeaderboard() {
  main.classList.add("hide-main");
  body.classList.add("change-bg");
  backBtn.classList.add("hide-back-btn");
  finishMessageMenu.classList.remove("show-menu");
  setTimeout(function () {
    window.location.href = "../leaderboard-page/index.html";
  }, 700);
}

function redirectPage(url) {
  setTimeout(function () {
    window.location.href = url;
  }, 500);
  body.classList.remove("transition-page");
}

function basePointsDifficulty(selectedDificulty) {
  return difficultySettings[selectedDificulty].basePoints;
}
function calculatePoints(timeTaken) {
  let points = basePoints;
  let bonusPoint = timeTaken;
  if (bonusPoint > maxBonusPoints) {
    bonusPoint = maxBonusPoints;
  }
  points += bonusPoint;
  return points;
}

function updateUser(pointsEarned) {
  if (usersStats.length > 0) {
    const user = localStorage.getItem("currentUser");
    usersStats.forEach(function (userStats) {
      if (userStats.name === user) {
        if (userStats.stadistics[selectedCategory]) {
          userStats.stadistics[selectedCategory].corrects += correct;
          userStats.stadistics[selectedCategory].incorrects += incorrect;
          userStats.stadistics[selectedCategory].skips += skips;
          if (
            userStats.stadistics[selectedCategory].maxPoints &&
            userStats.stadistics[selectedCategory].maxPoints < pointsEarned
          ) {
            userStats.stadistics[selectedCategory].maxPoints = pointsEarned;
          }
        } else {
          userStats.stadistics[selectedCategory] = {
            corrects: correct,
            incorrects: incorrect,
            skips: skips,
            maxPoints: pointsEarned,
          };
        }
      }
    });
    localStorage.setItem("currentScore", pointsEarned);
    localStorage.setItem("usersStats", JSON.stringify(usersStats));
  }
}
window.onload = function () {
  if (
    globalCategories[selectedCategory] &&
    globalCategories[selectedCategory][selectedDificulty]
  ) {
    category = getValues(selectedCategory, globalCategories);
    questions = getValues(selectedDificulty, category);
    initialOrder = orderQuestions(questions);
    order = initialOrder.map(function (o) {
      return o;
    });
    totalQuestions = initialOrder.length;
    basePoints = basePointsDifficulty(selectedDificulty);
    maxPoints = (basePoints + maxBonusPoints) * totalQuestions;
    setColorTheme(selectedCategory);
    setDifficulty(selectedDificulty);
    setQuestion();
  } else {
    redirectPage("../page-not-found/index.html");
  }
};
