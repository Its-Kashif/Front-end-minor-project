let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let ng_btn = document.querySelector("#ng_btn");
let message = document.querySelector(".message");
let turnO = true;
let container1 = document.querySelectorAll("#container1");
console.log(boxes);
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
let displayWinner = (winner) => {
  message.classList.remove("hide");
  message.innerText = `Congrates! ${winner} won`;
  for (let box of boxes) {
    box.disabled = true;
  }
};
resetGame = () => {
  message.innerText = "Winner";
  turnO = true;
  message.classList.add("hide");
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const checkwinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        displayWinner(pos1);
      }
    }
  }
};
reset.addEventListener("click", resetGame);
ng_btn.addEventListener("click", resetGame);
