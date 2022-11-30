function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lost!');
        return computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Won!');
        return playerScore++;
    } else {
        console.log('It is a tie');
    }
}

function gameOver() {
    if (computerScore === 5) {
        resultDiv.textContent = 'You Lost!';
    } else if (playerScore === 5) {
        resultDiv.textContent = 'You Won!';
    }
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultDiv = document.querySelector('#result');
    
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

let computerScore = 0;
let playerScore = 0;
game();