const rps = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)]
}

function getHumanChoice() {
    const humanChoice = prompt(`Play your choice`);
    return humanChoice.toLowerCase(); // Changing to lower case
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const difference = (rps.length + rps.indexOf(humanChoice) - rps.indexOf(computerChoice)) % rps.length
    switch (difference) {
        case 0:
            return "It's a draw!";
        case 2:
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        default:
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }

    if (humanScore > computerScore) console.log(`You won the game`);
    else if (humanScore < computerScore) console.log(`You lost the game`);
    else console.log(`It's a tie`);

    console.log(`Scores: You- ${humanScore}, Me- ${computerScore}`);
}

playGame(playRound);