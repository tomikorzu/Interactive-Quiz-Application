const body = document.querySelector("body");
const submitBtn = document.querySelector(".submit-btn");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const showBtn = document.querySelector(".password-show-btn");
import functions from "../utils/mainFunctions.js";

functions.homeButton('../');

import { userAlert } from "../utils/mainFunctions.js";

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  signIn();
});

const redirectPage = (page) => {
  body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
  }, 500);
};

document
  .querySelector(".already-account-btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    redirectPage("./signup.html");
  });

showBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (showBtn.children[0].classList.contains("fa-eye")) {
    showBtn.children[0].classList.remove("fa-eye");
    showBtn.children[0].classList.add("fa-eye-slash");
    passwordInput.setAttribute("Type", "Input");
  } else {
    showBtn.children[0].classList.remove("fa-eye-slash");
    showBtn.children[0].classList.add("fa-eye");
    passwordInput.setAttribute("Type", "Password");
  }
});

function signIn() {
  let username = getValue(userNameInput);
  let password = getValue(passwordInput);
  if (findPassword(username, password)) {
    localStorage.setItem("currentUser", username);
    redirectPage("../");
  } else {
    userAlert(
      "Incorrect username or password. Please check your details and try again."
    );
  }
}

function findPassword(username, password) {
  let usersStasts = JSON.parse(localStorage.getItem("usersStats")) || [];
  return usersStasts
    ? usersStasts.some(function (user) {
        return user.name == username && user.password == password;
      })
    : false;
}

function getValue(input) {
  return input.value;
}
