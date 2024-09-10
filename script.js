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

