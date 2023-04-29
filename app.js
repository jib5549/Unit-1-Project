/*----- constants -----*/
const PLAYERS = {
    player1 : 'jim', // set player jim to 0
    player2 : 'dwight' // set player dwight to 0
};

/*----- state variables -----*/
let turn; //this will be player1 and player2
let board; //this will the board for the game tic tac toe
let winner; // this will set to null and eventually a winner, loser, or a tie will come out

/*----- cached elements  -----*/
const startBtn = document.querySelector(#startBtn); // 
const restartBtn = document.querySelector(#restartBtn); //
const musicBtn = document.querySelector(#musicBtn); //

/*----- event listeners -----*/

startBtn.addEventListener('click', init()) //
restartBtn.addEventListener('click', ()) // this 
musicBtn.addEventListener('click', ()) // this button will allow the player to have the music on or off, it needs a function


/*----- functions -----*/
init();

getWinner() { // 

}

checkWinner() { // 

}

function init() { // this resets the board with clean sheet
    turn = player1;
    board = [
    [0, 0, 0,], // col 0 represents the tic tac toe board in 2d 
    [0, 0, 0,], // col 1 represents the tic tac toe board in 2d 
    [0, 0, 0,], // col 2 represents the tic tac toe board in 2d 
//  r0 r1  r2
];
winner = null; // since it's the beginning there is no winner or loser
render(); 
}