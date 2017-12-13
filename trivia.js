

// global variables 
var correctChoices = document.getElementsByClassName("correctChoice")
var score = 0

function createButtonEvents() {
    for (let i = 0; i < correctChoices.length ;  i++) {
        console.log(correctChoices[i])
        correctChoices[i].addEventListener ("click", changeScore)
    }
}

function changeScore () {
    score += 10
    console.log(score) 
    document.getElementById('score').innerHTML = score
}

// create button event listeners on page load
createButtonEvents();








