// Day 13: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const basicModule = require('./basicModule.js') // does not work with es6 module

let sum = basicModule.getSum(5, 7);
console.log("Sum:", sum); // 12

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
let personGreeting = basicModule.person.greeting();
console.log(personGreeting); // Hello from Ram Thapa