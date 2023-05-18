var playerScore = 0, computerScore = 0, roundNumber = 0

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




for (let i = 0; i < 3; i++) {
    roundNumber++;
    const playerSelection = prompt("Select: rock, paper or scissors.");
    console.log("Player: " + playerSelection)
    const computerSelection = getComputerChoice();
    console.log("Computer: " + computerSelection) 

    console.log(playRound(playerSelection, computerSelection));


    console.log("Round number: " + roundNumber);
}



function getComputerChoice () {
    var choice = ["rock", "paper", "scissors"]

    return choice[Math.floor(Math.random() * choice.length)];
}

console.log("Your score was " + playerScore);
console.log("Computer score was " + computerScore)