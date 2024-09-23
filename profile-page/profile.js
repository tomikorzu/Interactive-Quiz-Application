import { globalCategories } from "../questions.js";

const deleteAccount = document.getElementById("delete");
deleteAccount.addEventListener("click", deleteAlert);
document.querySelector("body").classList.add("appear-body");
const changeName = document.getElementById("change-name");
const changeNameDiv = document.createElement("div");
const leaderboardBtn = document.querySelector(".leaderboard-btn");
leaderboardBtn.addEventListener("click", function () {
  redirectPage("../leaderboard-page/index.html");
});
changeName.addEventListener("click", changeNameMenu);
const signOutBtn = document.getElementById("sign-out");
signOutBtn.addEventListener("click", signOut);

if (!localStorage.getItem("currentUser")) {
  window.location.href = "../page-not-found/index.html";
}

const usersStats = JSON.parse(localStorage.getItem("usersStats"));
const currentUserInfo = usersStats.find(
  (user) => user.name === localStorage.getItem("currentUser")
);

const currentUserStats = currentUserInfo.stadistics;

function setProfileInformation() {
  setValue("h1", currentUserInfo.name);
  setValue(".first-log", currentUserInfo.date);
  setValue(".total-played", getTotalValues("totalPlayed"));
  setValue(".total-correct", getTotalValues("corrects"));
  setValue(".total-incorrect", getTotalValues("incorrects"));
  setValue(".total-skip", getTotalValues("skips"));
  setValue(".average-score", getAverageScore());
  setValue(".favorite-category", getFavoriteCategory());
}
function getFavoriteCategory() {
  let statsValues = Object.entries(currentUserStats);
  let maxPlayed = statsValues[0][1].totalPlayed;
  let favoriteCategory = statsValues[0][0];
  for (let i = 1; i < statsValues.length; i++) {
    if (statsValues[i][1].totalPlayed > maxPlayed) {
      maxPlayed = statsValues[i][1].totalPlayed;
      favoriteCategory = statsValues[i][0];
    }
  }
  return favoriteCategory;
}
function getAverageScore() {
  return (
    getTotalValues("corrects") /
    (getTotalValues("incorrects") + getTotalValues("skips"))
  ).toFixed(1);
}
function setValue(element, value) {
  document.querySelector(element).textContent = value;
}
function getTotalValues(value) {
  let totalValue = 0;
  Object.values(currentUserStats).forEach(function (stat) {
    totalValue += stat[value];
  });
  return totalValue;
}

let statsLength = Object.keys(currentUserStats).length;
const categoryContainer = document.querySelector(".category-container");

function updateGridLayout() {
  if (statsLength == 0) {
    document.querySelector(
      ".category-data"
    ).innerHTML = `<h3>No stats yet</h3>`;
  } else {
    if (window.innerWidth < 768) {
      categoryContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (window.innerWidth >= 768 && window.innerWidth < 1100) {
      categoryContainer.style.gridTemplateColumns =
        statsLength === 1 ? "repeat(1, 1fr)" : "repeat(2, 1fr)";
    } else if (window.innerWidth >= 1100) {
      if (statsLength === 1) {
        categoryContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
      } else if (statsLength === 2) {
        categoryContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
      } else {
        categoryContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
      }
    }
  }
}

setProfileInformation();

function signOut() {
  localStorage.removeItem("currentUser");
  document.querySelector("body").classList.remove("appear-body");
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 500);
}

