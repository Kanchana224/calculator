

const calculatorContainer = document.createElement('div');
calculatorContainer.classList.add('calculator');


const display = document.createElement('input');
display.type = 'text';
display.id = 'display';
display.readOnly = true;
display.className='align'
calculatorContainer.appendChild(display);


const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons','design');


const buttonLabels = [
  'CL', 'DEL', '.', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+', '0','00','='
];

function buttonClick(value) {
  if (value === '=') {
    calculate();
  } else if (value === 'CL') {
    clearDisplay();
  } else if(value==="DEL"){
    dele();
  }
  else {
    appendToDisplay(value);
  }
}


buttonLabels.forEach(label => {
  const button = document.createElement('button');
  button.className=("btn")
  button.textContent = label;
  button.addEventListener('click', () => buttonClick(label));
  buttonsContainer.appendChild(button);
});


calculatorContainer.appendChild(buttonsContainer);
document.body.appendChild(calculatorContainer);

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.backgroundColor='grey'
document.body.style.height='100vh'
document.body.style.marginBottom='100px'


calculatorContainer.style.maxWidth = '400px';
calculatorContainer.style.width = '130%';
calculatorContainer.style.margin='100px'
calculatorContainer.style.borderRadius='20px'

display.style.width = '95%';
display.style.height='100px'
display.style.fontSize = '24px';
display.style.padding = '10px';
display.style.textAlign='end';
display.style.borderRadius='20px'
display.style.marginBottom='15px'
display.style.fontSize='50px'
display.style.fontFamily='sans-serif'

buttonsContainer.style.display = 'grid';
buttonsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
buttonsContainer.style.gap= '10px';
buttonsContainer.style.height='350px'





let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  display.value = "";
}
function dele(){
displayValue='';
    display.value=display.value.slice(0,-1)
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    display.value = displayValue;
  } catch (error) {
    display.value = alert('Invalid');
  }
}