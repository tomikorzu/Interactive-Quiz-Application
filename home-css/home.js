const startBtn = document.getElementById("start-btn");
const selecter = document.getElementById("selecter");
const body = document.querySelector("body");
const main = document.querySelector("main");
const selecterContent = document.createElement("div");
startBtn.addEventListener("click", viewCategories);
localStorage.clear();

function viewCategories() {
  startBtn.style.pointerEvents = "none";
  applyBlur();
  createSelecter();
  const quitBtn = document.getElementById("quit-btn");
  quitBtn.addEventListener("click", quitSelecter);
  const scienceBtn = document.getElementById("science-btn");
  const historyBtn = document.getElementById("history-btn");
  const geographyBtn = document.getElementById("geography-btn");
  const entretainmentBtn = document.getElementById("entretainment-btn");
  const artBtn = document.getElementById("art-btn");
  const categoriesBtn = document.querySelectorAll(".btn-category");
  categoriesBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem("preferences", btn.textContent.toLowerCase());
      selectDificult();
      const exitBtn = document.getElementById('exit-btn')
      exitBtn.addEventListener('click', quitSelecter)
    });
});
}
function createSelecter() {
  selecter.innerHTML = "";

  selecterContent.classList.add("selecter-div");
  selecterContent.innerHTML = `<button id="quit-btn"><i class="fa-solid fa-xmark quit-icon"></i></button><h3 class="h2-category">Select one category</h3>
            <ul class="ul-category">
                <li><button class="btn-category science-btn" id="science-btn"><i class="fa-solid fa-flask icon-category"></i>Science</button></li>
                <li><button class="btn-category history-btn" id="history-btn"><i class="fa-solid fa-book-open icon-category"></i>History</button></li>
                <li><button class="btn-category geography-btn" id="geography-btn"><i class="fa-solid fa-earth-americas icon-category"></i>Geography</button></li>
                <li><button class="btn-category entretainment-btn" id="entretainment-btn"><i class="fa-solid fa-gamepad icon-category"></i>Entretainment</button></li>
                <li><button class="btn-category art-btn" id="art-btn"><i class="fa-solid fa-paintbrush icon-category"></i>Culture</button></li>
            </ul>`;
  selecter.append(selecterContent);
  selecter.classList.add("selecter-show");
}

function selectDificult() {
  selecter.innerHTML = "";
  selecterContent.classList.add("selecter-div");
  selecterContent.innerHTML = `<button id="exit-btn"><i class="fa-solid fa-xmark quit-icon"></i></button><h2 class="h2-category">Select the difficulty</h2>
            <ul class="ul-category">
                <li><button class="btn-category easy-btn">Easy</button></li>
                <li><button class="btn-category medium-btn">Medium</button></li>
                <li><button class="btn-category difficult-btn">Difficult</button></li>
            </ul>`;
  selecter.append(selecterContent);
  selecter.classList.add("selecter-show");
  
}

function quitSelecter() {
  selecter.classList.remove("selecter-show");
  startBtn.style.pointerEvents = "auto";
  quitBlur();
}

function applyBlur() {
  main.classList.add("apply-blur");
}
function quitBlur() {
  main.classList.remove("apply-blur");
}
