const userBtn = document.createElement("button");
const body = document.createElement("body");
const userInfoPanelDiv = document.createElement("div");
userInfoPanelDiv.classList.add("user-info-panel");

const userButton = () => {
  userBtn.classList.add("user-btn");

  userBtn.classList.add("fade-in");
  userBtn.innerHTML = `<i class="fa-solid fa-user user-icon"></i>`;
  document.body.appendChild(userBtn);
  userBtn.addEventListener("click", () => {
    if (localStorage.getItem("currentUser")) {
      userInfoPanel();
    } else {
      userPanel();
    }
  });
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
  signupBtn.addEventListener("click", () =>
    redirectPage("../sign-page/signup.html")
  );
  signinBtn.addEventListener("click", () =>
    redirectPage("../sign-page/signin.html")
  );
};

function applyBlur() {
  userBtn.style.filter = "blur(5px)";
  document.querySelector("main").style.filter = "blur(5px)";
  if (document.querySelector("footer")) {
    document.querySelector("footer").style.filter = "blur(5px)";
  }
}
function quitBlur() {
  document.querySelector("main").style.filter = "blur(0px)";
  if (document.querySelector("footer")) {
    document.querySelector("footer").style.filter = "blur(0px)";
  }
  userBtn.style.filter = "blur(0)";
}

const redirectPage = (page) => {
  const body = document.querySelector("body");
  body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
  }, 500);
};

const userInfoPanel = () => {
  userBtn.style.pointerEvents = "none";
  userBtn.classList.remove("fade-in");
  userBtn.classList.add("fade-out");
  userInfoPanelDiv.innerHTML = `
  <h3 class="user-name user-info-title">${localStorage.getItem(
    "currentUser"
  )}<h3/>
  <button class="btn-user-panel" id="profile-btn">Profile</button>
  <button class="btn-user-panel" id="signout-btn">Sign out</button>`;
  document.body.appendChild(userInfoPanelDiv);
  const signoutBtn = document.getElementById("signout-btn");
  const profileBtn = document.getElementById("profile-btn");
  profileBtn.addEventListener("click", goProfilePage);
  signoutBtn.addEventListener("click", signOut);
  document.addEventListener("click", quitUserInfoPanel);

  setTimeout(() => {
    userInfoPanelDiv.classList.add("user-info-show");
  }, 200);
};

const quitUserInfoPanel = (event) => {
  if (
    !userInfoPanelDiv.contains(event.target) &&
    event.target !== userBtn &&
    event.target !== userBtn.querySelector(".user-icon")
  ) {
    userInfoPanelDiv.classList.remove("user-info-show");
    userBtn.classList.add("fade-in");
    userBtn.classList.remove("fade-out");
    setTimeout(() => {
      userBtn.style.pointerEvents = "auto";
    }, 500);
  }
};

export const userAlert = (alert) => {
  let currentBody = document.querySelector("body");
  let alertDiv = document.createElement("div");
  alertDiv.classList.add("alert-menu");
  alertDiv.innerHTML = `<h4 class="h4-alert">Alert</h4><p class="p-alert">${alert}</p>`;
  currentBody.append(alertDiv);
  setTimeout(function () {
    alertDiv.remove();
  }, 4000);
};

const signOut = () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("difficult");
  localStorage.removeItem("category");
  userInfoPanelDiv.classList.add("fade-out");
  setTimeout(() => {
    userInfoPanelDiv.remove();
    userInfoPanelDiv.classList.remove("fade-out");
  }, 500);
  setTimeout(() => {
    if (window.location.pathname === "/") {
      location.reload();
    } else {
      redirectPage("../");
    }
  }, 500);
};

const goProfilePage = () => {
  if (window.location.pathname === "/") {
    redirectPage("./profile-page/");
  } else {
    redirectPage("../profile-page/");
  }
};

const homeBtn = document.createElement("button");
const homeButton = (url) => {
  homeBtn.classList.add("home-btn");
  homeBtn.innerHTML = `<i class="fa-solid fa-home home-icon"></i>`;
  document.body.appendChild(homeBtn);
  homeBtn.addEventListener("click", () => {
    askMenuFunction(
      "Are you sure you want to go back to the home page?",
      () => {
        redirectPage(url);
      }
    );
    homeBtn.style.pointerEvents = "none";
    // redirectPage(url);
  });
};

function askMenuFunction(question, functionToExecute) {
  const askMenu = document.createElement("div");
  askMenu.classList.add("ask-menu");
  applyBlur();
  askMenu.innerHTML = `
  <h4>${question}</h4>
  <div class="buttons-container-ask">
  <button class="btn-user-panel" id="no-btn"><i class="fa-solid fa-xmark"></i></button>
  <button class="btn-user-panel" id="yes-btn"><i class="fa-solid fa-check"></i></button>
  </div>`;
  document.body.appendChild(askMenu);
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  yesBtn.addEventListener("click", () => {
    functionToExecute();
  });
  noBtn.addEventListener("click", () => {
    askMenu.remove();
    quitBlur();
    homeBtn.style.pointerEvents = "auto";
  });
}

export const menu = document.createElement("div");
export function menuFunction(content) {
  menu.classList.add("menu");
  applyBlur();
  menu.innerHTML = `${content}`;
  document.body.appendChild(menu);
}

export default {
  userButton,
  userAlert,
  homeButton,
  menuFunction,
  applyBlur,
  quitBlur,
  askMenuFunction,
};
