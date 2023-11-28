let currentValue = '';
let result = 0;
let operator = '';

function clearDisplay() {
  currentValue = '';
  result = 0;
  operator = '';
  document.getElementById('display').value = '';
}

function appendValue(value) {
  currentValue += value;
  document.getElementById('display').value = currentValue;
}

function calculateResult() {
  if (currentValue !== '') {
    result = eval(currentValue);
    document.getElementById('display').value = result;
    currentValue = result.toString();
  }
}
