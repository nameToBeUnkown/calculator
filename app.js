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

function setDisplayValue(value = "") {
    currentInput = value;
    display.value = parseFloat(value);
    firstOperand = "";
    currentOperation = "";
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

    setDisplayValue(result);
}
