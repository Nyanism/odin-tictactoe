let gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  return { board };
})();

const displayController = (() => {
  const displayBoard = () => {
    let board = gameBoard.board;
    for (let ii = 0; ii < 9; ii++) {
      switch (ii) {
        case 0:
          document.querySelector(".one").textContent = board[ii];
          break;

        case 1:
          document.querySelector(".two").textContent = board[ii];
          break;

        case 2:
          document.querySelector(".three").textContent = board[ii];
          break;

        case 3:
          document.querySelector(".four").textContent = board[ii];
          break;

        case 4:
          document.querySelector(".five").textContent = board[ii];
          break;

        case 5:
          document.querySelector(".six").textContent = board[ii];
          break;

        case 6:
          document.querySelector(".seven").textContent = board[ii];
          break;

        case 7:
          document.querySelector(".eight").textContent = board[ii];
          break;

        case 8:
          document.querySelector(".nine").textContent = board[ii];
          break;
      }
    }

    if (checkWinTie()) {
      let cells = document.querySelectorAll(".cell");
      cells.forEach((cell) => {
        if(cell.textContent === ""){
          cell.textContent = " ";
        }
      })
      
    }
  };

  const checkWinTie = () => {
    let board = gameBoard.board;
    let result = document.querySelector(".result");
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
      result.textContent = `We have a winner! Congratualations ${currentPlayer.name}!`;
      return true;
    } else if (
      board[3] === board[4] &&
      board[4] === board[5] &&
      board[3] !== ""
    ) {
      result.textContent = `We have a winner! Congratualations ${currentPlayer.name}!`;
      return true;
    } else if (
      board[6] === board[7] &&
      board[7] === board[8] &&
      board[6] !== ""
    ) {
      result.textContent = `We have a winner! Congratualations ${currentPlayer.name}!`;
      return true;
    } else if (
      board[0] === board[3] &&
      board[3] === board[6] &&
      board[0] !== ""
    ) {
      result.textContent = `We have a winner! Congratualations ${currentPlayer.name}!`;
      return true;
    } else if (
      board[1] === board[4] &&
      board[4] === board[7] &&
      board[1] !== ""
    ) {
      result.textContent = `We have a winner! Congratualations ${currentPlayer.name}!`;
      return true;
    } else if (
      board[2] === board[5] &&
      board[5] === board[8] &&
      board[2] !== ""
    ) {
      result.textContent = `We have a winner! Congratualations ${currentPlayer.name}!`;
      return true;
    } else if (
      board[0] === board[4] &&
      board[4] === board[8] &&
      board[0] !== ""
    ) {
      result.textContent = `We have a winner! Congratualations ${currentPlayer.name}!`;
      return true;
    } else if (
      board[6] === board[4] &&
      board[4] === board[2] &&
      board[6] !== ""
    ) {
      result.textContent = `We have a winner! Congratualations ${currentPlayer.name}!`;
      return true;
    }

    if (!board.includes("")) {
      result.textContent = `It's a draw!`;
      return true;
    }
  };

  const addMarkers = () => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (cell.textContent === "") {
          switch (cell.classList.item(1)) {
            case "one":
              gameBoard.board[0] = currentPlayer.symbol;
              break;
    
            case "two":
              gameBoard.board[1] = currentPlayer.symbol;
              break;
    
            case "three":
              gameBoard.board[2] = currentPlayer.symbol;
              break;
    
            case "four":
              gameBoard.board[3] = currentPlayer.symbol;
              break;
    
            case "five":
              gameBoard.board[4] = currentPlayer.symbol;
              break;
    
            case "six":
              gameBoard.board[5] = currentPlayer.symbol;
              break;
    
            case "seven":
              gameBoard.board[6] = currentPlayer.symbol;
              break;
    
            case "eight":
              gameBoard.board[7] = currentPlayer.symbol;
              break;
    
            case "nine":
              gameBoard.board[8] = currentPlayer.symbol;
              break;
          };
        };
        displayBoard();
        if (currentPlayer === player1) {
          currentPlayer = player2;
        } else {
          currentPlayer = player1;
        };
      });
    });
  };


  return { displayBoard, addMarkers };
})();

const player = (name, symbol) => {
  return { name, symbol };
};

let player1;
let player2;
let currentPlayer;
let ready = false;
let startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  player1 = player(document.querySelector("#player-one").value, "X");
  player2 = player(document.querySelector("#player-two").value, "O");
  currentPlayer = player1;
  gameBoard.board = ["", "", "", "", "", "", "", "", ""];
  document.querySelector(".result").textContent = "";
  displayController.displayBoard();
});

displayController.addMarkers();