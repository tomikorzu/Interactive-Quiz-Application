const body = document.querySelector("body");
const submitBtn = document.querySelector(".submit-btn");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordConfirmedInput = document.getElementById("confirm-password");

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
  if (verifyUsername(username) && verifyPassword(password, passwordConfirmed)) {
    let usersStasts = JSON.parse(localStorage.getItem("usersStats"));
    usersStasts.push({ name: username });
    localStorage.setItem("currentUser", username);
    localStorage.getItem("usersStats", JSON.stringify(usersStasts));
  }
}

function getValue(input) {
  return input.value;
}

function verifyUsername(username) {
  const usersStasts = JSON.parse(localStorage.getItem("usersStats"));
  return !usersStasts.some(function (user) {
    return user.name == username;
  });
}

function verifyPassword(password, passwordConfirmed) {
  if (password.length < 8) {
    //alertar que la contra es menor de 8
    console.log(1);
    return false;
  } else if (!verifyRegex(password, /\d/)) {
    //alertar que la contra no tiene numero
    console.log(2);
    return false;
  } else if (!verifyRegex(password, /\s/) && !verifyRegex(password, /\W/)) {
    //alertar que contenga al menos un caracter especial
    console.log(3);
    return false;
  } else if (!someUpperCase(password)) {
    //alertar que contenga alguna mayuscula
    console.log(4);
    return false;
  } else if (!someLowerCase(password)) {
    //alertar que contenga alguna minuscula
    console.log(5);
    return false;
  } else if (password !== passwordConfirmed) {
    //alertar que las contraseñas tienen que ser iguales
    console.log(6);
    return false;
  } else {
    return true;
  }
}

function verifyRegex(string, expression) {
  console.log(string.match(expression));
  return string.match(expression);
}

function someLowerCase(password) {
  for (let i = 0; i < password.length; i++) {
    if (password[i].toLowerCase() === password[i]) {
      return true;
    }
  }
  return false;
}

function someUpperCase(password) {
  for (let i = 0; i < password.length; i++) {
    if (password[i].toUpperCase() === password[i]) {
      return true;
    }
  }
  return false;
}
