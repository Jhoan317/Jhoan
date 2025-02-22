
let display = document.getElementById('Values');
let result = document.getElementById('resp');


function appendNumber(number) {
    display.innerHTML += number;
}


function appendOperator(operator) {
    display.innerHTML += ` ${operator} `;
}


function clearDisplay() {
    display.innerHTML = '';
    result.innerHTML = '';
}


function calculateResult() {
    try {
        result.innerHTML = eval(display.innerHTML);
    } catch {
        result.innerHTML = 'Error';
    }
}


document.getElementById('Seven').onclick = () => appendNumber('7');
document.getElementById('ocho').onclick = () => appendNumber('8');
document.getElementById('nine').onclick = () => appendNumber('9');
document.getElementById('plus').onclick = () => appendOperator('+');
document.getElementById('four').onclick = () => appendNumber('4');
document.getElementById('fove').onclick = () => appendNumber('5');
document.getElementById('six').onclick = () => appendNumber('6');
document.getElementById('minus').onclick = () => appendOperator('-');
document.getElementById('one').onclick = () => appendNumber('1');
document.getElementById('two').onclick = () => appendNumber('2');
document.getElementById('three').onclick = () => appendNumber('3');
document.getElementById('multip').onclick = () => appendOperator('*');
document.getElementById('clear').onclick = () => clearDisplay();
document.getElementById('zero').onclick = () => appendNumber('0');
document.getElementById('aqueal').onclick = () => calculateResult();
document.getElementById('divicion').onclick = () => appendOperator('/');
