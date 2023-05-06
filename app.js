/*----- ----------------------------------------- constants ---------------------------------------------- */
const PLAYERS = {
  1: "X", // set player to 1
  "-1": "O", // set player to -1
  null: "", //empty string
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
let score = {
  // setting a new variable "score" to keep track of the scores for both players
  '1' : 0,
  '-1' : 0,
};
let board;

/*----- ----------------------------------------- cached elements  ------------------------------------*/
const messageEl = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const audio = document.getElementById("audio");
const gameBoard = document.getElementById("board");

/*----- ----------------------------------------- event listeners ------------------------------------*/

restartBtn.addEventListener("click", init);

/*----- ----------------------------------------- functions ---------------------------------------------- */
init();

function init() {
  // this resets the board with a clean sheet
  turn = 1;
  winner = null; // since it's the beginning there is no winner or loser
  board = [];
  createBoard();
  render();
}

function createBoard() {
  gameBoard.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = i;
    box.addEventListener("click", boxClicked);
    gameBoard.appendChild(box);
  }
}

function checkWinner() {
    console.log(board);
  for (let i = 0; i < winConditions.length; i++) {
    if (
      Math.abs(
        board[winConditions[i][0]] +
          board[winConditions[i][1]] +
          board[winConditions[i][2]] ===
          3
      )
    ) {
        console.log('winner');
      return board[winConditions[i][0]];
    }
  }
  if (board.includes(null)) return false;
  return "T";
}

// this function transfers the state of our application to the DOM
function render() {
  turnMessage();
  renderControls();
}

function turnMessage() {
  if (winner === "T") {
    messageEl.innerText = "It's a Tie!!";
  } else if (winner) {
    messageEl.innerText = `${PLAYERS[winner]}'s Wins!!`;
  } else {
    messageEl.innerText = `${PLAYERS[turn]}'s turn`;
  }
}

function boxClicked(event) {
  if (event.target.textContent !== "") {
    return; // prevent overwriting existing moves
  }
  event.target.textContent = currentPlayer;

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  messageEl.textContent = `${currentPlayer}'s turn`;
  checkWinner()
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
