const human = document.querySelector(`.human`);
const computer = document.querySelector(`.computer`);
const choiceSection = document.querySelectorAll(`.choice`);
const humanScore = document.querySelector(`.human-score`);
const humanChoice = document.querySelector(`.human-choice`);
const computerScore = document.querySelector(`.computer-score`);
const computerChoice = document.querySelector(`.computer-choice`);
const roundWinner = document.querySelector(`.display-round-winner`);
const btns = document.querySelectorAll(`.btn:not(.btn-restart)`);
const buttonClass = document.querySelector(`.buttons`);
const restartButton = document.querySelector(`.btn-restart`);

const init = () => {
    humanScore.textContent = `0`;
    computerScore.textContent = `0`;
    humanChoice.textContent = `-`;
    computerChoice.textContent = `-`;

    roundWinner.style.top = ``;
    restartButton.style.top = ``;

    human.classList.remove(`hidden`);
    computer.classList.remove(`hidden`);
    buttonClass.classList.remove(`hidden`);
    roundWinner.classList.add(`hidden`);

    human.classList.remove(`game-winner`);
    computer.classList.remove(`game-winner`);

    human.classList.add(`round-winner`);
    computer.classList.remove(`round-winner`);

    choiceSection.forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
    });
}

init();

const rps = [`ROCK`, `PAPER`, `SCISSORS`];

function getComputerChoice() {
    const random = Math.trunc(Math.random() * rps.length)
    return rps[random];
}

btns.forEach(btn => {
    btn.addEventListener(`click`, () => {
        roundWinner.classList.remove(`hidden`);
        const displayHumanChoice = btn.querySelector(`.symbol-name`).textContent.toUpperCase();
        const displayComputerChoice = getComputerChoice();
        const displayRoundWinner = playRound(displayHumanChoice, displayComputerChoice);
        gameUI(displayHumanChoice, displayComputerChoice, displayRoundWinner);
    });
});

function playRound(humanChoice, computerChoice) {
    const difference = (rps.length + rps.indexOf(humanChoice) - rps.indexOf(computerChoice)) % rps.length
    switch (difference) {
        case 0:
            human.classList.remove(`round-winner`);
            computer.classList.remove(`round-winner`);
            return "It's a draw!";
        case 2:
            computerScore.textContent++;
            human.classList.remove(`round-winner`);
            computer.classList.add(`round-winner`);
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        default:
            humanScore.textContent++;
            human.classList.add(`round-winner`);
            computer.classList.remove(`round-winner`);
            return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

function gameUI(displayHumanChoice, displayComputerChoice, displayRoundWinner) {
    humanChoice.textContent = displayHumanChoice;
    computerChoice.textContent = displayComputerChoice;
    roundWinner.textContent = displayRoundWinner;

    if (humanScore.textContent >= 5 || computerScore.textContent >= 5) {
        if (humanScore.textContent > computerScore.textContent) {
            human.classList.add(`game-winner`);
            computer.classList.add(`hidden`);
            buttonClass.classList.add(`hidden`);
            roundWinner.textContent = `You won the game!`;
        } else {
            computer.classList.add(`game-winner`);
            human.classList.add(`hidden`);
            buttonClass.classList.add(`hidden`);
            roundWinner.textContent = `You lost the game`;
        }

        roundWinner.style.top = `30rem`;
        restartButton.style.top = `40rem`;

        choiceSection.forEach(section => {
            section.style.opacity = '0';
            section.style.visibility = 'hidden';
        });
    }
}

restartButton.addEventListener(`click`, init);