// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkNumber(number) {
  if (number % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd Number");
  }
}

checkNumber(8); // Even number

// • Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
  return number ** 2;
}
console.log(calculateSquare(9)); // 81

// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const getMaximum = function (a, b) {
  if (a > b) {
    console.log(`${a} is maximum number`);
  } else {
    console.log(`${b} is maximum number`);
  }
};

getMaximum(9, 5); // 9 is maximum number

// • Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (string1, string2) {
  return string1 + " " + string2;
};

console.log(concatenateStrings("Hello", "World!")); // Hello World!

// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (x, y) => {
  return x + y;
};

console.log(calculateSum(3, 7)); // 10

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkSpecificCharacter = (myString, character) => {
  let splitedString = myString.split("");
  if (splitedString.includes(character)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkSpecificCharacter("Hello World", "h")); // false

// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const getProduct = (a, b = 5) => {
  return a * b;
};

console.log(getProduct(5)); // 25

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const doGreeting = (name, age = 8) => {
  return `Hi ${name}! You are ${age} years old.`;
};
console.log(doGreeting("Tshering")); // Hi Tshering! You are 23 years old.

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const highOrderFunction = (callback, times) => {
  for (let i = 0; i < times; i++) {
    callback();
  }
};

const callbackFunction = () => {
  console.log("I am callback function.");
};

highOrderFunction(callbackFunction, 3);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const highFunction = (callback1, callback2, value) => {
  console.log("Value from highFunction:", value);
  result = callback1(value);
  callback2(result);
};

const getSquare = (number) => {
  console.log(`Squared Number of value, ${number}:`, number ** 2);
  return number ** 2;
};

const getCube = (result) => {
  const cube = result ** 3;
  console.log(`Cubed Number of result, ${result}:`, cube);
};

highFunction(getSquare, getCube, 5);
