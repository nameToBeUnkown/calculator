let currentInput = ''
let firstOperand = ''
let currentOperation = ''
const display = document.getElementById('display')

function appendNumber(number) {
    currentInput += number
    display.value = currentInput
}

function chooseOperation(operation) {
    if (currentInput === '') return
    if (firstOperand !== '') {
        calculateResult()
    }
    firstOperand = currentInput
    currentOperation = operation
    currentInput = ''
}

function clearDisplay() {
    currentInput = ''
    firstOperand = ''
    currentOperation = ''
    display.value = ''
}

function calculateResult() {
    if (currentInput === '' || firstOperand === '') return
    let result
    const secondOperand = currentInput

    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand)
            break
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand)
            break
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand)
            break
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand)
            break
        default:
            return
    }

    display.value = result
    currentInput = result.toString()
    firstOperand = ''
    currentOperation = ''
}
