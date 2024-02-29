const boxes = document.querySelectorAll(".box");
const newBtn = document.getElementById("new-btn");
const resetBtn = document.querySelector(".reset-btn");
const msgContainer = document.querySelector(".msg-container");
const message = document.getElementById("msg");

let turn = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const resetGame = () => {
  turn = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("clicked");
    if (turn == true) {
      box.innerHTML = "X";
      turn = false;
      box.style.color = "green";
    } else {
      box.innerHTML = "0";
      turn = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && (pos2Val != "") & (pos3Val != "")) {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        // console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
