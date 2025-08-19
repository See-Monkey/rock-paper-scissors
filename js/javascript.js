function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "rock";
    }
    else if (random == 1) {
        return "paper";
    }
    else if (random == 2) {
        return "scissors"
    }
    else {
        return "error"
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors.").toLowerCase();
}

console.log(getHumanChoice());