function Clearscreen() {
    document.getElementById("result").value = "";
}

function setScreenValue(value) {
    document.getElementById("result").value += value;
}
function calculateResult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();

}
if (expression === '') {
    resultElement.value = 'Enter an expression';
    return;
}

try {
    resultElement.value = aval(expression);
} catch (e) {
    resultElement.value = 'invalid expression';
}