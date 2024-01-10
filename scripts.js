const num1 = 0;
const num2 = 0;
const operator = '';
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
// How will we select the operator? switch statement?

