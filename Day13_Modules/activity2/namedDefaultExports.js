// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const printHelloWorld = () => "Hello World!";

const getProduct = (a, b) => a * b;

export { printHelloWorld, getProduct };

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const getFullname = (firstName, lastName) => `${firstName} ${lastName}`;

export default getFullname;
