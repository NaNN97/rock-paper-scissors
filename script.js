var playerScore = 0, computerScore = 0, roundNumber = 0

let computerSelection;
let playerSelection;


let buttons = document.querySelectorAll(".button");

let roundNo = document.querySelector("#roundNo");
let playerLbl = document.querySelector("#playerLbl");
let computerLbl = document.querySelector("#computerLbl");
let winLbl = document.querySelector("#winLbl");
let scoreLbl = document.querySelector("#scoreLbl");

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
        playerSelection = button.textContent.toLowerCase();
        roundNumber++;
        const computerSelection = getComputerChoice();


        roundNo.innerHTML = "Round: " + roundNumber;
        playerLbl.innerHTML = "Player: " + playerSelection;
        computerLbl.innerHTML = "Computer: " + computerSelection;
        winLbl.innerHTML = playRound(playerSelection, computerSelection);
        scoreLbl.innerHTML = "Player: " + playerScore + " || Computer: " + computerScore;

        console.log("Round number: " + roundNumber);
        
        console.log("Your score is " + playerScore);
        console.log("Computer score is " + computerScore)
    });
});






