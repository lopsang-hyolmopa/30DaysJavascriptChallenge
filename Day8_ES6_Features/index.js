// Day 8: ES6+ Features
// Tasks/Activities:

// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Ram Thapa";
const age = 32;

const person = `${name} is ${age} years old.`;
console.log(person); // Ram Thapa is 32 years old.

// • Task 2: Create a multi-line string using template literals and log it to the console.
const country = "Nepal";
const city = "Bhaktapur";

console.log(`${person}
He lives in ${city}, ${country}.`);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [firstElement, secondElement] = numbers;
console.log("First Element:", firstElement); // 1
console.log("Second Element:", secondElement); // 2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "Deep Work",
  author: "Cal Newport",
  publishedYear: 2016,
};

const { title, author } = book;
console.log("Title:", title); // Deep Work
console.log("Author:", author); // Cal Newport

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const extraNumbers = [8, 9, 6, 7];
const newNumbers = [...numbers, ...extraNumbers];
console.log("Updated Numbers:", newNumbers);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
  let total = 0;
  for (number of args) {
    total += number;
  }
  return total;
}

console.log("Sum:", sum(1, 4, 5, 7)); // 17

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(a, b = 1) {
  return a * b;
}

console.log("With second parameter:", product(4, 2)); // 8
console.log("Without second parameter:", product(7)); // 7

// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const mobileName = "iPhone 15 Pro Max";
const price = 214300;
const color = " Natural Titanium";

const mobile = { mobileName, price, color };
console.log(mobile); // { mobileName: 'iPhone 15 Pro Max', price: 214300, color: 'Natural Titanium' }

// Task 9: Create an object with computed property names based on variables and log the object to the console.
function createPerson(name, age) {
  return {
    name,
    age,
    [`is${name}Adult`]: age >= 18,
  };
}

console.log(createPerson("Seraph", 8)); // { name: 'Seraph', age: 8, isSeraphAdult: false }
