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

function summary(){
    let correctAnswersSummary = document.getElementById('correct-answers-summary');
    correctAnswers.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Question:</strong> ${item.question} <br> <strong>Correct Answer:</strong> ${item.correctAnswer} <br> <strong>Explanation:</strong> ${item.explanation}`;
        correctAnswersSummary.appendChild(listItem);
    });
}
