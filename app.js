let currentInput = "";
let firstOperand = "";
let currentOperation = "";
const display = document.getElementById("display");

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function chooseOperation(operation) {
    if (currentInput === "") return;
    if (firstOperand !== "") {
        calculateResult();
    }
    firstOperand = parseFloat(currentInput);
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
    let result;
    const secondOperand = parseFloat(currentInput);

    switch (currentOperation) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    firstOperand = "";
    currentOperation = "";
}
