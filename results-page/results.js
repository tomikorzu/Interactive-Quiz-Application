let accumulatedPoints = localStorage.getItem('quizPoints') || 0;
let incorrectAnswers = localStorage.getItem('quizFailures') || 0;
let skippedAnswers = localStorage.getItem('quizSkips') || 0;
let correctAnswers = localStorage.getItem('correctAnswers') || 0;
let maxPoints = localStorage.getItem('maxPoints');
let correctAnswersSummary = JSON.parse(localStorage.getItem('correctAnswersSummary'));

window.onload = function(){
    perfomanceList();
    summary();
}

function perfomanceList(){
    document.getElementById('final-score').innerText = `${accumulatedPoints} / ${maxPoints}`;
    document.getElementById('correct-count').innerText = `${correctAnswers}`;
    document.getElementById('incorrect-count').innerText = `${incorrectAnswers}`;
    document.getElementById('skipped-count').innerText = `${skippedAnswers}`;
}

function summary(){
    let tableCorrectAnswers = document.getElementById('correct-answers-summary');
    tableCorrectAnswers.innerHTML = '';
    correctAnswersSummary.forEach(item => {
        let answer = Object.values(item)[0];
        let row = document.createElement('tr');
        
        let questionCell = document.createElement('td')
        questionCell.textContent = Object.keys(item)[0];
        row.appendChild(questionCell);

        let correctAnswerCell = document.createElement('td');
        correctAnswerCell.textContent = answer.pop();
        row.appendChild(correctAnswerCell);

        let explanationCell = document.createElement('td');
        explanationCell.textContent = item.explanation;
        row.appendChild(explanationCell);

        tableCorrectAnswers.append(row);
    });
}
