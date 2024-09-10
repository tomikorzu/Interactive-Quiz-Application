const startBtn = document.getElementById("start-btn");
const selecter = document.getElementById("selecter");
const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const selecterContent = document.createElement("div");

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

const categories = [
  { id: "science-btn", name: "Science", icon: "fa-flask" },
  { id: "history-btn", name: "History", icon: "fa-book-open" },
  { id: "geography-btn", name: "Geography", icon: "fa-earth-americas" },
  { id: "entertainment-btn", name: "Entertainment", icon: "fa-gamepad" },
  { id: "art-btn", name: "Culture", icon: "fa-paintbrush" },
];

const difficulties = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

startBtn.addEventListener("click", viewCategories);

function viewCategories() {
  startBtn.style.pointerEvents = "none";
  applyBlur();
  createSelecter();
  document.getElementById("quit-btn").addEventListener("click", quitSelecter);
  const categoriesBtn = document.querySelectorAll(".btn-category");
  categoriesBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem("preferences", btn.textContent.toLowerCase());
      selectDifficulty();
      document
        .getElementById("exit-btn")
        .addEventListener("click", quitSelecter);
    });
  });
}

function createSelecter() {
  selecter.innerHTML = "";
  selecterContent.classList.add("selecter-div");

  let categoryButtons = "";
  categories.forEach(function (category) {
    categoryButtons += `
      <li><button class="btn-category ${category.id}" id="${category.id}"><i class="fa-solid ${category.icon} icon-category"></i>${category.name}</button></li>
    `;
  });

  selecterContent.innerHTML = `
    <button id="quit-btn"><i class="fa-solid fa-xmark quit-icon"></i></button>
    <h3 class="h2-category">Select one category</h3>
    <ul class="ul-category">${categoryButtons}</ul>`;

  selecter.append(selecterContent);
  selecter.classList.add("selecter-show");
  selecterContent.classList.add("selecter-content-show");
}

function selectDifficulty() {
  selecter.innerHTML = "";
  selecter.classList.add("difficult-menu");
  selecterContent.classList.add("selecter-div");
  selecterContent.classList.add("category-selecter");

  let difficultyButtons = "";
  difficulties.forEach(function (difficulty) {
    difficultyButtons += `
      <li><button class="btn-category btn-difficulty ${difficulty.value}-btn" data-difficulty="${difficulty.value}">${difficulty.label}</button></li>
    `;
  });

  selecterContent.innerHTML = `
    <button class="back-btn" id="back-btn"><i class="fa-solid fa-arrow-left back-icon"></i></button>
    <button id="exit-btn"><i class="fa-solid fa-xmark quit-icon"></i></button>
    <h3 class="h2-category h2-margin">Select the difficulty</h3>
    <ul class="ul-category">${difficultyButtons}</ul>`;

  selecter.append(selecterContent);

  document.getElementById("back-btn").addEventListener("click", goBack);
  const difficultyBtn = document.querySelectorAll(".btn-difficulty");
  difficultyBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem("difficult", btn.textContent.toLowerCase());
      askUserName();
    });
  });
}

function quitSelecter() {
  selecter.classList.remove("selecter-show");
  startBtn.style.pointerEvents = "auto";
  quitBlur();
  localStorage.clear();
}

function goBack() {
  viewCategories();
  localStorage.clear();
}

function applyBlur() {
  main.classList.add("apply-blur");
  footer.classList.add("apply-blur");
}

function quitBlur() {
  main.classList.remove("apply-blur");
  footer.classList.remove("apply-blur");
}

function transitionRedirect(url) {
  body.classList.add("transition-page");
  setTimeout(function () {
    window.location.href = url;
  }, 500);
  setTimeout(function () {
    body.classList.remove("transition-page");
  }, 2000);
}

function askUserName() {
  selecter.innerHTML = "";
  selecterContent.innerHTML = `
    <button class="back-btn" id="go-back-btn"><i class="fa-solid fa-arrow-left back-icon"></i></button>
    <button id="quit-user-menu"><i class="fa-solid fa-xmark quit-icon"></i></button>
    <h3 class="h2-category">Enter your name</h3>
    <input type="text" class="input-name" id="input-name" placeholder="Type your name">
    <button class="btn-submit-name" id="submit-name">Submit</button>`;

  selecter.append(selecterContent);
  selecter.classList.add("selecter-show");

  document.getElementById("go-back-btn").addEventListener("click", goBack);
  document
    .getElementById("quit-user-menu")
    .addEventListener("click", quitSelecter);
  document
    .getElementById("submit-name")
    .addEventListener("click", submitNameFunction);
}

function submitNameFunction() {
  let userName = document.getElementById("input-name").value;
  if (userName === "") {
    userAlert("Please enter your name");
  } else {
    let nameExists = leaderboard.some(function (entry) {
      return entry.name === userName;
    });

    if (nameExists) {
      userAlert("This name already exists. Please choose another one.");
    } else {
      leaderboard.push({ name: userName, score: 0 });
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
      transitionRedirect("./quiz-page/index.html");
    }
  }
}

function userAlert(alert) {
  let alertDiv = document.createElement("div");
  alertDiv.classList.add("alert-menu");
  alertDiv.innerHTML = `<h4 class="h4-alert">Alert</h4><p class="p-alert">${alert}</p>`;
  body.append(alertDiv);
  setTimeout(function () {
    alertDiv.remove();
  }, 3000);
}
