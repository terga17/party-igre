const cells = document.querySelectorAll(".cell");
const playersTurn = document.querySelector(".players-turn");
const whoseTurn = document.querySelector(".whose-turn");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = parseInt(cell.getAttribute("data-index"));

  if (board[cellIndex] !== "" || !gameActive) {
    return;
  }

  board[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    gameActive = false;
    whoseTurn.textContent = `${currentPlayer} Wins!`;
    return;
  }

  if (board.every((cell) => cell !== "")) {
    gameActive = false;
    whoseTurn.textContent = "Draw!";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  playersTurn.textContent = `Player ${currentPlayer === "X" ? 1 : 2}`;
  whoseTurn.textContent = "YOUR TURN";
}

function checkWin() {
  return winningConditions.some((condition) => {
    return condition.every((index) => {
      return board[index] === currentPlayer;
    });
  });
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
