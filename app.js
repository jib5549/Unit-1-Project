/*----- ----------------------------------------- constants ---------------------------------------------- */
const PLAYERS = {
  '1': "X", // set player to 1
  '-1': "O", // set player to -1
  'null': "", //empty string
};

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----- ----------------------------------------- state variables ------------------------------------*/
let turn; //this will be player1 and player2
let winner; // this will set to null and eventually a winner, loser, or a tie will come out
let currentPlayer = "X";
let board;

/*----- ----------------------------------------- cached elements  ------------------------------------*/
const messageEl = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const audio = document.getElementById("audio");
const gameboardEl = document.getElementById("board");
const scoreBoardEl = document.getElementById("scoreboard")
const boxEl = [...document.querySelectorAll(".box")]


/*----- ----------------------------------------- event listeners ------------------------------------*/
restartBtn.addEventListener("click", init);
gameboardEl.addEventListener('click', boxClicked)

/*----- ----------------------------------------- functions ---------------------------------------------- */
init();

function init() {
  turn = 1;
  winner = null; 
  board = [null, null, null, null, null, null, null, null, null, ];
  render();
}

function checkWinner() {
  for (let i = 0; i < winConditions.length; i++) {
    if (Math.abs(board[winConditions[i][0]] +
                 board[winConditions[i][1]] +
                 board[winConditions[i][2]]) === 3) {
            return board[winConditions[i][0]]
        }
    }
    if(board.includes(null)) return false;
    return 'T'
}

// this function transfers the state of our application to the DOM
function render() {
    boxEl.forEach(function(box, position) {
        box.textContent = PLAYERS[board[position]]
    })
    if(!winner) {
        messageEl.textContent = `${PLAYERS[turn]}'s turn`
    } else if(winner === 'T') {
        messageEl.textContent = `Tie Game`
    } else {
        messageEl.textContent = `${PLAYERS[winner]} WINS!!!`
    }
};


function boxClicked(event) {
    const position = event.target.id
    if(winner || board[position] !== null) return
    board[position] = turn
    turn *= -1
    winner = checkWinner()
    render()
}

function renderControls() {
  if (!winner) {
    restartBtn.style.visibility = "hidden";
  } else {
    restartBtn.style.visibility = "visible";
  }
}

function playAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
