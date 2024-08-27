let answers = document.querySelectorAll(".answer");
let skipButton = document.getElementById("next-question");
let skips = 0;
let progress = document.getElementById("progress");
let progressBar = document.getElementById("progress-bar");
let currentExplanation = "";
progress.style.height = "30px";
progress.style.backgroundColor = "green";
progressBar.style.backgroundColor = "grey";
progressBar.style.width = "80%";
progressBar.style.height = "30px";

skipButton.addEventListener("click", skipQuestion);

let globalCategories = {
  history: [
    [
      {
        "¿Quién fue el primer presidente de los Estados Unidos?": {
          "George Washington": true,
          "John Adams": false,
          "Thomas Jefferson": false,
          "Benjamin Franklin": false,
        },
        explanation: "explicacion",
      },
      {
        "¿En qué año comenzó la Revolución Francesa?": {
          1789: true,
          1776: false,
          1804: false,
          1812: false,
        },
        explanation: "explicacion",
      },
    ],
    [
      {
        "¿Qué imperio construyó el Coliseo en Roma?": {
          "El Imperio Romano": true,
          "El Imperio Bizantino": false,
          "El Imperio Otomano": false,
          "El Imperio Persa": false,
        },
        explanation: "explicacion",
      },
      {
        "¿Qué evento histórico se conmemora el 4 de julio en Estados Unidos?": {
          "La Independencia de Estados Unidos": true,
          "La Guerra de Secesión": false,
          "La llegada de los primeros colonos a América": false,
          "La firma del Tratado de Versalles": false,
        },
        explanation: "explicacion",
      },
    ],
    [
      {
        "¿Cuál fue el propósito principal del Concilio de Trento (1545-1563)?":
          {
            "Reformar la Iglesia Católica y responder a la Reforma Protestante": true,
            "Expandir el Imperio Otomano": false,
            "Establecer la paz entre los estados europeos": false,
            "Reunir a los líderes de la Reforma Protestante": false,
          },
        explanation: "explicacion",
      },
      {
        "¿Qué tratado puso fin a la Guerra de los Treinta Años en 1648?": {
          "Tratado de Westfalia": true,
          "Tratado de Utrecht": false,
          "Tratado de Versalles": false,
          "Tratado de Paz de Oliva": false,
        },
        explanation: "explicacion",
      },
    ],
  ],
  biologia: {
    0: [{}, {}],
    1: [{}, {}],
    2: [{}, {}],
  },
};

function getCategory(category, categories) {
  let entriesCategoreis = Object.entries(categories);
  return entriesCategoreis.find(function (entrieCategory) {
    return entrieCategory[0] == category;
  });
}

function getDificulty(dificulty, questions) {
  return questions[dificulty];
}

function orderQuestions(questions) {
  let random = 0;
  let order = [];
  while (order.length < questions.length) {
    random = Math.floor(Math.random() * questions.length);
    if (!order.includes(random)) {
      order.push(random);
    }
  }
  return order;
}

function getQuestion(order, questions) {
  return questions[order[0]];
}

function getAnswer(answers) {
  let answersEntries = Object.entries(answers);
  return answersEntries.find(function () {
    return answersEntries[1];
  });
}

let category = getCategory("history", globalCategories);
let questions = getDificulty(1, category[1]);
let initialOrder = orderQuestions(questions);
let order = initialOrder.map(function (o) {
  return o;
});
let h2 = document.querySelector("h2");
let spans = document.querySelectorAll("span");
let userSelection = [];
let correct = 0;

function setQuestion() {
  progress.style.width =
    parseInt(100 - (order.length * 100) / questions.length) + "%";
  let question = getQuestion(order, questions);
  if (question) {
    currentExplanation = Object.values(question)[1];
    h2.textContent = Object.keys(question)[0];
    setAnswers(Object.values(question)[0]);
    order.shift();
  } else {
    h2.style.display = "none";
    skipButton.style.display = "none";
    answers.forEach(function (answer) {
      answer.style.display = "none";
    });
  }
}

function setAnswers(question) {
  orderAnswer = orderAnswers(Object.keys(question));
  answers.forEach(function (answer, index) {
    answer.style.backgroundColor = "#BFBFBF";
    answer.textContent = Object.keys(question)[orderAnswer[index]];
    answer.addEventListener("click", function () {
      if (!userSelection.includes(getAnswer(question)[0])) {
        skipButton.textContent = "Next question";
        userSelection.push(h2.textContent);
        userSelection.push(answer.textContent);
        userSelection.push(getAnswer(question)[0]);
        setQuestionTransition(getAnswer(question)[0], answer.textContent);
        if (answer.textContent == getAnswer(question)[0]) {
          correct++;
        }
      }
    });
  });
}

function setQuestionTransition(correctAnswer, userAnswer) {
  answers.forEach(function (answer) {
    if (answer.textContent == userAnswer) {
      answer.style.backgroundColor = "red";
    }
    if (answer.textContent == correctAnswer) {
      answer.style.backgroundColor = "greenyellow";
    }
  });
}

function skipQuestion() {
  skips++;
  answers.forEach(function (answer) {
    answer.style.backgroundColor = "#BFBFBF";
  });
  setQuestion();
}

function orderAnswers(ans) {
  let order = [];
  while (order.length < answers.length) {
    random = Math.floor(Math.random() * ans.length);
    if (!order.includes(random)) {
      order.push(random);
    }
  }
  return order;
}

setQuestion();
