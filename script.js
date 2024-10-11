function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let playerChoice = prompt("Choose a weapon: ROCK, PAPER, SCISSORS").toLowerCase();

    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Invalid choice. Please choose either 'rock', 'paper', or 'scissors'").toLowerCase();
    }

    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}.`);

    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return "Human wins!";
    } else {
        return "computer wins :(.";
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const totalRounds = 5;

    for (let round = 1; round <= totalRounds; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`Round ${round}`);
        const result = (playRound(humanChoice, computerChoice));
        

        if (result === "Human wins!") {
            humanScore++;
        } else if (result === "computer wins :(.") {
            computerScore++;
        }

        console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You win the best of ${totalRounds}.`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins the best of ${totalRounds}. Better luck next time.`);
    } else {
        console.log(`It's a tie after ${totalRounds} rounds.`);
    }

}

playGame();