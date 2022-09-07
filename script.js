const allBlank = document.querySelectorAll(".blank");

const gameBoard = {
  gameBoard: [...allBlank],
  playerX: true,
  playerO: false,
};

allBlank.forEach((blank, i) =>
  blank.addEventListener("click", function (e) {
    e.preventDefault();
    if (gameBoard.playerX === true) {
      blank.textContent = "X";
      gameBoard.playerX = false;
      gameBoard.playerO = true;
    } else {
      blank.textContent = "O";
      gameBoard.playerX = true;
      gameBoard.playerO = false;
    }
    console.log(gameBoard.gameBoard[i].textContent);
  })
);
