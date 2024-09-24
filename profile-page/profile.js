import { globalCategories } from "../questions.js";
import functions from "../utils/mainFunctions.js";
import { userAlert } from "../utils/mainFunctions.js";

functions.homeButton("../");
const deleteAccount = document.getElementById("delete");
const imagePreview = document.getElementById("img-preview");
let defaultFileImg = "../public/user-solid.svg";
const imageBox = document.querySelector(".image-box");

let deleteButton = document.createElement("button");
deleteButton.classList.add("delete-image-button");
deleteButton.classList.add("fade-in");
deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
deleteButton.children[0].classList.add("delete-image-icon");
deleteButton.addEventListener("click", function () {
  functions.askMenuFunction("Are you sure you want to quit your photo?", () =>
    updateUserImage("")
  );
});
imageBox.addEventListener("mouseover", function () {
  const currentUserName = localStorage.getItem("currentUser");
  const currentUserInfo = usersStats.find(
    (user) => user.name === currentUserName
  );
  if (currentUserInfo.image) {
    imageBox.append(deleteButton);
  }
});

imageBox.addEventListener("mouseleave", function () {
  deleteButton.remove();
});

function updateUserImage(imageSrc) {
  const currentUserName = localStorage.getItem("currentUser");
  const currentUserInfo = usersStats.find(
    (user) => user.name === currentUserName
  );
  if (currentUserInfo) {
    currentUserInfo.image = imageSrc;
    localStorage.setItem("usersStats", JSON.stringify(usersStats));

    const profileImgElement = document.querySelector(".profile-img");
    if (profileImgElement) {
      profileImgElement.src = imageSrc;
    }
  }
  location.reload();
}

deleteAccount.addEventListener("click", deleteMenu);
document.querySelector("body").classList.add("appear-body");
const changeNameDiv = document.createElement("div");
const leaderboardBtn = document.querySelector(".leaderboard-btn");
leaderboardBtn.addEventListener("click", function () {
  redirectPage("../leaderboard-page/");
});

const changeName = document.getElementById("change-name");
changeName.addEventListener("click", changeNameMenu);

const signOutBtn = document.getElementById("sign-out");
signOutBtn.addEventListener("click", function () {
  functions.askMenuFunction("Are you sure you want to sign out?", signOut);
});

