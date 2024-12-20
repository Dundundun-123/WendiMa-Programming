// Array initialization
let numbers = [];

// DOM elements
const numberInput = document.getElementById("numberInput");
const addButton = document.getElementById("addButton");
const arrayDisplay = document.getElementById("arrayDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const sortAscButton = document.getElementById("sortAscButton");
const sortDescButton = document.getElementById("sortDescButton");
const findMaxButton = document.getElementById("findMaxButton");
const findMinButton = document.getElementById("findMinButton");
const clearArrayButton = document.getElementById("clearArrayButton");

// Display array
function displayArray() {
  arrayDisplay.textContent = numbers.length ? numbers.join(", ") : "Array is empty";
}

// Display result
function displayResult(message) {
  resultDisplay.textContent = message;
}

// Add number
addButton.addEventListener("click", () => {
  const value = Number(numberInput.value);
  if (!isNaN(value)) {
    numbers.push(value);
    displayArray();
    displayResult(`Added number ${value}`);
    numberInput.value = "";
  } else {
    displayResult("Please enter a valid number!");
  }
});

// Sort ascending
sortAscButton.addEventListener("click", () => {
  numbers.sort((a, b) => a - b);
  displayArray();
  displayResult("Array sorted in ascending order!");
});

// Sort descending
sortDescButton.addEventListener("click", () => {
  numbers.sort((a, b) => b - a);
  displayArray();
  displayResult("Array sorted in descending order!");
});

// Find maximum
findMaxButton.addEventListener("click", () => {
  if (numbers.length) {
    const max = Math.max(...numbers);
    displayResult(`The maximum number is ${max}`);
  } else {
    displayResult("Array is empty, cannot find the maximum!");
  }
});

// Find minimum
findMinButton.addEventListener("click", () => {
  if (numbers.length) {
    const min = Math.min(...numbers);
    displayResult(`The minimum number is ${min}`);
  } else {
    displayResult("Array is empty, cannot find the minimum!");
  }
});

// Clear array
clearArrayButton.addEventListener("click", () => {
  numbers = [];
  displayArray();
  displayResult("Array cleared!");
});
