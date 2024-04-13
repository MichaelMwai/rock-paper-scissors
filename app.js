const userScore = 0;
const computerScore = 0;

const userLabel_div = document.getElementById("user-label");
const compLabel_div = document.getElementById("comp-label");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log(
    "You chose " + userChoice + " and the computer chose " + computerChoice
  );
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
