const restartBtn = document.querySelector(".restart");
const allBlank = document.querySelectorAll(".blank");
const message = document.querySelector(".message");

const gameBoard = {
  position: [...allBlank],
  arr: [],
  playerX: "X",
  playerO: "O",
};

// add key to array
allBlank.forEach((value) => {
  const key = `.${value.classList[0]}`;
  const key2 = document.querySelector(key);
  gameBoard.arr.push(key2);
});

const [q, w, e, a, s, d, z, x, c] = gameBoard.arr;

let turn = false;

function checkWin(player) {
  if (turn === null) {
    return;
  } else if (
    (q.textContent === player &&
      w.textContent === player &&
      e.textContent === player) ||
    (a.textContent === player &&
      s.textContent === player &&
      d.textContent === player) ||
    (z.textContent === player &&
      x.textContent === player &&
      c.textContent === player) ||
    (q.textContent === player &&
      a.textContent === player &&
      z.textContent === player) ||
    (w.textContent === player &&
      s.textContent === player &&
      x.textContent === player) ||
    (e.textContent === player &&
      d.textContent === player &&
      c.textContent === player) ||
    (q.textContent === player &&
      s.textContent === player &&
      c.textContent === player) ||
    (e.textContent === player &&
      s.textContent === player &&
      z.textContent === player)
  ) {
    message.textContent = `Player ${player} Win! `;
    turn = null;
  } else if (gameBoard.arr.every((value) => value.textContent !== "")) {
    message.textContent = `It is draw!`;
    turn = null;
  }
}

function restart() {
  allBlank.forEach((blank) => (blank.textContent = ""));
  message.textContent = `Player X's turn `;
  turn = false;
}

function displayControl(blank, i) {
  const content = gameBoard.position[i].textContent;
  const playerX = gameBoard.playerX;
  const playerO = gameBoard.playerO;

  if (content === "X" || content === "O") {
    return;
  } else if (turn === false) {
    blank.textContent = playerX;
    message.textContent = `Player O's turn `;
    turn = true;
  } else if (turn === true) {
    blank.textContent = playerO;
    message.textContent = `Player X's turn `;
    turn = false;
  }
}

allBlank.forEach((blank, i) =>
  blank.addEventListener("click", function (e) {
    e.preventDefault();
    displayControl(blank, i);
    checkWin(gameBoard.playerX);
    console.log(turn);
    if (turn !== null) {
      checkWin(gameBoard.playerO);
    }
  })
);

restartBtn.addEventListener("click", restart);
