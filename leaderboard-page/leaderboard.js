let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
let name = localStorage.getItem('userName');
let score = localStorage.getItem('quizPoints');

console.log(name);


function updatePodium() {
    const podiumSpots = [
        { element: document.getElementById('first'), position: 0 },
        { element: document.getElementById('second'), position: 1 },
        { element: document.getElementById('third'), position: 2 }
    ];

    for (let spot of podiumSpots) {
        if (leaderboard[spot.position]) {
            spot.element.querySelector('.podium-name').textContent = leaderboard[spot.position].name;
            spot.element.querySelector('.podium-score').textContent = leaderboard[spot.position].score;
        } else {
            spot.element.querySelector('.podium-name').textContent = '';
            spot.element.querySelector('.podium-score').textContent = '';
        }
    }
}

function updateLeaderboard() {
    let leaderboardTable = document.querySelector("#leaderboard tbody");
    leaderboardTable.innerHTML = '';

    for (let i = 0; i < leaderboard.length && i < 10; i++) {
        let entry = leaderboard[i];
        
        order();
      
        let row = document.createElement('tr'); 
        
        let rankCell = document.createElement('td');
        rankCell.textContent = i + 1;
        row.appendChild(rankCell); 

        let nameCell = document.createElement('td');
        nameCell.textContent = name; 
        row.appendChild(nameCell); 

        let scoreCell = document.createElement('td');
        scoreCell.textContent = score; 
        row.appendChild(scoreCell); 

        leaderboardTable.appendChild(row);
    }
    updatePodium();
}

function order(){
    for (let i = 0; i < leaderboard.length; i++) {        
        for (let j = i + 1; j < leaderboard.length; j++) {
            if (leaderboard[j].score > leaderboard[i].score) {
                let temp = leaderboard[i];
                leaderboard[i] = leaderboard[j];
                leaderboard[j] = temp;
            }
        }
    }
}

function scoreUpdate(){
    
        if (isNaN(score)) {
            alert('No score available from the last game.');
            return;
        }
    
        leaderboard.push({ name: name, score: score });
    
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    
        updateLeaderboard();
        
        document.getElementById('scoreForm').reset();
}


window.onload = function() {
    order();
    updateLeaderboard();
    scoreUpdate();
}


