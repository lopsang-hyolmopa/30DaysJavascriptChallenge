// Day 15: Closures
// Tasks/Activities:

// Activity 1: Understanding Closures
// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
const outerFunc = () => {
  let number = 4;
  const innerFunc = () => {
    return number;
  };
  return innerFunc;
};

const closures = outerFunc();
console.log("Closures: ", closures());

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
  let count = 0;
  function increaseCount() {
    count += 1;
    console.log(count);
  }
  function getCurrentCount() {
    return count;
  }
  return { increaseCount, getCurrentCount };
}

counter = createCounter();
counter.increaseCount() // 1
counter.increaseCount(); // 2
counter.increaseCount(); // 3
console.log(counter.getCurrentCount()); // 3
