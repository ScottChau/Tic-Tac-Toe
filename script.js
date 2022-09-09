const restartBtn = document.querySelector(".restart");
const allBlank = document.querySelectorAll(".blank");
const q = document.querySelector(".q");
const w = document.querySelector(".w");
const e = document.querySelector(".e");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const z = document.querySelector(".z");
const x = document.querySelector(".x");
const c = document.querySelector(".c");

const gameBoard = {
  position: [...allBlank],
  playerX: "X",
  playerO: "O",
};

let turn = false;

function checkWin(player) {
  if (turn === null) {
    return alert("Game is over, hit restart to start a new game");
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
      d.textContent === player) ||
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
    alert(`Player${player} Win! `);
    turn = null;
  }
}

function restart() {
  allBlank.forEach((blank) => (blank.textContent = ""));
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
    turn = true;
  } else if (turn === true) {
    blank.textContent = playerO;
    turn = false;
  }
}

allBlank.forEach((blank, i) =>
  blank.addEventListener("click", function (e) {
    e.preventDefault();
    displayControl(blank, i);
    checkWin(gameBoard.playerX);
    if (turn !== null) {
      checkWin(gameBoard.playerO);
    }
  })
);

restartBtn.addEventListener("click", restart);
