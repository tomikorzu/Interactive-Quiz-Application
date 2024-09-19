const userBtn = document.createElement("button");

const userButton = () => {
  userBtn.classList.add("user-btn");
  userBtn.innerHTML = `<i class="fa-solid fa-user user-icon"></i>`;
  document.body.appendChild(userBtn);
  userBtn.addEventListener("click", userPanel);
};

const userPanel = () => {
  userBtn.style.pointerEvents = "none";
  applyBlur();
  const userPanel = document.createElement("div");
  userPanel.classList.add("user-panel");
  setTimeout(() => {
    userPanel.style.display = "flex";
  }, 200);
  userPanel.innerHTML = `
  <button class="quit-panel"><i class="fa-solid fa-xmark quit-icon"></i></button>
  <h3 class="user-title">Choose an option<h3/>
  <div class="button-div">
  <button class="btn-user-panel" id="btn-signup">Sign up</button>
  <button class="btn-user-panel" id="btn-login">Sign in</button>
  <div/>`;
  document.body.appendChild(userPanel);
  const quitPanel = document.querySelector(".quit-panel");
  quitPanel.addEventListener("click", () => {
    quitBlur();
    userPanel.classList.add("fade-out");
    userBtn.style.pointerEvents = "auto";
    setTimeout(() => {
      userPanel.remove();
    }, 500);
  });

  const signupBtn = document.getElementById("btn-signup");
  const signinBtn = document.getElementById("btn-login");
  signupBtn.addEventListener("click", () => redirectPage("../sign-page/signup.html"));
  signinBtn.addEventListener("click", () => redirectPage("../sign-page/signin.html"));
};

function applyBlur() {
  userBtn.style.filter = "blur(5px)";
  document.querySelector("main").style.filter = "blur(5px)";
  document.querySelector("footer").style.filter = "blur(5px)";
}
function quitBlur() {
  document.querySelector("main").style.filter = "blur(0px)";
  document.querySelector("footer").style.filter = "blur(0px)";
  userBtn.style.filter = "blur(0)";
}

const redirectPage = (page) => {
  const body = document.querySelector("body");
  body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
  } , 500);
};

export default userButton;
