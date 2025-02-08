let currentInput = "";
let firstOperand = "";
let currentOperation = "";
const display = document.getElementById("display");

function appendNumber(number) {
    currentInput = parseFloat(currentInput + number);
    display.value = currentInput;
}

function chooseOperation(operation) {
    if (currentInput === "") return;
    if (firstOperand !== "") {
        calculateResult();
    }
    firstOperand = currentInput;
    currentOperation = operation;
    currentInput = "";
}

function clearDisplay() {
    currentInput = "";
    firstOperand = "";
    currentOperation = "";
    display.value = "";
}

function calculateResult() {
    if (currentInput === "" || firstOperand === "") return;
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(currentInput);
    if (currentOperation === "/" && num2 === 0) {
        display.value = "Error";
        currentInput = "";
        return;
    }
    let result;
    switch (currentOperation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        default: return;
    }

    display.value = result;
    currentInput = result.toString();
    firstOperand = "";
    currentOperation = "";
}
