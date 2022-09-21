const gameBoard = (() => {
  const board = ["","","","","","","","",""];
  return {board};
})();

const displayController = (() => { 
  
  const displayBoard = (board) => {
    for(let ii=0; ii<9; ii++) {
      switch(ii) {
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
      };
    };
  };

  const addMarkers = (board) => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if(cell.textContent === "") {
          switch(cell.classList.item(1)){
            case "one":
              board[0] = currentPlayer.symbol;
              break;

            case "two":
              board[1] = currentPlayer.symbol;
              break;
            
            case "three":
              board[2] = currentPlayer.symbol;
              break;

            case "four":
              board[3] = currentPlayer.symbol;
              break;
            
            case "five":
              board[4] = currentPlayer.symbol;
              break;

            case "six":
              board[5] = currentPlayer.symbol;
              break;

            case "seven":
              board[6] = currentPlayer.symbol;
              break;

            case "eight":
              board[7] = currentPlayer.symbol;
              break;

            case "nine":
              board[8] = currentPlayer.symbol;
              break;
          }
        };
        displayBoard(board);
        if(currentPlayer === player1) {
          currentPlayer = player2;
        } else {
          currentPlayer = player1;
        }
      });
    });
  };

  return {displayBoard, addMarkers};
})();

const player = (name, symbol) => {
  return {name, symbol};
};

let player1 = player("Player 1", "X");
let player2 = player("Player 2", "O");
let currentPlayer = player1;
displayController.displayBoard(gameBoard.board);
displayController.addMarkers(gameBoard.board);