document.querySelector("h1").textContent = localStorage.getItem("currentUser");
const usersStats = JSON.parse(localStorage.getItem("usersStats"));
const currentUserInfo = usersStats.find(
  (user) => user.name === localStorage.getItem("currentUser")
);
console.log(currentUserInfo.stats);

const currentUserStats = currentUserInfo.stats;

document.querySelector(".first-log").textContent = currentUserInfo.date;
// document.querySelector('.total-played').textContent
