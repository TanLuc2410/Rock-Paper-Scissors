// Add a prompt asking for player's desired move. (make it case-insensitive)
// Add a function that let the computer choose a move
// Add a function that compares the moves
// Add a function that announces that result and keep the score.
// Create a loop that uses the previous functions to play the game 5 times and annouce the result.

const playerSelection = prompt("What's your move?").toLowerCase();
const computerSelection = getComputerChoice();


function getComputerChoice() {
    const computerMove =  Math.random();

    if (computerMove >= 0 || computerMove < 1/3) {
        return "rock";
    } else if (computerMove >= 1/3 || computerMove < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === "rock") {
        if(computerSelection === "rock") {
        console.log(`You chose ${playerSelection}, the computer picked ${computerSelection} as well. It's a tie.`);
        } else if (computerSelection === "paper") {
        console.log(`You chose rock, the computer picked paper. It's your loss.`);
        } else {
        console.log(`You chose rock, the computer picked scissors. It's your win.`);
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
        console.log(`You chose paper, the computer picked rock. It's your win.`);
        } else if (computerSelection === "paper") {
        console.log(`You chose paper, the computer picked paper as well. It's a tie.`);
        } else {
        console.log(`You chose paper, the computer picked scissors. It's your loss.`);
        }
    }
    if (playerSelection === "scissor" && playerSelection === "scissors") {
        if (computerSelection === "rock") {
        console.log(`You chose scissors, the computer picked rock. It's your loss`);
    } else if (computerSelection === "paper") {
        console.log(`You chose scissors, the computer picked paper. It's your win.`);
    } else {
        console.log(`You chose scissors, the computer picked scissors as well. It's a tie.`);
        }
    }
}
playRound(playerSelection, computerSelection);
