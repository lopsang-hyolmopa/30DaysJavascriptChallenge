// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

let numArr = [];
let funArr = [];

for (let i = 0; i < 10; i++) {
  numArr[numArr.length] = i;
  funArr.push(arrFunc(i));
}

function arrFunc(index) {
  return function () {
    return index;
  };
}

funArr.forEach((func) => console.log(func()));
