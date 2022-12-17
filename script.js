function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];

}

function playRound() {

    const computerSelection = computerSign.textContent;
    const playerSelection = playerSign.textContent;
    if (playerSelection === '✊' && computerSelection === '✋') {
        scoreMessage.textContent = 'Rock is beaten by paper';
        scoreInfo.textContent = 'You Lost!';
        computerScore++;
    } else if (playerSelection === '✋' && computerSelection === '✌' ) {
        scoreMessage.textContent = 'Paper is beaten by scissors';
        scoreInfo.textContent = 'You Lost!';
        computerScore++;
    } else if (playerSelection === '✌' && computerSelection === '✊'){
        scoreMessage.textContent = 'Scissors is beaten by rock';
        scoreInfo.textContent = 'You Lost!';
        computerScore++;
    } else if (playerSelection === '✊' && computerSelection === '✌') {
        scoreMessage.textContent = 'rock beats Scissors';
        scoreInfo.textContent = 'You Won!';
        playerScore++;
    } else if(playerSelection === '✋' && computerSelection === '✊' ) {
        scoreMessage.textContent = 'Paper beats rock';
        scoreInfo.textContent = 'You Won!';
        playerScore++;
    } else if (playerSelection === '✌' && computerSelection === '✋') {
        scoreMessage.textContent = 'Scissors beats paper';
        scoreInfo.textContent = 'You Won!';
        playerScore++;
    } else if (playerSelection === '✌' && computerSelection === '✌') {
        scoreMessage.textContent = 'Scissors ties with scissors'
        scoreInfo.textContent = 'It is a tie!';
    } else if (playerSelection === '✋' && computerSelection === '✋') {
        scoreMessage.textContent = 'Paper ties with paper'
        scoreInfo.textContent = 'It is a tie!';
    } else if (playerSelection === '✊' && computerSelection === '✊') {
        scoreMessage.textContent = 'Rock ties with rock'
        scoreInfo.textContent = 'It is a tie!';
    } 

}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function changePlayerSign(sign) {
    playerSign.textContent = sign;
}

function changeComputerSign() {
    computerSign.textContent = getComputerSign();
}

function getComputerSign() {
    const computerSelection = getComputerChoice();
    if (computerSelection === 'rock') {
        return '✊';
    } else if (computerSelection === 'paper') {
        return '✋';
    } else {
        return '✌';
    }
}

function changeScore() {
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function showModal() {
    Modal.classList.add('active');
    overlay.classList.add('active');
    setFinalmsg();
}

function setFinalmsg() {
    const modalMessage = document.querySelector('#endGameMsg');
    if (playerScore > computerScore) {
        modalMessage.textContent = 'You won!';
    } else {
        modalMessage.textContent = 'You Lost!';
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Choose your weapon';
    scoreMessage.textContent = 'First to score 5 points wins the game';
    computerSign.textContent = '❔';
    playerSign.textContent = '❔';
    computerScorePara.textContent = 'Computer: 0';
    playerScorePara.textContent = 'Player: 0';
    Modal.classList.remove('active');
    overlay.classList.remove('active');
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const scoreInfo = document.querySelector('#scoreInfo');
const scoreMessage = document.querySelector('#scoreMessage');
const computerSign = document.querySelector("#computerSign");
const playerScorePara = document.querySelector('#playerScore');
const computerScorePara = document.querySelector('#computerScore');
const playerSign = document.querySelector("#playerSign");
const Modal = document.querySelector('#endGameModal');
const overlay = document.querySelector('#overlay');
const restartBtn = document.querySelector('#restartBtn');
let playerScore = 0;
let computerScore = 0;
    
rockBtn.addEventListener('click', () => {
    changePlayerSign('✊');
    changeComputerSign();
    playRound();
    changeScore();
    if (isGameOver()) {
        showModal();
    } 
});

paperBtn.addEventListener('click', () => {
    changePlayerSign('✋');
    changeComputerSign();
    playRound();
    changeScore();
    if (isGameOver()) {
        showModal();
    } 
});

scissorsBtn.addEventListener('click', () => {
    changePlayerSign('✌');
    changeComputerSign();
    playRound();
    changeScore();
    if (isGameOver()) {
        showModal();
    } 
});

restartBtn.addEventListener('click', () => restartGame());