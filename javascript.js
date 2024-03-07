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


