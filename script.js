let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winMessage = document.querySelector("#msg-win");
let main = document.querySelector(".main");
let resetGameBtn = document.querySelector("#reset-btn");

let turnO = true; //playerX playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const reset = () => {
  turnO = true;
  box.innerText = "";
  enableBox();
  msgCon;
};

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "X";
      turnO = false;
      box.style.color = "#03045e";
    } else {
      box.innerText = "O";
      turnO = true;
      box.style.color = "#9e181e";
    }
    box.disabled = true;
    count = count + 1;
    if (count === 9) {
      draw();
    }
    console.log(count);
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos1Val != "" && pos1Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        disableBox();
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (winner) => {
  if (winner === "X") {
    winMessage.innerText = "Congratulations, Winner is Player 1 = 'X'";
  } else {
    winMessage.innerText = "Congratulations, Winner is Player 2 = 'O'";
  }
  msgContainer.classList.remove("hide");
  main.classList.add("hide");
};

const draw = (winner) => {
  winMessage.innerText = "Draw";
  msgContainer.classList.remove("hide");
  main.classList.add("hide");
};
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const newGame = () => {
  turnO = true;
  enableBox();
  count = 0;
  msgContainer.classList.add("hide");
  main.classList.remove("hide");
};

newGameBtn.addEventListener("click", newGame);
resetGameBtn.addEventListener("click", newGame);
