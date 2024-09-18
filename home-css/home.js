import { globalCategories, difficultySettings } from "../questions.js";
import userButton from "../utils/mainFunctions.js";

const startBtn = document.getElementById("start-btn");
const selecter = document.getElementById("selecter");
const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const selecterContent = document.createElement("div");

userButton();

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
startBtn.style.cursor = "pointer";
startBtn.addEventListener("click", function () {
  if (!localStorage.getItem("currentUser")) {
    //mostrar panel de registro de usuario
    localStorage.setItem("currentUser", "Pijurria");
    leaderboard.push({
      name: "Pijurria",
      password: "1234",
      score: 0,
      stadistics: {},
    });
    console.log("Registrado");
  } else {
    viewCategories();
  }
});

function viewCategories() {
  startBtn.style.pointerEvents = "none";
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
      transitionRedirect("./quiz-page/index.html");
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
  startBtn.style.pointerEvents = "auto";
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
  footer.style.filter = "blur(5px)";
}
function quitBlur() {
  main.style.filter = "blur(0px)";
  footer.style.filter = "blur(0px)";
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
 <button id="quit-user-menu"><i class="fa-solid fa-xmark quit-icon"></i></button><h3 class="h2-category">Enter your name</h3>
  <input type="text" class="input-name
  " id="input-name" placeholder="Type your name">
  <button class="btn-submit-name" id="submit-name">Log in</button>`;
  selecter.append(selecterContent);
  selecter.classList.add("selecter-show");
  let inputName = document.getElementById("input-name");
  const submitName = document.getElementById("submit-name");
  submitName.classList.add("btn-category");
  selecterContent.classList.add("selecter-content-show");
  //const backUserMenu = document.getElementById("go-back-btn");
  //backUserMenu.addEventListener("click", goBack);
  const quitUserMenu = document.getElementById("quit-user-menu");
  quitUserMenu.addEventListener("click", quitSelecter);
  submitName.addEventListener("click", submitNameFunction);
}

function submitNameFunction() {
  let userName = document.getElementById("input-name").value;
  if (userName === "") {
    userAlert("Please enter your name");
  } else {
    let nameExists = leaderboard.some((entry) => entry.name === userName);

    if (nameExists) {
      userAlert("This name already exists. Please choose another one.");
    } else {
      leaderboard.push({ name: userName, score: 0 });
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
      localStorage.setItem("currentUser", userName);
      //transitionRedirect("./quiz-page/index.html");
      viewCategories();
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
