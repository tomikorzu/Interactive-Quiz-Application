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
    let date = new Date();
    let usersStasts = JSON.parse(localStorage.getItem("usersStats"));
    if (usersStasts) {
      usersStasts.push({
        name: username,
        password: password,
        date: date.toDateString(),
        stadistics: {},
      });
    } else {
      usersStasts = [
        {
          name: username,
          password: password,
          date: date.toDateString(),
          stadistics: {},
        },
      ];
    }
    localStorage.setItem("currentUser", username);
    localStorage.setItem("usersStats", JSON.stringify(usersStasts));
    redirectPage("../index.html");
  }
}

function getValue(input) {
  return input.value;
}

function verifyUsername(username) {
  const usersStasts = JSON.parse(localStorage.getItem("usersStats"));
  if (usersStasts) {
    let existUser = !usersStasts.some(function (user) {
      return user.name == username;
    });
    if (!existUser) {
      console.log("existe el usuario");
      //alert existe el usuario
    }
    return existUser;
  } else {
    return true;
  }
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
  console.log(string);
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
    if (verifyRegex(password[i], /\D/)) {
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
