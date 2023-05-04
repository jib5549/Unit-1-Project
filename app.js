/*----- ----------------------------------------- constants ---------------------------------------------- */
const PLAYERS = {
    '1' : 'X', // set player to 1
    '-1' : 'O' // set player to -1
};
// const winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]



/*----- ----------------------------------------- state variables ------------------------------------*/
let turn; //this will be player1 and player2
let board; //this will the board for the game tic tac toe
let winner; // this will set to null and eventually a winner, loser, or a tie will come out



/*----- ----------------------------------------- cached elements  ------------------------------------*/
const messageEl = document.querySelector('h1');
const restartBtn = document.getElementById('restartBtn')
const boxes = [...document.querySelectorAll('.box')]
const audio = document.getElementById('audio')

/*----- ----------------------------------------- event listeners ------------------------------------*/

restartBtn.addEventListener('click', init)
console.log(boxes);
boxes.forEach((box) => {
    box.addEventListener('click', () => console.log('click')) 
}) 




/*----- ----------------------------------------- functions ---------------------------------------------- */
init();

function init() { // this resets the board with a clean sheet
    turn = 1;
    board = [
    [0, 0, 0,], // col 0 represents the tic tac toe board in 2d 
    [0, 0, 0,], // col 1 represents the tic tac toe board in 2d 
    [0, 0, 0,], // col 2 represents the tic tac toe board in 2d 
//  r0 r1  r2
];
winner = null; // since it's the beginning there is no winner or loser
render(); 
}

// this function transfers the state of our application to the DOM
function render () {
    renderBoard();
    renderMessage();
    renderControls();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(rowVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`
            const cellEl = document.getElementById(cellId)
            console.log(cellEl);
        })
    })
}

function renderMessage() {
    if(winner === 'T') {
        messageEl.innerText = "It's a Tie!!"
    } else if(winner) {
        messageEl.innerText = `${PLAYERS[winner]}'s Wins!!`
    } else {
        messageEl.innerText = `${PLAYERS[turn]}'s turn`
    }
}

function renderControls() {
    if(!winner) {
        restartBtn.style.visibility = 'hidden'
    } else  {
        restartBtn.style.visibility = 'visible'
    }
}

function getWinner() {

}

function playAudio() {
    if(audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}