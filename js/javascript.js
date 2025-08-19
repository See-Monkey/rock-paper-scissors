function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        console.log("The computer chooses rock.");
        return "rock";
    } else if (random == 1) {
        console.log("The computer chooses paper.");
        return "paper";
    } else if (random == 2) {
        console.log("The computer chooses scissors.");
        return "scissors"
    } else {
        return "error"
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors.").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return `You both chose ${humanChoice}, try again.`;
    } else if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock") {    
        computerScore += 1;
        return `You chose ${humanChoice}, you lose this round.`;
    } else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return `You chose ${humanChoice}, you win this round!`;
    } else {
        return "error";
    }
}

function playGame() {
    console.log("Let's play rock, paper, scissors against the computer.");
    console.log("First to win 3 rounds wins the game.");


}

let humanScore = 0;
let computerScore = 0;



console.log(playRound(getHumanChoice(), getComputerChoice()));