//This function is used to get the computers play in the game
function getComputerChoice(){
    //First generate a random number between 1 and 2, 2 inclusive.
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    // The maximum is exclusive and the minimum is inclusive
    let playNumber = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    //Variable to hold computer move
    let computerPlay;

    //Use number returned to variable playNumber in switch statement to give a value to the computerPlay variable
    switch(playNumber){
        case 0:
            computerPlay = "Rock";
            break;
        case 1:
            computerPlay = "Paper";
            break;
        case 2:
            computerPlay = "Scissors";
            break;
        default:
            computerPlay = "I will never be returned";
    }

    //return computer's play
    return computerPlay;
}

//This function is used to get the human's play in the game
function getHumanChoice(){
    //output prompt to get user choice
    let playNumber = parseInt(prompt("What would you like to play?\n1. Rock\n2.Paper\n3.Scissors\nInput a numeric value between 1-3 to select your option:"));

    //Validate input
    while(playNumber < 1 || playNumber > 3){
        playNumber = parseInt(prompt("ERROR!\nPlease select an option from the list below\n1. Rock\n2.Paper\n3.Scissors\nInput a numeric value between 1-3 to select your option:"));
    }
    //Variable to hold human move
    let humanPlay;

    //Use number returned to variable playNumber in switch statement to give a value to the humanPlay variable
    switch(playNumber-1){
        case 0:
            humanPlay = "Rock";
            break;
        case 1:
            humanPlay = "Paper";
            break;
        case 2:
            humanPlay = "Scissors";
            break;
        default:
            humanPlay = "I will never be returned";
    }1

    //return human's play
    return humanPlay;
}



let playGame = () => {
    //Declare variables to keep track of scores
    let humanScore = 0;
    let computerScore = 0;

    let numberOfRounds = 0;

    //This function allows the user to play a single round of the game
    let playRound = (humanChoice, computerChoice) => {
        if(humanChoice === computerChoice){
            console.log("Draw")
        }else if(humanChoice === "Rock" && computerChoice === "Paper"){
            console.log("You lose!Paper beats Rock.")
            computerScore++;
        }else if(humanChoice === "Scissors" && computerChoice === "Rock"){
            console.log("You lose!Rock beats Scissors.")
            computerScore++;
        }else if(humanChoice === "Paper" && computerChoice === "Scissors"){
            console.log("You lose!Scissors beats Paper.")
            computerScore++;
        }else if(humanChoice === "Paper" && computerChoice === "Rock"){
            console.log("You win!Paper beats Rock.")
            humanScore++;
        }else if(humanChoice === "Rock" && computerChoice === "Scissors"){
            console.log("You win!Rock beats Scissors.")
            humanScore++;
        }else if(humanChoice === "Scissors" && computerChoice === "Paper"){
            console.log("You win!Scissors beats Paper.")
            humanScore++;
        }
    }

    console.log(`Scores\nHuman:${humanScore}\t\tComputer:${computerScore}`);

}

playGame()