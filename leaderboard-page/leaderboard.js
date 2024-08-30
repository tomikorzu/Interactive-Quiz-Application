let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

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
        nameCell.textContent = entry.name; 
        row.appendChild(nameCell); 

        let scoreCell = document.createElement('td');
        scoreCell.textContent = entry.score; 
        row.appendChild(scoreCell); 

        leaderboardTable.appendChild(row);
    }
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
    let scoreForm = document.getElementById('scoreForm');

    scoreForm.addEventListener('submit', function(user) {
        user.preventDefault(); 
    
        let name = document.getElementById('username').value.trim();
        //let score = localStorage.getItem('quizPoints');
        
        score = 160000;
        
        if (isNaN(score)) {
            alert('No score available from the last game.');
            return;
        }
    
        leaderboard.push({ name: name, score: score });
    
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    
        updateLeaderboard();
        
        document.getElementById('scoreForm').reset();
    });
}


window.onload = function() {
    order();
    updateLeaderboard();
    scoreUpdate();
}


