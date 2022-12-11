function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        currentRoundResultDiv.textContent = 'You Lost! Paper beats rock';
        return computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors' ) {
        currentRoundResultDiv.textContent = 'You Lost! Scissors beats paper';
        return computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        currentRoundResultDiv.textContent = 'You Lost! Paper beats rock';
        return computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        currentRoundResultDiv.textContent = 'You Won! rock beats Scissors';
        return playerScore++;
    } else if(playerSelection === 'paper' && computerSelection === 'rock' ) {
        currentRoundResultDiv.textContent = 'You Won! Paper beats rock';
        return playerScore++;  
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        currentRoundResultDiv.textContent = 'You Won! Scissors beats paper';
        return playerScore++;
    } else {
        currentRoundResultDiv.textContent = 'It is a tie';
    }
}

function gameOver() {
    if (computerScore === 5) {
        resultDiv.textContent = 'Game over, You Lost!';
    } else if (playerScore === 5) {
        resultDiv.textContent = 'Game over, You Won!';
    }
}

function changeScore() {
    score.textContent = `Computer: ${computerScore} \n player: ${playerScore}`;
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultDiv = document.querySelector('#result');
const currentRoundResultDiv = document.querySelector('#current-round-result');
const score = document.querySelector('.score');
    
rockBtn.addEventListener('click', () => {
    playRound('rock');
    changeScore();
    gameOver();
});
paperBtn.addEventListener('click', () => {
    playRound('paper');
    changeScore();
    gameOver();
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
    changeScore();
    gameOver();
});

let computerScore = 0;
let playerScore = 0;