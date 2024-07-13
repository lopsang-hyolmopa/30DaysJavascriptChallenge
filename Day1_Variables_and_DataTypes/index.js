// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var age = 23
console.log("Age: ", age)

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let fullName = 'John Smith'
console.log("Name: ", fullName)

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const isMarried = true
console.log("Married: ", isMarried)

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. 
let price = 250
console.log("Type of price: ", typeof price)

let name = "Socks"
console.log("Type of name: ", typeof name)

let isWhite = false
console.log("Type of isWhite: ", typeof isWhite)

let book = {
    name: 'Deep Work',
    price: 550,
    author: 'Cal Newport'
}
console.log("Type of book: ", typeof book)

let animals = ['tiger', 'lion', 'monkey']
console.log("Type of animals: ", typeof animals)

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let initalValue = 10
console.log("Intial value: ", initalValue)
initalValue = 20
console.log("Reassigned value: ", initalValue)

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const pi = 3.14
console.log("Constant value: ", pi)
pi = 5
console.log(pi) // TypeError: Assignment to constant variable.