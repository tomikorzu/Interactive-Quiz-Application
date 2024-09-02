import { globalCategories } from "./questions.js";

let selectedCategory = localStorage.getItem("preferences");
let selectedDificulty = localStorage.getItem("difficult");
let userName = localStorage.getItem("userName");
const body = document.querySelector("body");
const main = document.querySelector("main");
const categoryTitle = document.querySelector(".category-tittle");
const levelDifficulty = document.querySelector(".level-dificulty");
const contentBox = document.querySelector(".content-box");

setColorTheme(selectedCategory);
setDifficulty(selectedDificulty);


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
let currentDifficulty = selectedDificulty;
let correctAnswer = "";
let skips = 0;
let correct = 0;
let id = 0;

let category = getCategory(selectedCategory, globalCategories);
let questions = getDificulty(selectedDificulty, category[1]);
let initialOrder = orderQuestions(questions);
let order = initialOrder.map(function (o) {
  return o;
});

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

function getCategory(category, categories) {
  let entriesCategoreis = Object.entries(categories);
  return entriesCategoreis.find(function (entrieCategory) {
    return entrieCategory[0] == category;
  });
}

function getDificulty(dificulty, questions) {
  return questions[dificulty];
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

function getQuestion(order, questions) {
  return questions[order[0]];
}

function getAnswer(answers) {
  let answersEntries = Object.entries(answers);
  return answersEntries.find(function () {
    return answersEntries[1];
  });
}

function setQuestion() {
  skipButton.textContent = "Skip";
  progress.style.width =
    parseInt(100 - (order.length * 100) / questions.length) + "%";
  let question = getQuestion(order, questions);
  if (question) {
    currentExplanation = Object.values(question)[1];
    h2.textContent = Object.keys(question)[0];
    setAnswers(Object.values(question)[0]);
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
  let orderAnswer = orderAnswers(Object.keys(question));
  correctAnswer = getAnswer(question)[0];
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

function orderAnswers(ans) {
  let order = [];
  while (order.length < answers.length) {
    let random = Math.floor(Math.random() * ans.length);
    if (!order.includes(random)) {
      order.push(random);
    }
  }
  return order;
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

function setColorTheme() {
  if (selectedCategory === "history") {
    categoryTitle.textContent = "History";
    body.classList.add("history");
    contentBox.style.backgroundColor = "#006284";
  } else if (selectedCategory === "science") {
    categoryTitle.textContent = "Science";
    body.classList.add("science");
    contentBox.style.backgroundColor = "#2B6B1A";
  } else if (selectedCategory === "culture") {
    categoryTitle.textContent = "Culture";
    body.classList.add("culture");
    contentBox.style.backgroundColor = "#961315";
  } else if (selectedCategory === "geography") {
    categoryTitle.textContent = "Geography";
    body.classList.add("geography");
    contentBox.style.backgroundColor = "#0B1184";
  } else if (selectedCategory === "entretainment") {
    categoryTitle.textContent = "Entretainment";
    body.classList.add("entretainment");
    contentBox.style.backgroundColor = "#A20679";
  } else {
    body.innerHTML = "";
    window.location.href = "../page-not-found/index.html";
  }
  body.classList.add("appear-body");
}

function setDifficulty() {
  if (selectedDificulty == 0) {
    levelDifficulty.textContent = "Easy level";
    levelDifficulty.style.color = "#01B66E";
  } else if (selectedDificulty == 1) {
    levelDifficulty.textContent = "Mid level";
    levelDifficulty.style.color = "#BA8B00";
  } else if (selectedDificulty == 2) {
    levelDifficulty.textContent = "Hard level";
    levelDifficulty.style.color = "#FD0105";
  }
}
function goBack() {
  body.classList.remove("appear-body");
  body.style.backgroundColor = "var(--bg-color)";
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 400);
}
function applyBlur() {
  main.classList.add("apply-blur");
}
function quitBlur() {
  main.classList.remove("apply-blur");
}
function sendResults() {
  localStorage.setItem("quizPoints", correct);
  localStorage.setItem("totalQuestions", initialOrder.length);
  localStorage.setItem("quizSkips", skips);
  localStorage.setItem("user", userName);
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

function goHome() {
  main.classList.add("hide-main");
  body.classList.add("change-bg");
  backBtn.classList.add("hide-back-btn");
  finishMessageMenu.classList.remove("show-menu");
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 700);
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


setQuestion();
