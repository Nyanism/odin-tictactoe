const gameBoard = (() => {
  const board = ["X","O","O","X","O","O","X","O","O"];
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
      }
    }
  };

  return {displayBoard};
})();

const player = (name, symbol) => {
  return {name, symbol};
};

let player1 = player("Player 1", "X");
let player2 = player("Player 2", "O");
displayController.displayBoard(gameBoard.board);