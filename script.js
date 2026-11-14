const display = document.getElementById('display');
const popSound = document.getElementById('popSound');
let currentInput = '0';
let selectedTipPercentage = 15;

function playPop() {
    if (popSound) {
        popSound.currentTime = 0;
        popSound.play().catch(() => {});
    }
}

function appendValue(value) {
    playPop();
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    playPop();
    currentInput = '0';
    updateDisplay();
}

function deleteChar() {
    playPop();
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    playPop();
    try {
        let result = eval(currentInput.replace('×', '*').replace('÷', '/'));
        currentInput = String(result);
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}

function toggleMode() {
    playPop();
    const standardCalc = document.getElementById('standardCalc');
    const tipCalc = document.getElementById('tipCalc');
    const modeBtn = document.querySelector('.mode-btn');

    standardCalc.classList.toggle('hidden');
    tipCalc.classList.toggle('hidden');

    if (tipCalc.classList.contains('hidden')) {
        modeBtn.innerText = 'Tip Splitter';
    } else {
        modeBtn.innerText = 'Standard Calc';
    }
}

function setTip(percentage) {
    playPop();
    selectedTipPercentage = percentage;
    calculateTip();
}

function calculateTip() {
    const billInput = parseFloat(document.getElementById('billAmount').value) || 0;
    const splitInput = parseInt(document.getElementById('splitCount').value) || 1;

    const tipAmount = billInput * (selectedTipPercentage / 100);
    const totalAmount = billInput + tipAmount;
    const perPerson = totalAmount / splitInput;

    document.getElementById('tipTotal').innerText = tipAmount.toFixed(2);
    document.getElementById('personTotal').innerText = perPerson.toFixed(2);
}