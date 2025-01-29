let currentInput = "";
let firstOperand = "";
let currentOperation = "";
const display = document.getElementById("display");

function appendNumber(number) {
    if (display.value === "Error" || display.value === "Infinity") {
        clearDisplay();
    }
    if (currentInput === "" && firstOperand === "" && currentOperation === "") {
        display.value = "";
    }
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

function calculateResult() {
    if (currentInput === "" || firstOperand === "") return;
    let result;
    const secondOperand = currentInput;

    if (currentOperation === "/" && parseFloat(secondOperand) === 0) {
        display.value = "Error";
        return;
    }

    switch (currentOperation) {
        case "+":
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case "-":
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case "*":
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case "/":
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    firstOperand = "";
    currentOperation = "";
}

function toggleSign() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;
    }
}

