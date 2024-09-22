const body = document.querySelector("body");
const submitBtn = document.querySelector(".submit-btn");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

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

function signIn() {
  let username = getValue(userNameInput);
  let password = getValue(passwordInput);
  if (findPassword(username, password)) {
    localStorage.setItem("currentUser", username);
    redirectPage("../index.html");
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
