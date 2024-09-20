const userBtn = document.createElement("button");

// const usersLogged = localStorage.getItem("usersStats");

const userInfoPanelDiv = document.createElement("div");
userInfoPanelDiv.classList.add("user-info-panel");

const userButton = () => {
  userBtn.classList.add("user-btn");
  userBtn.innerHTML = `<i class="fa-solid fa-user user-icon"></i>`;
  document.body.appendChild(userBtn);
  userBtn.addEventListener("click", () => {
    if (localStorage.getItem("currentUser")) {
      userInfoPanel();
      userBtn.style.pointerEvents = "none";
      userBtn.classList.add("fade-out");
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
  <ul class="users-list" id="users-list"></ul>
  <div class="button-div">
  <button class="btn-user-panel" id="btn-signup">Sign up</button>
  <button class="btn-user-panel" id="btn-login">Sign in</button>
  <div/>`;
  document.body.appendChild(userPanel);
  const quitPanel = document.querySelector(".quit-panel");
  const usersList = document.getElementById("users-list");

  // usersLogged.forEach((user) => {
  //   let li = document.createElement("li");
  //   li.innerHTML = `<button class="select-user-btn"><i class="fa-solid fa-user user-icon"></i><p>${user.name}</p></button>`;
  //   usersList.appendChild(li);
  // });

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
  }, 500);
};

const userInfoPanel = () => {
  setTimeout(() => {
    userInfoPanelDiv.classList.add("user-info-show");
    document.addEventListener("click", function (event) {
      if (!userInfoPanelDiv.contains(event.target)) {
        userInfoPanelDiv.classList.remove("user-info-show");
        setTimeout(() => {
          userInfoPanelDiv.remove();
          userBtn.style.pointerEvents = "auto";
          userBtn.classList.remove("fade-out");
          userBtn.classList.add("fade-in");
        }, 500);
      }
    });
  }, 200);
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
};

function userAlert(alert) {
  let alertDiv = document.createElement("div");
  alertDiv.classList.add("alert-menu");
  alertDiv.innerHTML = `<h4 class="h4-alert">Alert</h4><p class="p-alert">${alert}</p>`;
  body.append(alertDiv);
  setTimeout(function () {
    alertDiv.remove();
  }, 3000);
}

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
    if (window.location.pathname === "/index.html") {
      location.reload();
    } else {
      redirectPage("../index.html");
    }
  }, 500);
};

const goProfilePage = () => {
  if (window.location.pathname === "/index.html") {
    redirectPage("./profile-page/index.html");
  } else {
    redirectPage("../profile-page/index.html");
  }
};

export default userButton;
