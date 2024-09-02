let accumulatedPoints = localStorage.getItem('quizPoints') || 0;
let totalQuestions = localStorage.getItem('totalQuestions') || 0;
let incorrectAnswers = localStorage.getItem('quizFailures') || 0;
let skippedAnswers = localStorage.getItem('quizSkips') || 0;
let correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];


window.onload = function(){
    perfomanceList();
    summary();
}

function perfomanceList(){
    document.getElementById('final-score').innerText = `${accumulatedPoints} / ${totalQuestions}`;
    document.getElementById('correct-count').innerText = `${accumulatedPoints}`;
    document.getElementById('incorrect-count').innerText = `${incorrectAnswers}`;
    document.getElementById('skipped-count').innerText = `${skippedAnswers}`;
}

correctAnswers = [
    {question: "Pregunta 1",
        correctAnswer: "Respuesta correcta",
        explanation: "Explicaciooooooooooooooooooo0000000000000000000000000n",
    },
    {question: "Pregunta 2",
        correctAnswer: "Respuesta correcta",
        explanation: "Explicaciooooooooooooooooooo0000000000000000000000000n",
    }
]

function summary(){
    let correctAnswersSummary = document.getElementById('correct-answers-summary');
    correctAnswersSummary.innerHTML = '';

    correctAnswers.forEach(item => {
        let row = document.createElement('tr');
        let questionCell = document.createElement('td');
        questionCell.textContent = item.question;
        row.appendChild(questionCell);

        let correctAnswerCell = document.createElement('td');
        correctAnswerCell.textContent = item.correctAnswer;
        row.appendChild(correctAnswerCell);

        let explanationCell = document.createElement('td');
        explanationCell.textContent = item.explanation;
        row.appendChild(explanationCell);

        correctAnswersSummary.append(row);
    });
}
