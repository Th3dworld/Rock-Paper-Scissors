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
    }

    //return human's play
    return humanPlay;
}

console.log(getHumanChoice());