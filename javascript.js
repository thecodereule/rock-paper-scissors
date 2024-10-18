const buttons = document.querySelectorAll("button");
const playerSign = document.querySelector("#playerSign");
const computerSign = document.querySelector("#computerSign");
const computerScoreElement = document.querySelector("#computerScoreElement");
const playerScoreElement = document.querySelector("#playerScoreElement");
const roundResultDisplay = document.querySelector("#round-result-display");
const roundResultInfo = document.querySelector("#round-result-info");
const modal = document.getElementById("endgameModal");
const modalText = document.getElementById("endgameMsg");
const resetButton = document.getElementById("restartBtn");
const overlay = document.querySelector("#overlay");


let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
const gameRounds = 3;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

buttons.forEach((button) => {
    
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        const result = playRound(button.id, computerChoice);
        updateScoreElements();
        updateRoundResultDisplay(result);
        updateRoundResultInfo(result.split(' ')[0], button.id, computerChoice);
        roundCounter++;

        if (roundCounter === gameRounds) {
            console.log("Game over, displaying modal");
            declareWinner(playerScore, computerScore);
            modal.style.display = "block";
            overlay.style.display = "block";

        }
    })
})

function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`Congratulations! You win the best of ${roundCounter}.`);
        modalText.textContent = "You Won!";
    } else if (playerScore < computerScore) {
        console.log(`Computer wins the best of ${roundCounter}. Better luck next time.`);
        modalText.textContent = "Computer Won!";
    } else {
        console.log(`It's a tie after ${roundCounter} rounds.`);
        modalText.textContent = "Tie!";
    }
}

function updateRoundResultInfo(winner, playerWeapon, computerWeapon) {
    // should display message like: "{loserChoice} is beaten by {winnerChoice}"
    if (winner === "Computer") {
        roundResultInfo.textContent = `${computerWeapon} beats ${playerWeapon}`;
    } else if (winner === "Human") {
        roundResultInfo.textContent = `${playerWeapon} beats ${computerWeapon}`;
    } else {
        roundResultInfo.textContent = `${computerWeapon} ties ${playerWeapon} - there is no winner`;
    }
}


function updateRoundResultDisplay(result) {
    roundResultDisplay.textContent = `${result}`;
}

function updateScoreElements(result) {
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    playerScoreElement.textContent = `Player: ${playerScore}`;
}

function playRound(playerChoice, computerChoice) {
    playerSign.textContent = getSign(playerChoice);
    computerSign.textContent = getSign(computerChoice);

    if (playerChoice === computerChoice) {
        return "Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore++;
        return "Human wins!";
    } else {
        computerScore++;
        return "Computer wins :(";
    }
}

function getSign(choice) {
    switch (choice) {
        case "rock":
            return "✊";
        case "paper":
            return "✋";
        case "scissors":
            return "✌️";
    }
}