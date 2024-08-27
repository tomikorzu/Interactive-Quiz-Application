
window.onload = function(){
    let accumulatedPoints = localStorage.getItem('quizPoints');
    let totalQuestions = localStorage.getItem('totalQuestions');
    let incorrectAnswers = localStorage.getItem('quizFailures');
    let skippedAnswers = localStorage.getItem('quizSkips');
    let correctAnswers = localStorage.getItem('correctAnswers') || []; //averiguar JSON (correctAnsewers = object)

    document.getElementById('final-score').innerText = `${accumulatedPoints} / ${totalQuestions}`;
    document.getElementById('correct-count').innerText = `${accumulatedPoints}`;
    document.getElementById('incorrect-count').innerText = `${incorrectAnswers}`;
    document.getElementById('skipped-count').innerText = `${skippedAnswers}`;

    let correctAnswersSummary = document.getElementById('correct-answers-summary');
    correctAnswers.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Question:</strong> ${item.question} <br> <strong>Correct Answer:</strong> ${item.correctAnswer} <br> <strong>Explanation:</strong> ${item.explanation}`;
        correctAnswersSummary.appendChild(listItem);
    });
}

function restartQuiz() {
    window.location.href = "quiz-page/index.html";
}

function goToHomePage() {
    window.location.href = "index.html";
}

function viewLeaderboard() {
    window.location.href = "leaderboard.html";
}