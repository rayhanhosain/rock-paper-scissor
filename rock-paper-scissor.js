let userChoiceDisplay = document.querySelector('#user-choice-display')
let optionDisplayFromComputer = document.querySelector('#option-display-from-computer')
let resultDisplay = document.querySelector('#result-display')
let options = document.querySelectorAll(".image-bottom")

let rockImage = document.querySelector('#rock')
let paperImage = document.querySelector('#paper')
let scissorImage = document.querySelector('#scissor')
let userChoice


rockImage.addEventListener("click", () => {
    userChoiceDisplay.innerHTML = '<img src="./image/rock-user.jpg" alt="rock">'
    userChoice = 'rock'
    optionFromComputer()
    
})

paperImage.addEventListener("click", () => {
    userChoiceDisplay.innerHTML = '<img src="./image/paper-user.jpg" alt="paper">'
    userChoice = 'paper'
    optionFromComputer()
    
})

scissorImage.addEventListener("click", () => {
    userChoiceDisplay.innerHTML = '<img src="./image/scissor-user.jpg" alt="scissor">'
    userChoice = 'scissor'
    optionFromComputer()
})

function optionFromComputer () {
    
    let oneToThree = Math.floor(Math.random() * options.length) + 1

    if (oneToThree === 1) {
        optionDisplayFromComputer.innerHTML = '<img src="./image/rock-computer.jpg" alt="rock">'
        optionDisplayFromComputer.classList.add('rock')
    }
    else if (oneToThree === 2) {
        optionDisplayFromComputer.innerHTML = '<img src="./image/paper-computer.jpg" alt="rock">'
        optionDisplayFromComputer.classList.add('paper')
    }
    else if (oneToThree === 3) {
        optionDisplayFromComputer.innerHTML = '<img src="./image/scissor-computer.jpg" alt="rock">'
        optionDisplayFromComputer.classList.add('scissor')
    }
console.log(optionDisplayFromComputer.getAttribute('class'))
function resultOfTheGame () {
    
    let result
    if (userChoice === optionDisplayFromComputer.getAttribute('class')) {
        result = "It's a Draw"
    }
    else if (userChoice === "rock" && optionDisplayFromComputer.getAttribute('class') === "paper") {
        
        result = 'You Lost'
        
    }
    else if (userChoice === "rock" && optionDisplayFromComputer.getAttribute('class') === "scissor") {
        result = 'You Won'
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
        result = 'You Won'
    }
    resultDisplay.innerHTML = result
    if (resultDisplay.innerHTML === "You Won") {
        resultDisplay.setAttribute("style", "color: green;")
        setTimeout(() => {
            alert(result)
        }, 500);
    }
    else if (resultDisplay.innerHTML === "You Lost") {
        resultDisplay.setAttribute("style", "color: red;")
        setTimeout(() => {
            alert(result)
        }, 500);
    }
    else if (resultDisplay.innerHTML === "It's a Draw"){ 
        resultDisplay.setAttribute("style", "color: white;")
        setTimeout(() => {
            alert(result)
        }, 500);
    }
}

resultOfTheGame()
optionDisplayFromComputer.removeAttribute('class')
console.log(optionDisplayFromComputer.removeAttribute('class'))
}


