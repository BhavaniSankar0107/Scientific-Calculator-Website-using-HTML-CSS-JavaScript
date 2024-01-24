let displayValue = '';

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.toString();
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendCharacter(character) {
    displayValue += character;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function sqrt() {
    displayValue += 'Math.sqrt(';
    updateDisplay();
}

function power(exp) {
    displayValue = `Math.pow(${parseFloat(displayValue)}, ${exp})`;
    updateDisplay();
}

function trigFunction(func) {
    displayValue += `Math.${func}(`;
    updateDisplay();
}

function log() {
    displayValue += 'Math.log(';
    updateDisplay();
}

function ln() {
    displayValue += 'Math.log(';
    updateDisplay();
}

function atan() {
    displayValue += 'Math.atan(';
    updateDisplay();
}

function asin() {
    displayValue += 'Math.asin(';
    updateDisplay();
}

function acos() {
    displayValue += 'Math.acos(';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function pi() {
    displayValue += Math.PI;
    updateDisplay();
}