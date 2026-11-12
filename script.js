const display = document.getElementById('display');
let currentInput = '0';

function appendValue(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteChar() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        // Evaluate the mathematical expression safely
        let result = eval(currentInput.replace('×', '*').replace('÷', '/'));
        currentInput = String(result);
    } catch (error) {
        currentInput = 'Error 🥺';
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}