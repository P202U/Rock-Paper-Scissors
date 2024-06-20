const computerChoiceDisplay = document.querySelector('.computer-choice');
const computerScoreDisplay = document.querySelector('.computer-score');
const humanChoiceDisplay = document.querySelector('.human-choice');
const humanScoreDisplay = document.querySelector('.human-score');
const roundWinnerDisplay = document.querySelector('.round-winner');
const gameWinnerDisplay = document.querySelector('.game-winner');
const restartButton = document.querySelector('.restart');
const btns = document.querySelectorAll('.btn');

const rps = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)]
}

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const humanChoice = e.target.textContent;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateGameUI(humanChoice, computerChoice, result);
        roundWinnerDisplay.classList.remove('hidden');
    });
});

humanScoreDisplay.textContent = 0;
computerScoreDisplay.textContent = 0;

function playRound(humanChoice, computerChoice) {
    const difference = (rps.length + rps.indexOf(humanChoice) - rps.indexOf(computerChoice)) % rps.length
    switch (difference) {
        case 0:
            return "It's a draw!";
        case 2:
            computerScoreDisplay.textContent++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        default:
            humanScoreDisplay.textContent++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

function updateGameUI(humanChoice, computerChoice, result) {
    humanChoiceDisplay.textContent = humanChoice;
    computerChoiceDisplay.textContent = computerChoice;
    roundWinnerDisplay.textContent = result;

    if (humanScoreDisplay.textContent >= 5 || computerScoreDisplay.textContent >= 5) {
        gameWinnerDisplay.textContent = humanScoreDisplay.textContent > computerScoreDisplay.textContent ? `You won the game!` : `You lost the game`;
        document.querySelectorAll('.btn').forEach(btn => btn.disabled = true);
        restartButton.classList.remove('hidden');
        gameWinnerDisplay.classList.remove('hidden');
    }
}

restartButton.addEventListener('click', () => {
    humanScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';

    humanChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';
    gameWinnerDisplay.textContent = '';

    btns.forEach(btn => btn.disabled = false);

    restartButton.classList.add('hidden');
    gameWinnerDisplay.classList.add('hidden');
    roundWinnerDisplay.classList.add('hidden');
});