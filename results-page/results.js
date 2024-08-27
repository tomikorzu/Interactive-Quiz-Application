let totalQuestions = 10;
let correctAnswers = 7;
let incorrectAnswers = 2;
let skippedAnswers = 1;
let correctAnswerDetails = [
    { question: "Question 1", explanation: "Explanation 1" },
    { question: "Question 3", explanation: "Explanation 3" },
];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('final-score').innerText = `${correctAnswers} / ${totalQuestions}`;
    document.getElementById('correct-count').innerText = correctAnswers;
    document.getElementById('incorrect-count').innerText = incorrectAnswers;
    document.getElementById('skipped-count').innerText = skippedAnswers;

    let summaryContainer = document.getElementById('correct-answers-summary');
    correctAnswerDetails.forEach(detail => {
        let summaryItem = document.createElement('div');
        summaryItem.classList.add('summary-item');
        summaryItem.innerHTML = `<strong>${detail.question}</strong>: ${detail.explanation}`;
        summaryContainer.appendChild(summaryItem);
    });
});

function restartQuiz() {
    window.location.href = "quiz-page/index.html";
}

function goToHomePage() {
    window.location.href = "index.html";
}

function viewLeaderboard() {
    window.location.href = "leaderboard.html";
}
