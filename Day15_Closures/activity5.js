// Activity 5: Memoization
// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
const add = (n) => n + 10;
console.log("Simple call", add(3)); // Simple call 13

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoizeAdd = memoize(add);
console.log(memoizeAdd(4)); // Calculating result 14
console.log(memoizeAdd(4)); // Fetching from cache 14
console.log(memoizeAdd(5)); // Calculating result 15
console.log(memoizeAdd(5)); // Fetching from cache 15

// • Task 8: Create a memoized version of a function that calculates the factorial of a number.
function fib(n, memo) {
  memo = memo || {};

  if (memo[n]) return memo[n];
  if (n <= 1) return 1;
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}

// console.log(fib(6));
