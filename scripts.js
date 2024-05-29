const num1 = 0;
const num2 = 0;
const operator = '';
let numButton = document.querySelectorAll('#number-button');
// Attach the variables to the calculator UI?


const addFunction = function(num1, num2) {
    return num1 + num2;
}
// console.log(addFunction(3, 4));

const subFunction = function(num1, num2) {
    return num1 - num2;
}
const multFunction = function(num1, num2) {
    return num1 * num2;
}
const divFunction = (num1, num2) => {
    return num1 / num2;
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
        default:
            return "Choose add, subtract, multiply, or divide as an operator";
    }
}
operate();

numButton.addEventListener('click', () => {
    console.log("clickec");
}); // Returns numButton.addEventListener is not a function.


// Make buttons selectable with addEventListener or onclick
// Buttons must return a value
// Build function that uses the operate() function to return a value in teh console.
// Maybe a forEach loop over the buttons to select which one works? Maybe a map functoin?


