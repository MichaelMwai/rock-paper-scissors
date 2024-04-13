let userScore = 0;
let computerScore = 0;

const userLabel_div = document.getElementById("user-label");
const compLabel_div = document.getElementById("comp-label");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const actionMessage_p = document.querySelector(".action-message");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + " " + computerChoice) {
    case "rock scissors":
    case "scissors paper":
    case "paper rock":
      actionMessage_p.innerText =
        "You chose " +
        userChoice +
        " and the computer chose " +
        computerChoice +
        "\n\nYOU WIN!!";

      userScore++;

      userScore_span.innerText = userScore;
      break;
    case "rock paper":
    case "paper scissors":
    case "scissors rock":
      actionMessage_p.innerText =
        "You chose " +
        userChoice +
        " and the computer chose " +
        computerChoice +
        "\n\nYOU LOST!!";

      computerScore++;

      computerScore_span.innerText = computerScore;
      break;
    case "paper paper":
    case "rock rock":
    case "scissors scissors":
      actionMessage_p.innerText =
        "You chose " +
        userChoice +
        " and the computer chose " +
        computerChoice +
        "\n\nYOU TIED!!";
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}

main();
