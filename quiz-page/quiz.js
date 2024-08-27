body.classList.add(localStorage.getItem('preferences'))

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
      },
      {
        "¿En qué año comenzó la Revolución Francesa?": {
          1789: true,
          1776: false,
          1804: false,
          1812: false,
        },
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
      },
      {
        "¿Qué evento histórico se conmemora el 4 de julio en Estados Unidos?": {
          "La Independencia de Estados Unidos": true,
          "La Guerra de Secesión": false,
          "La llegada de los primeros colonos a América": false,
          "La firma del Tratado de Versalles": false,
        },
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
      },
      {
        "¿Qué tratado puso fin a la Guerra de los Treinta Años en 1648?": {
          "Tratado de Westfalia": true,
          "Tratado de Utrecht": false,
          "Tratado de Versalles": false,
          "Tratado de Paz de Oliva": false,
        },
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

let category = getCategory("history", globalCategories);
console.log(category);
let questions = getDificulty(1, category[1]);
console.log(questions);
let order = orderQuestions(questions);
console.log(order);
let question;
while (order.length > 0) {
  question = getQuestion(order, questions);
  console.log(question);
  order.shift();
  confirm(Object.keys(question));
}
