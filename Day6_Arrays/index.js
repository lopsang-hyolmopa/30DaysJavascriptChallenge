// Day 6: Arrays
// Tasks/Activities:

// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

// Task 2: Access the first and last elements of the array and log them to the console.
const fruits = ["Orange", "Apple", "Mango", "Banana"];
const firstFruit = fruits[0];
const lastFruit = fruits[fruits.length - 1];
console.log("First Element:", firstFruit); // Orange
console.log("Last Fruit:", lastFruit); // Banana

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const evenNumbers = [2, 4, 6, 8, 10];
evenNumbers.push(12);
console.log(evenNumbers); // [2, 4, 6, 8, 10, 12]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
const animals = ["lion", "tiger", "dog", "cat", "leopard"];
animals.pop();
console.log(animals); // ["lion", "tiger", "dog", "cat"]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
const books = ["Atomic Habits", "Think like a monk", "Deep Work"];
books.shift();
console.log(books); // ["Atomic Habits", "Think like a monk"]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const ages = [13, 25, 46, 32, 67];
ages.unshift(7);
console.log(ages); // [7, 13, 25, 46, 32, 67]

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const normalNumbers = [15, 6, 38, 27, 40];
const doubledNumbers = normalNumbers.map((number) => number * 2);
console.log(doubledNumbers); // [30, 12, 76, 54, 80]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const randomNumbers = [23, 67, 12, 89, 34, 56, 78, 90, 11, 43];
const filteredEvenNumbers = randomNumbers.filter((number) => number % 2 === 0);
console.log(filteredEvenNumbers); // [12, 34, 56, 78, 90]

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = randomNumbers.reduce((acc, number) => acc + number, 0);
console.log(sum); // 503

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < normalNumbers.length; i++) {
  console.log(normalNumbers[i]);
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
randomNumbers.forEach((number) => console.log(number));

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const twoDimensionalArray = [
  ["ram", 23],
  ["shaym", 35],
];
console.log(twoDimensionalArray); // [['ram', 23], ['shyam', 35]]

// Task 13: Access and log a specific element from the two-dimensional array.
const ageOfShyam = twoDimensionalArray[1][1];
console.log("Age of Shyam:", ageOfShyam);
