const gameBoard = (() => {
  const board = [["X","O","O"],["X","O","O"],["X","O","O"]];
  return {board};
})();

const displayController = (() => {
  
  const displayBoard = (board) => {
    for(let ii=0; ii<3; ii++) {
      let row = document.querySelector(".row-one");
      switch(ii) {
        case 1:
          row = document.querySelector(".row-two");
          break;  

        case 2:
          row = document.querySelector(".row-three");
          break;
      }

      for(let jj=0; jj<3; jj++){
        let cell = document.createElement("span");
        cell.textContent = board[ii][jj];
        row.appendChild(cell);
      }
    }
  };

  return {displayBoard};
})();

const player = (name) => {
  return {name};
};

displayController.displayBoard(gameBoard.board);