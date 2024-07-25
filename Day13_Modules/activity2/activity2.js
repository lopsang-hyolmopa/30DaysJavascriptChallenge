// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { printHelloWorld, getProduct } from "./namedDefaultExports.js";

const greeting = printHelloWorld();
console.log("Greeting: ", greeting); // Hello World!

const product = getProduct(5, 4);
console.log("Product: ", product); // 25

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import defaultFunction from "./namedDefaultExports.js";

const fullName = defaultFunction("Lopsang", "Lama");
console.log("Fullname: ", fullName); // Lopsang Lama