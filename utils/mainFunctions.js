const userBtn = document.createElement("button");

const userButton = () => {
  userBtn.classList.add("user-btn");
  userBtn.innerHTML = `<i class="fa-solid fa-user user-icon"></i>`;
  document.body.appendChild(userBtn);
  userBtn.addEventListener("click", userPanel);
};

const userPanel = () => {
  userBtn.style.pointerEvents = "none";
  userBtn.classList.add("apply-blur");
  userBtn.classList.remove("quit-blur");
  document.querySelector("main").classList.remove("quit-blur");
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
    userPanel.classList.add("fade-out");
    userBtn.style.pointerEvents = "auto";
    userBtn.classList.remove("apply-blur");
    userBtn.classList.add("quit-blur");
    document.querySelector("main").classList.add("quit-blur");
    setTimeout(() => {
      userPanel.remove();
    }, 500);
  });
};

function applyBlur() {
  document.querySelector("main").style.filter = "blur(5px)";
  document.querySelector("footer").classList.add("apply-blur");
}
function quitBlur() {
  document.querySelector("main").style.filter = "blur(0px)";
  document.querySelector("footer").classList.remove("apply-blur");
}

const redirectPage = (page) => {
  const body = document.querySelector("body");
  body.classList.add("hide-body");
};

export default userButton;
