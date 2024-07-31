// Day 16: Recursion
// Tasks/Activities:

// Activity 1: Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const calculateFactorial = (n) => {
  if (n === 0) return 1;
  return n * calculateFactorial(n - 1);
};

console.log(calculateFactorial(0)); // 1
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(7)); // 5040

// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
const calculateFibonacci = (n) => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

console.log(calculateFibonacci(0)); // 0
console.log(calculateFibonacci(1)); // 1
console.log(calculateFibonacci(6)); // 8
console.log(calculateFibonacci(9)); // 34
