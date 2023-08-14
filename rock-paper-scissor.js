let userChoiceDisplay = document.querySelector('#user-choice-display')
let optionDisplayFromComputer = document.querySelector('#option-display-from-computer')
let resultDisplay = document.querySelector('#result-display')
let options = document.querySelectorAll(".image-bottom")

let rockImage = document.querySelector('#rock')
let paperImage = document.querySelector('#paper')
let scissorImage = document.querySelector('#scissor')
let userChoice


rockImage.addEventListener("click", () => {
    userChoiceDisplay.innerHTML = '<img src="./image/rock.jpg" alt="rock">'
    userChoice = 'rock'
    optionFromComputer()
    
})

paperImage.addEventListener("click", () => {
    userChoiceDisplay.innerHTML = '<img src="./image/paper.png" alt="paper">'
    userChoice = 'paper'
    optionFromComputer()
    
})

scissorImage.addEventListener("click", () => {
    userChoiceDisplay.innerHTML = '<img src="./image/scissor.jpg" alt="scissor">'
    userChoice = 'scissor'
    optionFromComputer()
})

function optionFromComputer () {
    
    let oneToThree = Math.floor(Math.random() * options.length) + 1

    if (oneToThree === 1) {
        optionDisplayFromComputer.innerHTML = '<img src="./image/rock.jpg" alt="rock">'
        optionDisplayFromComputer.classList.add('rock')
    }
    else if (oneToThree === 2) {
        optionDisplayFromComputer.innerHTML = '<img src="./image/paper.png" alt="rock">'
        optionDisplayFromComputer.classList.add('paper')
    }
    else if (oneToThree === 3) {
        optionDisplayFromComputer.innerHTML = '<img src="./image/scissor.jpg" alt="rock">'
        optionDisplayFromComputer.classList.add('scissor')
    }
console.log(optionDisplayFromComputer.getAttribute('class'))
function resultOfTheGame () {
    
    let result
    if (userChoice === optionDisplayFromComputer.getAttribute('class')) {
        result = "It's a draw"
    }
    else if (userChoice === "rock" && optionDisplayFromComputer.getAttribute('class') === "paper") {
        result = 'You Lost'
    }
    else if (userChoice === "rock" && optionDisplayFromComputer.getAttribute('class') === "scissor") {
        result = 'You won'
    }
    else if (userChoice === "paper" && optionDisplayFromComputer.getAttribute('class') === "rock") {
        result = 'You Won'
    }
    if (userChoice === "paper" && optionDisplayFromComputer.getAttribute('class') === "scissor") {
        result = 'You Lost'
    }
    else if (userChoice === "scissor" && optionDisplayFromComputer.getAttribute('class') === "rock") {
        result = 'You Lost'
    }
    else if (userChoice === "scissor" && optionDisplayFromComputer.getAttribute('class') === "paper") {
        result = 'You won'
    }
    resultDisplay.innerHTML = result
}

resultOfTheGame()
optionDisplayFromComputer.removeAttribute('class')
console.log(optionDisplayFromComputer.removeAttribute('class'))
}


