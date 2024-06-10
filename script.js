function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return `ROCK!`;
    } else if (randomNumber === 1) {
        return `PAPER!`;
    } return `Scissors`;
}

function getHumanChoice() {
    const humanChoice = prompt(`Play your choice`);

    return humanChoice.toLowerCase();
}