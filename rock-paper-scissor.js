//option display section access by id

let userChoiceDisplay = document.querySelector("#user-choice-display");
let optionDisplayFromComputer = document.querySelector(
  "#option-display-from-computer"
);

//accessing container
let cntnr = document.querySelector("#container");

//result display section access by id
let resultDisplay = document.querySelector("#result-display");

//bottom images access by class
let options = document.querySelectorAll(".image-bottom");

//selecting bottom images with id
let rockImage = document.querySelector("#rock");
let paperImage = document.querySelector("#paper");
let scissorImage = document.querySelector("#scissor");

//declaring user choice
let userChoice;

//result text
const winText = "You have won!";
const loseText = "You have lost";
const drawText = "Drawn";

//accessing to add score
let scrU = document.querySelector("#scr-u");
let scrCom = document.querySelector("#scr-com");

let countComputerScore = 0;
let countUserScore = 0;

//gif
const gifa = document.createElement("img");
const gifb = document.createElement("img");
gifa.src = "./gif/w.gif";
gifb.src = "./gif/w.gif";
//images to display after choosing option

const userRockImg = document.createElement("img");
userRockImg.src = "./image/rock-user.jpg";
const userPaperImg = document.createElement("img");
userPaperImg.src = "./image/paper-user.jpg";
const userScissorImg = document.createElement("img");
userScissorImg.src = "./image/scissor-user.jpg";

const computerRockImg = document.createElement("img");
computerRockImg.src = "./image/rock-computer.jpg";
const computerPaperImg = document.createElement("img");
computerPaperImg.src = "./image/paper-computer.jpg";
const computerScissorImg = document.createElement("img");
computerScissorImg.src = "./image/scissor-computer.jpg";

//clicking on the bottom images
rockImage.addEventListener("click", () => {
  userChoiceDisplay.replaceChildren(gifa);
  optionDisplayFromComputer.replaceChildren(gifb);

  setTimeout(() => {
    userChoiceDisplay.replaceChildren();
    userChoiceDisplay.appendChild(userRockImg);
    userChoice = "rock";
    optionFromComputer();
  }, 500);
});

paperImage.addEventListener("click", () => {
  userChoiceDisplay.replaceChildren(gifa);
  optionDisplayFromComputer.replaceChildren(gifb);
  setTimeout(() => {
    userChoiceDisplay.replaceChildren();
    userChoiceDisplay.appendChild(userPaperImg);
    userChoice = "paper";
    optionFromComputer();
  }, 500);
});

scissorImage.addEventListener("click", () => {
  userChoiceDisplay.replaceChildren(gifa);
  optionDisplayFromComputer.replaceChildren(gifb);

  setTimeout(() => {
    userChoiceDisplay.replaceChildren();
    userChoiceDisplay.appendChild(userScissorImg);
    userChoice = "scissor";
    optionFromComputer();
  }, 500);
});

//optionFromComputer function
function optionFromComputer() {
  let oneToThree = Math.floor(Math.random() * options.length) + 1;
  optionDisplayFromComputer.replaceChildren();
  switch (oneToThree) {
    case 1:
      optionDisplayFromComputer.appendChild(computerRockImg);
      optionDisplayFromComputer.classList.add("rock");
      break;
    case 2:
      optionDisplayFromComputer.appendChild(computerPaperImg);
      optionDisplayFromComputer.classList.add("paper");
      break;
    case 3:
      optionDisplayFromComputer.appendChild(computerScissorImg);
      optionDisplayFromComputer.classList.add("scissor");
      break;
  }

  //display result
  function resultOfTheGame() {
    let result;
    if (userChoice === optionDisplayFromComputer.className) {
      result = drawText;
    } else if (
      userChoice === "rock" &&
      optionDisplayFromComputer.className === "paper"
    ) {
      result = loseText;
    } else if (
      userChoice === "rock" &&
      optionDisplayFromComputer.className === "scissor"
    ) {
      result = winText;
    } else if (
      userChoice === "paper" &&
      optionDisplayFromComputer.className === "rock"
    ) {
      result = winText;
    }
    if (
      userChoice === "paper" &&
      optionDisplayFromComputer.className === "scissor"
    ) {
      result = loseText;
    } else if (
      userChoice === "scissor" &&
      optionDisplayFromComputer.className === "rock"
    ) {
      result = loseText;
    } else if (
      userChoice === "scissor" &&
      optionDisplayFromComputer.className === "paper"
    ) {
      result = winText;
    }
    let resultToDisplay = document.createTextNode(result);
    resultDisplay.replaceChildren();
    resultDisplay.appendChild(resultToDisplay);

    function colorChange() {
      resultDisplay.className = "";
      cntnr.className = "";
      if (result === winText) {
        resultDisplay.classList.add("win");
        container.classList.add("containerColorChangeForWin");

        countUserScore = countUserScore + 1;
        scrU.innerText = countUserScore;
      } else if (result === loseText) {
        resultDisplay.classList.add("lose");
        container.classList.add("containerColorChangeForLose");

        countComputerScore = countComputerScore + 1;
        scrCom.innerText = countComputerScore;
        console.log(countComputerScore);
      } else {
        resultDisplay.classList.add("draw");
        container.classList.add("containerColorChangeForDraw");
      }
    }

    colorChange();
    setTimeout(() => {
      alert(result);
    }, 500);
  }

  resultOfTheGame();
  optionDisplayFromComputer.className = "";
}
