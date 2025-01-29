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

function performCalculation(first, second, operation) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return null;
    }
}

function calculateResult() {
    if (currentInput === "" || firstOperand === "") return;

    const result = performCalculation(
        firstOperand,
        currentInput,
        currentOperation
    );

    if (result !== null) {
        display.value = result;
        currentInput = result.toString();
        firstOperand = "";
        currentOperation = "";
    }
}
