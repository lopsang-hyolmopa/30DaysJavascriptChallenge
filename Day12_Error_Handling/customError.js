// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

const throwCustomError = () => {
  try {
    throw new CustomError("This is a custom message.");
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

// throwCustomError();

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
const prompt = require('prompt-sync')() // npm install prompt-sync for running prompt on node environment

const validateUserInput = () => {
  try {
    let input = prompt("Enter your name: ");
    if (typeof input === "string" && input.length === 0)
      throw new CustomError("Value should not be empty.");
    console.log("Value:", input);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

validateUserInput()
