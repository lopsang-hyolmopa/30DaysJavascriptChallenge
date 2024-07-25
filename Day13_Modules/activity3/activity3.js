// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const math = require("./entireModules.js");

console.log(math.PI); // 3.14
console.log(math.calculateSum(8, 10)); // 18
console.log(math.calculateSquare(4)); // 16
