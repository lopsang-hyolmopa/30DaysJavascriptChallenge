// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
const throwError = () => {
  try {
    let firstName = "Lopsang";
    let fullName = firstName + " " + lastName;
    console.log("Fullname:", fullName);
  } catch (err) {
    console.error("Something is wrong!", err);
  }
};

throwError();

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
const divideNumbers = (numerator, denominator) => {
  try {
    if (denominator === 0) throw "Denominator cannot be zero.";
    console.log(numerator / denominator);
  } catch (err) {
    console.error("Error:", err);
  }
};

divideNumbers(4, 2);

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
const testFinally = () => {
  try {
    console.log("Hello from try statement");
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Finally: I will run on any situations");
  }
};

testFinally();
