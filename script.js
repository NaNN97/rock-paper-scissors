var playerScore = 0, computerScore = 0, roundNumber = 0

let computerSelection;
let playerSelection;


let buttons = document.querySelectorAll(".button");

function playRound(playerSelection, computerSelection) {
    // your code here!
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection){
        return "Draw!";
    } else {
        console.log("Try again!");
    }
}

function getComputerChoice () {
    var choice = ["rock", "paper", "scissors"]

    return choice[Math.floor(Math.random() * choice.length)];
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.firstChild.parentNode.textContent.toLowerCase();
        roundNumber++;
        console.log("Player: " + playerSelection)
        const computerSelection = getComputerChoice();
        console.log("Computer: " + computerSelection) 

        console.log(playRound(playerSelection, computerSelection));

        console.log("Round number: " + roundNumber);
        
        console.log("Your score is " + playerScore);
        console.log("Computer score is " + computerScore)
    });
});






