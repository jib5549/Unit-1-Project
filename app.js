/*----- ----------------------------------------- constants ---------------------------------------------- */
const PLAYERS = {
  '1' : "X", // set player to 1
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
let xScore = 0;
let oScore = 0;
let gameCount = 0;

/*----- ----------------------------------------- cached elements  ------------------------------------*/
const messageEl = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");
const restartBtn = document.getElementById("freshGameBtn")
const audio = document.getElementById("audio");
const gameboardEl = document.getElementById("board");
const scoreBoardEl = document.getElementById("scoreboard");
const boxEl = [...document.querySelectorAll(".box")];

/*----- ----------------------------------------- event listeners ------------------------------------*/
clearBtn.addEventListener("click", init);
gameboardEl.addEventListener("click", boxClicked);
restartBtn.addEventListener("click", restartGame)

/*----- ----------------------------------------- functions ---------------------------------------------- */
init();

function init() {
  turn = 1;
  winner = null;
  board = [null, null, null, null, null, null, null, null, null];
  render();
}

function restartGame() {
  turn = 1;
  winner = null;
  board = [null, null, null, null, null, null, null, null, null];
  gameCount = 0;
  xScore = 0;
  oScore = 0;
  render();
}

function checkWinner() {
  for (let i = 0; i < winConditions.length; i++) {
    if (
      Math.abs(
        board[winConditions[i][0]] +
          board[winConditions[i][1]] +
          board[winConditions[i][2]]
      ) === 3
    ) {
      return board[winConditions[i][0]];
    }
  }
  if (board.includes(null)) return false;
  return "T";
}

// this function transfers the state of our application to the DOM
function render() {
  boxEl.forEach(function (box, position) {
    box.textContent = PLAYERS[board[position]];
  });
  if (!winner) {
    messageEl.textContent = `${PLAYERS[turn]}'s turn`;
  } else if (winner === "T") {
    messageEl.textContent = `Tie Game`;
  } else {
    messageEl.textContent = `${PLAYERS[winner]} WINS!!!`;
    
  }
  console.log(winner);
  if (PLAYERS[winner] === "X") {
    xScore += 1;
    document.getElementById("x-score").textContent = `Player X: ${xScore}`;
    if (xScore == 3) {
      alert('PLAYER X has won the game!!!')
    }
  } else if (PLAYERS[winner] === "O") {
    oScore += 1;
    document.getElementById("o-score").textContent = `Player O: ${oScore}`;
    if (oScore == 3) {
      alert('PLAYER O has won the game!!!')
    }
  }
  gameCount += 1;
  updateScoreBoard();
}

function updateScoreBoard() {
  document.getElementById("x-score").textContent = `Player X: ${xScore}`;
  document.getElementById("o-score").textContent = `Player O: ${oScore}`;
}

function boxClicked(event) {
  const position = event.target.id;
  if (winner || board[position] !== null) return;
  board[position] = turn;
  turn *= -1;
  winner = checkWinner();
  render();
}

function playAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}