

// global variables -  makes an array/list of buttons within currentChoices class
var correctChoices = document.getElementsByClassName("correctChoice")
var score = 0

// for-loop that cycles through the document and ADDS an event listener for each button in 'correctChoice' array 
function createButtonEvents() {
    for (let i = 0; i < correctChoices.length ;  i++) {
        console.log(correctChoices[i])
        correctChoices[i].addEventListener ("click", changeScore)
    }
}
// an extension of above above for-loop that adds 10 points to user's score when 'correctChoice' buttons are clicked. 
function changeScore () {
    score += 10
    console.log(score) 
    document.getElementById('score').innerHTML = score
}

// create button event listeners on page load
createButtonEvents();








