console.log("Hi, Mom!");
let humanScore = 0;
let computerScore = 0;

const paraHumanScore = document.querySelector(".humanScore");
const paraComputerScore = document.querySelector(".computerScore");
const activeMsg = document.querySelector(".activeMsg");
const btnRock = document.querySelector("button#rock");
const btnPaper = document.querySelector("button#paper");
const btnScissors = document.querySelector("button#scissors");
const btnReset = document.querySelector("button#reset");
const button = document.querySelector("button");

function initialize() {
    //scores
    humanScore = 0;
    computerScore = 0;
    paraHumanScore.textContent = humanScore;
    paraComputerScore.textContent = computerScore;

    //active message
    activeMsg.textContent = "Let's play rock, paper, scissors. ";
    activeMsg.textContent += "First to win 3 rounds wins the game.";

    //buttons
    btnRock.style.display = "inline";
    btnPaper.style.display = "inline";
    btnScissors.style.display = "inline";
    btnReset.style.display = "none";
}

function gameOver(winner) {
    if (winner === true) {
        activeMsg.textContent = "You won! Good game!";
    } else {
        activeMsg.textContent = "You lost... Better luck next time."
    }
    btnRock.style.display = "none";
    btnPaper.style.display = "none";
    btnScissors.style.display = "none";
    btnReset.style.display = "inline";
}

function getComputerChoice() {
    console.log("");
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

initialize();
gameOver(true);

