
const calculatorContainer = document.createElement('div');
calculatorContainer.classList.add('calculator');

const resultInput = document.createElement('input');
resultInput.type = 'text';
resultInput.id = 'result';
resultInput.className = 'align';
resultInput.readOnly = true;

calculatorContainer.appendChild(resultInput);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons', 'design');

const buttonCL = createButton('CL');
buttonCL.id = 'clear';
buttonCL.textContent = 'clear';
const buttonDEL = createButton('DEL');
const buttonDot = createButton('.');
const buttonDivide = createButton('/');
const buttonmul = createButton('*');

buttonsContainer.appendChild(buttonCL);
buttonsContainer.appendChild(buttonDEL);
buttonsContainer.appendChild(buttonDot);
buttonsContainer.appendChild(buttonDivide);

const button7 = createButton('7');
const button8 = createButton('8');
const button9 = createButton('9');
const button6 = createButton('6');
const button5 = createButton('5');
const button4 = createButton('4');
const button3 = createButton('3');
const button1 = createButton('1');
const button2 = createButton('2');
const button00 = createButton('00');
const buttonadd = createButton('=');
buttonadd.id = 'equal';
const buttonplus = createButton('+');
buttonplus.id = 'add';
const buttonminus = createButton('-');
buttonminus.id = 'subtract';

buttonsContainer.appendChild(button7);
buttonsContainer.appendChild(button8);
buttonsContainer.appendChild(button9);
buttonsContainer.appendChild(buttonmul);
buttonsContainer.appendChild(button4);
buttonsContainer.appendChild(button5);
buttonsContainer.appendChild(button6);
buttonsContainer.appendChild(buttonplus);
buttonsContainer.appendChild(button1);
buttonsContainer.appendChild(button2);
buttonsContainer.appendChild(button3);
buttonsContainer.appendChild(buttonminus); 
buttonsContainer.appendChild(button00);
buttonsContainer.appendChild(buttonadd);
calculatorContainer.appendChild(buttonsContainer);

document.body.appendChild(calculatorContainer);

const display = resultInput;

function createButton(label) {
  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = label;
  button.addEventListener('click', () => buttonClick(label));
  return button;
}

function buttonClick(value) {
  if (value === '=') {
    calculate();
  } else if (value === 'CL') {
    clearDisplay();
  } else if (value === 'DEL') {
    dele();
  } else {
    appendToDisplay(value);
  }
}

function appendToDisplay(value) {
  displayValue += value;
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  display.value = '';
}

function dele() {
  displayValue = '';
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    display.value = displayValue;
  } catch (error) {
    display.value = 'Invalid';
  }
}
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.backgroundColor='grey'
document.body.style.height='100vh'
document.body.style.marginBottom='100px'


calculatorContainer.style.maxWidth = '400px';
calculatorContainer.style.width = '130%';
calculatorContainer.style.marginTop='300px'
calculatorContainer.style.borderRadius='20px'

resultInput.style.width = '99%';
resultInput.style.height='100px'
resultInput.style.fontSize = '24px';
resultInput.style.padding = '10px';
resultInput.style.textAlign='end';
resultInput.style.borderRadius='20px'
resultInput.style.marginBottom='15px'
resultInput.style.fontSize='50px'
resultInput.style.fontFamily='sans-serif'

buttonsContainer.style.display = 'grid';
buttonsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
buttonsContainer.style.gap= '10px';
buttonsContainer.style.height='350px'