document.addEventListener("DOMContentLoaded", () => {
  let fileInput = document.getElementById("imageUpload");

  if (!imagePreview) {
    return;
  }

  const usersStats = JSON.parse(localStorage.getItem("usersStats")) || [];
  const currentUserName = localStorage.getItem("currentUser");
  const currentUserInfo = usersStats.find(
    (user) => user.name === currentUserName
  );

  if (currentUserInfo && currentUserInfo.image) {
    imagePreview.style.objectFit = "cover";
    imagePreview.src = currentUserInfo.image;
  } else {
    imagePreview.style.objectFit = "contain";
    imagePreview.src = defaultFileImg;
  }

  const changePhotoLabel = document.getElementById("change-photo-label");
  if (changePhotoLabel) {
    changePhotoLabel.addEventListener("click", () => {
      if (fileInput) {
        fileInput.click();
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener("change", function () {
      if (fileInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          imagePreview.style.objectFit = "cover";
          imagePreview.src = e.target.result;
          updateUserImage(e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        imagePreview.style.objectFit = "contain";
        imagePreview.src = defaultFileImg;
      }
    });
  }
});

if (!localStorage.getItem("currentUser")) {
  window.location.href = "../page-not-found/";
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
  setValue(".total-time", getTotalValues("totalTime"));
  setValue(".average-score", getAverageScore());
  setValue(".favorite-category", getFavoriteCategory());
}
function getFavoriteCategory() {
  let statsValues = Object.entries(currentUserStats);
  let favoriteCategory = "";
  if (statsValues[0]) {
    let maxPlayed = statsValues[0][1].totalPlayed;
    favoriteCategory = statsValues[0][0];
    for (let i = 1; i < statsValues.length; i++) {
      if (statsValues[i][1].totalPlayed > maxPlayed) {
        maxPlayed = statsValues[i][1].totalPlayed;
        favoriteCategory = statsValues[i][0];
      }
    }
  } else {
    return "None";
  }
  return globalCategories[favoriteCategory.toLowerCase()].description.name;
}
function getAverageScore() {
  let corrects = getTotalValues("corrects");
  let incorrects = getTotalValues("incorrects");
  let skips = getTotalValues("skips");
  if (corrects) {
    return incorrects || skips
      ? (corrects / (incorrects + skips)).toFixed(1)
      : corrects;
  } else {
    return 0;
  }
}
function setValue(element, value) {
  document.querySelector(element).textContent = value;
}
function getTotalValues(value) {
  let totalValue = 0;
  Object.values(currentUserStats).forEach(function (stat) {
    if (!stat[value]) {
      return 0;
    }
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
    window.location.href = "../";
  }, 500);
}

import { menu, menuFunction } from "../utils/mainFunctions.js";
function deleteMenu() {
  menuFunction(`<h2>Are you sure you want to delete your account?</h2>
      <div class="alert-buttons">
        <button class="menu-delete-btn" id="cancel-delete">Cancel</button>
        <button class="menu-delete-btn" id="accept-delete">Delete</button>
      </div>`);
  const cancelDelete = document.getElementById("cancel-delete");
  cancelDelete.addEventListener("click", () => {
    menu.classList.add("fade-out");
    functions.quitBlur();
    setTimeout(() => {
      menu.remove();
      menu.classList.remove("fade-out");
    }, 500);
  });
  const acceptDelete = document.getElementById("accept-delete");
  acceptDelete.addEventListener("click", () => {
    document.querySelector("body").classList.add("fade-out");
    setTimeout(() => {
      deleteAccountFunction();
    }, 500);
  });
}
function deleteAccountFunction() {
  const usersStats = JSON.parse(localStorage.getItem("usersStats"));
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  const currentLeaderboard = usersStats.filter(
    (user) => user.name !== localStorage.getItem("currentUser")
  );
  const currentUserInfo = usersStats.find(
    (user) => user.name === localStorage.getItem("currentUser")
  );
  const index = usersStats.indexOf(currentUserInfo);
  usersStats.splice(index, 1);
  localStorage.setItem("leaderboard", JSON.stringify(currentLeaderboard));
  localStorage.setItem("usersStats", JSON.stringify(usersStats));
  localStorage.removeItem("currentUser");
  window.location.href = "../";
}

function addCategory(category) {
  if (globalCategories[category]) {
    const newCategoryDiv = document.createElement("div");
    newCategoryDiv.classList.add("category-div");
    newCategoryDiv.style.backgroundColor =
      globalCategories[category].description.backgroundContent;
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
function verifyUsername(username) {
  const usersStats = JSON.parse(localStorage.getItem("usersStats")) || [];

  if (!username) {
    userAlert("Username cannot be empty.");
    return false;
  }

  if (username.length > 20) {
    userAlert("The username cannot be longer than 20 characters.");
    return false;
  }

  const existUser = usersStats.some((user) => user.name === username);

  if (existUser) {
    userAlert("Username already exists. Please choose a different one.");
    return false;
  }
  functions.quitBlur();
  changeNameDiv.remove();
  location.reload();
  return true;
}

function changeNameMenu() {
  functions.applyBlur();

  if (!changeNameDiv) {
    changeNameDiv = document.createElement("div");
  }

  changeNameDiv.classList.add("menu");
  changeNameDiv.innerHTML = `
    <h2>Change your name</h2>
    <input type="text" id="new-name" class="new-name" placeholder="New name">
    <div class="alert-buttons">
    <button class="menu-delete-btn" id="cancel-change">Cancel</button>
    <button class="menu-delete-btn" id="change-name-button">Change</button>
    </div>
  `;
  document.body.appendChild(changeNameDiv);
  const cancelChange = document.getElementById("cancel-change");
  cancelChange.addEventListener("click", () => {
    changeNameDiv.classList.add("fade-out");
    functions.quitBlur();
    setTimeout(() => {
      changeNameDiv.remove();
      changeNameDiv.classList.remove("fade-out");
    }, 500);
  });
  const changeNameButton = document.getElementById("change-name-button");
  changeNameButton.addEventListener("click", () => {
    const newName = document.getElementById("new-name").value;
    if (verifyUsername(newName)) {
      updateUserName(newName);
    }
  });
}

function updateUserName(newName) {
  let usersStats = JSON.parse(localStorage.getItem("usersStats")) || [];
  let currentUserName = localStorage.getItem("currentUser");
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

  let currentUser = usersStats.find((user) => user.name === currentUserName);

  if (currentUser) {
    currentUser.name = newName;

    localStorage.setItem("usersStats", JSON.stringify(usersStats));

    localStorage.setItem("currentUser", newName);

    leaderboard.forEach((entry) => {
      if (entry.name === currentUserName) {
        entry.name = newName;
      }
    });

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  }
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
