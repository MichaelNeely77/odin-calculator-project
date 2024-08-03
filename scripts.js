const num1 = 0;
const num2 = 0;
const operator = '';
let numButton = document.querySelectorAll('#number-button');
let opBtn  = document.querySelectorAll('#op-btn');


const addFunction = function(num1, num2) {
    console.log("added");
    return num1 + num2;

}
// console.log(addFunction(3, 4));

const subFunction = function(num1, num2) {
    console.log("subtracted");
    return num1 - num2;

}
const multFunction = function(num1, num2) {
    console.log("multiplied");
    return num1 * num2;

}
const divFunction = (num1, num2) => {
    console.log("divided");
    return num1 / num2;
}

const clearFunction = () => {
    let display = document.getElementById('display');
    return display.innerHTML = '0';

}

const equalsFunction = () => {
    console.log("equals");
}

function operate(num1, num2, operator) {

    switch(operator) {
        case addFunction:
            return num1 + num2;
            break;
        case subFunction:
            return num1 - num2;
            break;
        case multFunction:
            return num1 * num2;
            break;
        case divFunction:
            return num1 / num2;
            break;
        case clearFunction:
            return display;
            break;
        default:
            return "Choose add, subtract, multiply, or divide as an operator";
    }
}

// console.log(numButton); // querySelectorAll returns an array
// numButton[0].addEventListener('click', () => {
//
// });
// Loop over buttons and find index number to go into the brackets DONE
// Get Numbers to display in screen DONE
// Get numbers to increment into screen
for(let i = 0; i < numButton.length; i++) {
    let digit = numButton[i].value;

    numButton[i].addEventListener('click', () => {
    // Evaluate this input as for the digits
    document.getElementById("display").innerHTML += digit;
    // Increments key input

console.log(digit);




    // Does to return as one integer but as each key stroke as a separate integer in a string in the console. Must allow the integers to increment
    });

}

// Get operations buttons to click different functions
for (let i = 0; i < opBtn.length; i++) {
    opBtn[i].addEventListener('click', () => {

    });
}


//Next step is to get numbers to click into the display. DONE

// Make buttons selectable with addEventListener or onclick DONE
// Buttons must return a value DONE
// Build function that uses the operate() function to return a value in the console. DONE



// Function constructor might be an answer