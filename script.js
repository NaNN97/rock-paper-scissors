var playerScore = 0, computerScore = 0, roundNumber = 0

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return "You Win! rock beats scissors";
    } else if (playerSelection === 'rock' && computerSelection ==='rock'){
        return "Draw!";
    
    } else if (playerSelection === 'rock' && computerSelection ==='paper'){
        computerScore++;
        return "You Lose! paper beats rock";
    } else if (playerSelection === 'scissors' && computerSelection ==='paper'){
        playerScore++;
        return "You Win! scissors beats paper";
    } else if (playerSelection === 'scissors' && computerSelection ==='rock'){
        computerScore++;
        return "You Lose! rock beats scissors";
    } else if (playerSelection === 'scissors' && computerSelection ==='scissors'){
        return "Draw!";
    
    } else if (playerSelection === 'paper' && computerSelection ==='paper'){
        return "Draw!";
    
    } else if (playerSelection === 'paper' && computerSelection ==='rock'){
        playerScore++;
        return "You Win! paper beats rock";
    } else if (playerSelection === 'paper' && computerSelection ==='scissors'){
        computerScore++;
        return "You Lose! scissors beats paper";
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