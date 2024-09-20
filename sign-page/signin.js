const body = document.querySelector("body");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

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