function deleteAlert() {
  const alertMenu = document.createElement("div");
  alertMenu.classList.add("alert-menu");
  alertMenu.classList.add("alert-menu-transition");
  alertMenu.innerHTML = `
      <h2>Are you sure you want to delete your account?</h2>
      <div class="alert-buttons">
        <button class="alert-button" id="cancel-delete">Cancel</button>
        <button class="alert-button" id="accept-delete">Delete</button>
      </div>
  `;
  document.body.appendChild(alertMenu);
  const cancelDelete = document.getElementById("cancel-delete");
  cancelDelete.addEventListener("click", () => {
    alertMenu.classList.remove("alert-menu-transition");
    setTimeout(() => {
      alertMenu.remove();
    }, 500);
  });
  const acceptDelete = document.getElementById("accept-delete");
  acceptDelete.addEventListener("click", () => {
    alertMenu.classList.remove("alert-menu-transition");
    setTimeout(() => {
      alertMenu.remove();
      document.querySelector("body").classList.remove("appear-body");
      setTimeout(() => {
        deleteAccountFunction();
      }, 500);
    }, 500);
  });
}
function deleteAccountFunction() {
  const usersStats = JSON.parse(localStorage.getItem("usersStats"));
  const currentUserInfo = usersStats.find(
    (user) => user.name === localStorage.getItem("currentUser")
  );
  const index = usersStats.indexOf(currentUserInfo);
  usersStats.splice(index, 1);
  localStorage.setItem("usersStats", JSON.stringify(usersStats));
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
}
function addCategory(category) {
  if (globalCategories[category]) {
    const newCategoryDiv = document.createElement("div");
    newCategoryDiv.classList.add("category-div");
    newCategoryDiv.style.backgroundColor =
      globalCategories[category].description.backgroundContent;
    // <span class="category-played">${currentUserStats[category].totalPlayed}</span>
    newCategoryDiv.innerHTML = `
      <span class="category-name">${globalCategories[category].description.name}</span>
      <div class="data-div">
        <span class="data-title">Total Played:</span>
        <span class="category-played">${currentUserStats[category].totalPlayed}</span>
      </div>
      <div class="data-div">
        <span class="data-title">Corrects:</span>
        <span class="category-correct">${currentUserStats[category].corrects}</span>
      </div>
      <div class="data-div">
        <span class="data-title">Max points:</span>
        <span class="category-maxPoints">${currentUserStats[category].maxPoints}</span>
      </div>
      <div class="data-div">
        <span class="data-title">Incorrects:</span>
        <span class="category-incorrect">${currentUserStats[category].incorrects}</span>
      </div>
      <div class="data-div">
        <span class="data-title">Skips:</span>
        <span class="category-skips">${currentUserStats[category].skips}</span>
      </div>
    </div>
  `;
    document.querySelector(".category-container").appendChild(newCategoryDiv);
  }
}

function changeNameMenu() {
  changeNameDiv.classList.add("alert-menu");
  changeNameDiv.innerHTML = `
    <h2>Change your name</h2>
    <input type="text" id="new-name" placeholder="New name">
    <button id="change-name-button">Change</button>
  `;
  document.body.appendChild(changeNameDiv);

  const changeNameButton = document.getElementById("change-name-button");
  changeNameButton.addEventListener("click", () => {
    const newName = document.getElementById("new-name").value;
    if (newName.length > 0) {
      changeNameFunction(newName);
    }
  });
}

function changeNameFunction(name) {
  const usersStats = JSON.parse(localStorage.getItem("usersStats"));
  const currentUserInfo = usersStats.find(
    (user) => user.name === localStorage.getItem("currentUser")
  );
  const index = usersStats.indexOf(currentUserInfo);
  usersStats[index].name = name;
  localStorage.setItem("usersStats", JSON.stringify(usersStats));
  localStorage.setItem("currentUser", name);
  document.querySelector("h1").textContent = name;
  changeNameDiv.classList.remove("alert-menu-transition");
  setTimeout(() => {
    changeNameDiv.remove();
  }, 500);
}

function redirectPage(page) {
  document.querySelector("body").classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
    body.classList.remove("fade-out");
  }, 500);
}

if (statsLength == 0) {
  document.querySelector(".category-data").innerHTML = `<h3>No stats yet</h3>`;
} else {
  for (let key in currentUserStats) {
    addCategory(key);
  }

  updateGridLayout();
  window.addEventListener("resize", updateGridLayout);
}
