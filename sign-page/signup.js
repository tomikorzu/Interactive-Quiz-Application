const body = document.querySelector("body");
const submitBtn = document.querySelector(".submit-btn");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordConfirmedInput = document.getElementById("confirm-password");
import functions from "../utils/mainFunctions.js";

functions.homeButton("../");
const showBtn = document.querySelector(".password-show-btn");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

import { userAlert } from "../utils/mainFunctions.js";

showBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (showBtn.children[0].classList.contains("fa-eye")) {
    showBtn.children[0].classList.remove("fa-eye");
    showBtn.children[0].classList.add("fa-eye-slash");
    passwordConfirmedInput.setAttribute("Type", "Input");
    passwordInput.setAttribute("Type", "Input");
  } else {
    showBtn.children[0].classList.remove("fa-eye-slash");
    showBtn.children[0].classList.add("fa-eye");
    passwordConfirmedInput.setAttribute("Type", "Password");
    passwordInput.setAttribute("Type", "Password");
  }
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  signUp();
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
    redirectPage("./signin.html");
  });

function signUp() {
  let username = getValue(userNameInput);
  let password = getValue(passwordInput);
  let passwordConfirmed = getValue(passwordConfirmedInput);
  if (verifyUsername(username)) {
    if (verifyPassword(password, passwordConfirmed)) {
      let date = new Date();
      let usersStasts = JSON.parse(localStorage.getItem("usersStats"));
      if (usersStasts) {
        usersStasts.push({
          name: username,
          password: password,
          date:
            months[date.getMonth()] +
            " " +
            date.getDate() +
            " " +
            date.getFullYear(),
          stadistics: {},
        });
      } else {
        usersStasts = [
          {
            name: username,
            password: password,
            date:
              months[date.getMonth()] +
              " " +
              date.getDate() +
              " " +
              date.getFullYear(),
            stadistics: {},
          },
        ];
      }
      localStorage.setItem("currentUser", username);
      localStorage.setItem("usersStats", JSON.stringify(usersStasts));
      redirectPage("../");
    }
  }
}

function getValue(input) {
  return input.value;
}

function verifyUsername(username) {
  const usersStasts = JSON.parse(localStorage.getItem("usersStats"));
  if (!username) {
    userAlert("Username cannot be empty,");
    return false;
  }
  if (usersStasts) {
    let existUser = !usersStasts.some(function (user) {
      return user.name == username;
    });
    if (!existUser) {
      userAlert("Username already exists. Please choose a different one.");
    }
    return existUser;
  } else {
    return true;
  }
}

function verifyPassword(password, passwordConfirmed) {
  if (password.length < 8) {
    userAlert("Password must be at least 8 characters long.");
    return false;
  } else if (!verifyRegex(password, /\d/)) {
    userAlert("Password must contain at least one number.");
    return false;
  } else if (!someUpperCase(password)) {
    userAlert("Password must contain at least one uppercase letter.");
    return false;
  } else if (!someLowerCase(password)) {
    userAlert("Password must contain at least one lowercase letter.");
    return false;
  } else if (password !== passwordConfirmed) {
    userAlert("Passwords do not match.");
    return false;
  } else {
    return true;
  }
}

function verifyRegex(string, expression) {
  return string.match(expression);
}

function someLowerCase(password) {
  let string = "";
  for (let i = 0; i < password.length; i++) {
    if (
      verifyRegex(password[i], /\D/) &&
      verifyRegex(password[i], /\w/) &&
      password[i] != "_"
    ) {
      string += password[i];
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === string[i]) {
      return true;
    }
  }
  return false;
}

function someUpperCase(password) {
  let string = "";
  for (let i = 0; i < password.length; i++) {
    if (
      verifyRegex(password[i], /\D/) &&
      verifyRegex(password[i], /\w/) &&
      password[i] != "_"
    ) {
      string += password[i];
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      return true;
    }
  }
  return false;
}
