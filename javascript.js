const buttons = document.querySelectorAll("button");


let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

buttons.forEach((button) => {
    
    button.addEventListener("click", () => {
        const result = playRound(button.id);
        updateScores();
    })
})


function playRound(playerChoice) {
    const computerChoice = getComputerChoice();


    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "Human wins!";
    } else {
        return "computer wins :(.";
    }
}