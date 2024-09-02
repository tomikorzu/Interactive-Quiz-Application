const startBtn = document.getElementById("start-btn");
const selecter = document.getElementById("selecter");
const body = document.querySelector("body");
const main = document.querySelector("main");
const selecterContent = document.createElement("div");
startBtn.addEventListener("click", viewCategories);
localStorage.clear()

function viewCategories() {
  startBtn.style.pointerEvents = "none";
  applyBlur();
  createSelecter();
  const quitBtn = document.getElementById("quit-btn");
  quitBtn.addEventListener("click", quitSelecter);
  const categoriesBtn = document.querySelectorAll(".btn-category");
  categoriesBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem("preferences", btn.textContent.toLowerCase());
      selectDificult()
      const exitBtn = document.getElementById("exit-btn");
      exitBtn.addEventListener("click", quitSelecter);
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
  selecterContent.classList.add("selecter-content-show");
}

function selectDificult() { 
  selecter.innerHTML = "";
  selecter.classList.add('difficult-menu')
  selecterContent.classList.add("selecter-div");
  selecterContent.classList.add('category-selecter')
  selecterContent.innerHTML = `<button class="back-btn" id="back-btn"><i class="fa-solid fa-arrow-left back-icon"></i></button><button id="exit-btn"><i class="fa-solid fa-xmark quit-icon"></i></button><h3 class="h2-category h2-margin">Select the difficulty</h3>
            <ul class="ul-category">
                <li><button class="btn-category btn-difficult easy-btn">Easy</button></li>
                <li><button class="btn-category btn-difficult medium-btn">Medium</button></li>
                <li><button class="btn-category btn-difficult difficult-btn">Difficult</button></li>
            </ul>`;
  selecter.append(selecterContent);
  const goBackBtn = document.getElementById("back-btn");
  goBackBtn.addEventListener("click", goBack);
  const difficultyBtn = document.querySelectorAll(".btn-difficult");
  difficultyBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      localStorage.setItem("difficult", index);
      askUserName();
      // transitionRedirect('./quiz-page/index.html')
    });
  });
}

function quitSelecter() {
  selecter.classList.remove("selecter-show");
  startBtn.style.pointerEvents = "auto";
  quitBlur();
  localStorage.clear();
}
function goBack() {
  viewCategories();
  localStorage.clear();
}

function applyBlur() {
  main.classList.add("apply-blur");
}
function quitBlur() {
  main.classList.remove("apply-blur");
}

function transitionRedirect(url) {
  body.classList.add('transition-page');
  setTimeout(function() {
    window.location.href = url;
  }, 500);
  setTimeout(function(){
    body.classList.remove('transition-page')
  }, 2000)
}

function askUserName (){
  selecter.innerHTML = "";
  selecterContent.innerHTML = `
  <button class="back-btn" id="go-back-btn"><i class="fa-solid fa-arrow-left back-icon"></i></button><button id="quit-user-menu"><i class="fa-solid fa-xmark quit-icon"></i></button><h3 class="h2-category">Enter your name</h3>
  <input type="text" class="input-name
  " id="input-name" palceholder="Type your name">
  <button class="btn-submit-name" id="submit-name">Submit</button>`;
  selecter.append(selecterContent);
  selecter.classList.add("selecter-show");
  let inputName = document.getElementById('input-name');
  const submitName = document.getElementById('submit-name');
  submitName.classList.add('btn-category');
  selecterContent.classList.add("selecter-content-show");
  const backUserMenu = document.getElementById('go-back-btn');
  backUserMenu.addEventListener('click', goBack);
  const quitUserMenu = document.getElementById('quit-user-menu');
  quitUserMenu.addEventListener('click', quitSelecter);
  submitName.addEventListener('click', submitNameFunction);
}

function submitNameFunction() {
  let userName = document.getElementById('input-name').value;
  if(userName === ''){
    userAlert('Please enter your name');
  } else {
    localStorage.setItem('userName', userName);
    transitionRedirect('./quiz-page/index.html');
  }
}

function userAlert(alert){
  let alertDiv = document.createElement('div');
  alertDiv.classList.add('alert-menu');
  alertDiv.innerHTML = `<h4 class="h4-alert">Alert</h4><p class="p-alert">${alert}</p>`;
  body.append(alertDiv);
  setTimeout(function(){
    alertDiv.remove();
  }, 3000)
}