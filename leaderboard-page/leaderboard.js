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


window.onload = function() {
    updateLeaderboard();
}


