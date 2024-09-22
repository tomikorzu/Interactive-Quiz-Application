import { globalCategories } from "../questions.js";
console.log(globalCategories.history.description.backgroundContent);

document.querySelector("h1").textContent = localStorage.getItem("currentUser");
const usersStats = JSON.parse(localStorage.getItem("usersStats"));
const currentUserInfo = usersStats.find(
  (user) => user.name === localStorage.getItem("currentUser")
);
console.log(currentUserInfo.stadistics);

const currentUserStats = currentUserInfo.stadistics;

document.querySelector(".first-log").textContent = currentUserInfo.date;

let categoryBox = document.querySelector(".category-div");
categoryBox.style.backgroundColor =
  globalCategories.history.description.backgroundContent;
// document.querySelector('.total-played').textContent
