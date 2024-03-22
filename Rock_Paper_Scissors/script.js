let userScore = 0;
let compScore = 0;
let choices = document.getElementsByClassName("option");
let msg = document.querySelector(".game-message");
let userScoreCard = document.querySelector("#userS");
let compScoreCard = document.querySelector("#compS");
let info = document.querySelector("#info");

let diplayScore = (userWin) => {
  if (userWin === true) {
    userScore++;
    userScoreCard.innerText = userScore;
  } else {
    compScore++;
    compScoreCard.innerText = compScore;
  }
};

let condition2 = (compChoice) => {
  if (compChoice === "paper") {
    msg.innerHTML = "oops! You Lost";
    return true;
  } else {
    msg.innerHTML = "You win";
    return false;
  }
};
let condition3 = (compChoice) => {
  if (compChoice === "scissors") {
    msg.innerHTML = "oops! You Lost";
    return true;
  } else {
    msg.innerHTML = "You win";
    return false;
  }
};
let condition4 = (compChoice) => {
  if (compChoice === "paper") {
    msg.innerHTML = "You win";
    return true;
  } else {
    msg.innerHTML = "oops! You Lost";
    return false;
  }
};

let winner = (userChoice, compChoice) => {
  let userWin = false;
  if (userChoice === compChoice) {
    msg.innerHTML = "game was draw";
  } else {
    if (userChoice === "rock") {
      userWin = condition2(compChoice);
    } else if (userChoice === "paper") {
      userWin = condition3(compChoice);
    } else {
      userWin = condition4(compChoice);
    }
    diplayScore(userWin);
  }
};

let generateCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let ran = Math.floor(Math.random() * 3);
  return options[ran];
};

let playGame = (userChoice) => {
  let compChoice = generateCompChoice();
  console.log(userChoice + "  " + compChoice);

  winner(userChoice, compChoice);
  info.innerHTML = `You choosed: ${userChoice}    |     System choosed: ${compChoice}.`;
};

for (let choice of choices) {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
}
