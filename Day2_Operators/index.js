// Activity 1: Arithmetic Operations
// • Task 1: Write a program to add two numbers and log the result to the console.
const sum = 1 + 4;
console.log("Sum:", sum); // 5

// • Task 2: Write a program to subtract two numbers and log the result to the console.
const difference = 5 - 3;
console.log("Differnce:", difference); // 2

// • Task 3: Write a program to multiply two numbers and log the result to the console.
const product = 10 * 2;
console.log("Product:", product); // 20

// • Task 4: Write a program to divide two numbers and log the result to the console.
const division = 21 / 7;
console.log("Division:", division); // 3

// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const remainder = 33 % 4;
console.log("Remainder:", remainder); // 1

// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.
let a = 9;
a += 7;
console.log(a); // 16

// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let minus = 15;
minus -= 5;
console.log(minus); // 10

// Activity 3: Comparison Operators
// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.
const i = 9;
const j = 4;
console.log(i > j); // true
console.log(i < j); // false

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(135 >= 127); // true
console.log(333 <= 333); // true

// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log(5 == 13); // false
console.log(34 === 34); // true

// Activity 4: Logical Operators
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
const age = 23;

if (age >= 18 && age <= 60) {
  console.log("Adult");
}

// • Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
const language = "English";

if (language === "English" || language === "French") {
  console.log("Language spoken in Canada.");
}

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
const isMarried = false;
console.log("Married:", !isMarried);

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
const number = 4;
const result = number > 0 ? "Positive" : "Negative";
console.log(result);
