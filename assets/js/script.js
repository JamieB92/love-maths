// wait for the dom to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() { // waits for dom to load before performin functions
    let buttons = document.getElementsByTagName("button"); // gets all button elements within html and returns them all as an array
for (let button of buttons){ // iterates through the array of the buttons 
    button.addEventListener("click", function() { //adding event listener for each button being clicked
        if (this.getAttribute("data-type") === SubmitEvent) { // creating if statemnet to check the value of each button
            checkAnswer(); // checks the answer by calling the check answer function
        } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
        }
    })
}

    runGame("addition");
    

})

/** 
 * the main game "loop", called when the script is first loaded 
 * and after the users answer has been processed
*/
function runGame(gameType){ // passing gametype intop the function as an argument 

    // creates to random numbers bet 1 & 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") { // checking if the game type parameter is equal to addition & display the addition question
        displayAdditionQuestion(num1, num2)
    } else { // if not will give an error to say its the wrong game type
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`
    }
}

/**
 * Checks the against the first element in 
 * the returned calculateCorrectAnswer array
 */

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calcuatedAnswer[0]
}

/**
 * Gets the operands (the number) and the operator (plus,, minus etc)
 * directly from the dom, and returns the correct answer.
 */

function calculateCorrectAnswer(){
    // function grabs the given value of operand1 + operand2 and stores it as an array    
    let operand1 = parseInt(document.getElementById('operand1').innerHTML)
    let operand2 = parseInt(document.getElementById('operand2').innerHTML)
    let operator = document.getElementById("operator").innerHTML

    if (operator === "+") {
        return[operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(opperand1, opperand2){ 
    // pulls and displays the question to the user 
    document.getElementById('operand1').textContent = opperand1;
    document.getElementById('operand2').textContent = opperand2;
    document.getElementById('operator').textContent = "+";

}

function subtractQuestion(){

}

function multiplyQuestion(){

}