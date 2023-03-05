// wait for the dom to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() { // waits for dom to load before performin functions
    let buttons = document.getElementsByTagName("button"); // gets all button elements within html and returns them all as an array
for (let button of buttons){ // iterates through the array of the buttons 
    button.addEventListener("click", function() { //adding event listener for each button being clicked
        if (this.getAttribute("data-type") === SubmitEvent) { // creating if statemnet to check the value of each button
            alert("You Clicked Submit") // this will tell the user that submit is clicked 
        } else {
            let gameType = this.getAttribute("data-type");
            alert(`you clicked ${gameType}`); // this will tell the user what button is clicked
        }
    })
}
})


function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function subtractQuestion(){

}

function multiplyQuestion(){

}