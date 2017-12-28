
// global variables -  makes an array/list of buttons within currentChoices class
var correctChoices = document.getElementsByClassName("correctChoice")
var wrongChoices = document.getElementsByClassName("wrongChoice")

var score = 0

// for-loops that cycle through the document and ADD an event listener for each button in 'correctChoice' and 'wrongChoice' arrays 
function createButtonEvents() {
    for (let i = 0; i < correctChoices.length ;  i++) {
        console.log(correctChoices[i])
        correctChoices[i].addEventListener ("click", clickAndAdd)
    }
    for (let i = 0; i < wrongChoices.length ; i++) {
                console.log(wrongChoices [i])
                wrongChoices[i].addEventListener ("click", clickAndSubtract)
            }
        }

// adds 10 points to user's score when 'correctChoice' buttons are clicked. 
// this function also disables the correct choice once clicked
function clickAndAdd () {
    this.setAttribute('disabled', true)
    this.style.backgroundColor = 'green'
    score += 10
    console.log(score) 
    document.getElementById('score').innerHTML = score      
}


function clickAndSubtract () {
    this.style.backgroundColor = "red"
}


// creates button event listeners on page load
createButtonEvents();















