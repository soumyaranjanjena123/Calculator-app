// let displayValue = '';

// function addToDisplay(value) {
    
//   displayValue += value;
//   document.getElementById('display').innerText = displayValue;
// }

// function clearDisplay() {
//   displayValue = '';
//   document.getElementById('display').innerText = '';
// }

// function deleteFromDisplay() {
//   displayValue = displayValue.slice(0, -1);
//   document.getElementById('display').innerText = displayValue;
// }

// function calculate() {
//   try {
//     const result = eval(displayValue);
//     displayValue = result.toString();
//     document.getElementById('display').innerText = displayValue;
//   } catch (error) {
//     alert('Invalid expression!');
//     clearDisplay();
//   }
// }



let displayValue = '';

function addToDisplay(value) {
  // Replace '*' with '×'
  if (value === '*') {
    value = '×';
  }
  
  // Check if the value is "DEL"
  if (value === 'DEL') {
    // Perform the delete action
    deleteFromDisplay();
    return;
  }
  
  // Check if the last character in the display is the same as the value being added
  if (displayValue.slice(-1) === value) {
    return; // Exit the function if they are the same
  }
  
  // Append the value to the display
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '';
}

function deleteFromDisplay() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').innerText = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').innerText = displayValue;
  } catch (error) {
    alert('Invalid expression!');
    clearDisplay();
  }
}

// Event listeners for buttons
document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    addToDisplay(value);
  });
});

// Event listener for clear button
document.getElementById('clear').addEventListener('click', clearDisplay);

// Event listener for equals button
document.getElementById('equals').addEventListener('click', calculate);
