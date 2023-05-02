// Get the display and buttons
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

// Initialize variables
let input = '';
let result = null;
let operator = null;

// Define the operate function to perform mathematical operations
function operate(operator, num1, num2) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  }
}

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('value');

    // Handle the clear button
    if (buttonValue === 'AC') {
      input = '';
      result = null;
      operator = null;
    }

    // Handle the positive/negative button
    else if (buttonValue === '+/-') {
      input = parseFloat(input) * -1;
    }

    // Handle the percentage button
    else if (buttonValue === '%') {
      input = parseFloat(input) / 100;
    }

    // Handle the operator buttons
    else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      if (operator !== null) {
        if (input !== '') {
          result = operate(operator, result, parseFloat(input));
          display.innerText = result;
          input = '';
        }
      }
      operator = buttonValue;
      result = parseFloat(input);
      input = '';
    }

    // Handle the equals button
    else if (buttonValue === '=') {
      if (operator !== null) {
        if (input !== '') {
          result = operate(operator, result, parseFloat(input));
          display.innerText = result;
          input = '';
          operator = null;
        }
      }
    }

    // Handle the number and decimal buttons
    else {
      input += buttonValue;
    }

    // Update the display with the input value
    display.innerText = input;
  });
});
