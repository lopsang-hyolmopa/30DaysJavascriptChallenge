// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const PI = 3.14;
const calculateSum = (a, b) => a + b;
const calculateSquare = (num) => num ** 2;

module.exports = { PI, calculateSum, calculateSquare };
