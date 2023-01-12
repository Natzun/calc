console.log('backend');

var lastInput, currentInput, resultInput;

currentInput = 0;

function insert(newInput){
  currentInput = parseInt(currentInput + newInput)
  updateDisplay();
}

function updateDisplay(){
  const display = document.getElementById('displaySpan')
  display.innerText = currentInput;
}

function add(a = required(), b = required()){
  return a + b;
}

function multiply(a = required(), b = required()){
  return a * b;
}

function subtract(a = required(), b = required()){
  return a - b;
}

function divide(a = required(), b = required()){
  return a / b;
}
