function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt(`Play your choice`);

    humanChoice.toLowerCase(); // Changing to lower case

    if (humanChoice === `rock`) {
        return 0;
    } else if (humanChoice === `paper`) {
        return 1;
    } return 2;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (((humanChoice - computerChoice) % 3 + 3) % 3 === 1) {
        console.log(`You won!`);
        humanScore++;
    } else if (((humanChoice - computerChoice) % 3 + 3) % 3 === 2) {
        console.log(`You Lost!`);
        computerScore++;
    } else {
        console.log(`It's a tie!`);
    }
}

function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) console.log(`You won the game`);
    else if (humanScore < computerScore) console.log(`You lost the game`);
    else console.log(`It's a tie`);

    console.log(`Scores: You- ${humanScore}, Me- ${computerScore}`);
}

playGame(playRound);