let score = {
    wins: 0,
    losses: 0,
    ties: 0
}



const buttons = document.createElement("div");
buttons.classList.add("buttons");

const resultDisplaying = document.createElement("div");
resultDisplaying.classList.add("resultDisplaying");

const scoreDisplaying = document.createElement("div");
scoreDisplaying.classList.add("scoreDisplaying");


const btn1 = document.createElement("button");
btn1.classList.add("btn1");
btn1.innerText = "Rock";
const btn2 = document.createElement("button");
btn2.classList.add("btn2");
btn2.innerText = "Paper";
const btn3 = document.createElement("button");
btn3.classList.add("btn3");
btn3.innerText = "Scissors";


document.body.appendChild(buttons);
buttons.appendChild(btn1);
buttons.appendChild(btn2);
buttons.appendChild(btn3);
document.body.appendChild(resultDisplaying);
document.body.appendChild(scoreDisplaying);
resultText = document.querySelector(".resultDisplaying");


buttons.addEventListener("click", (event) => {
    if (event.target.className === "btn1") {
            playRound("rock");
    } else if (event.target.className === "btn2") {               
            playRound("paper");
    } else {
            playRound("scissors");
    }
        
    });

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = "";
    
    if (playerSelection === computerSelection) {
        result = `It's a tie.`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
        result = `It's your win!`;
    } else {
        result = `It's your loss!`;
    }

    if (result === "It's a tie.") {
        score.ties++;
    } else if (result === "It's your win!") {
        score.wins++;
    } else {
        score.losses++;
    }

    updateScore();

    resultText.textContent = `You chose ${playerSelection}. Computer picked ${computerSelection}. ${result}`;

}

function updateScore() {
    document.querySelector(".scoreDisplaying").textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    if (score.wins === 5) {
        document.querySelector(".scoreDisplaying").textContent = `You won 5 rounds. You are the winner!`;
    } else if (score.losses === 5) {
        document.querySelector(".scoreDisplaying").textContent = "You lost 5 rounds. The Computer is the winner!";
    }
}




function getComputerChoice() {
    const randomNumber =  Math.random();
    let computerMove = "";
     
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = "rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }

    return computerMove;
}

