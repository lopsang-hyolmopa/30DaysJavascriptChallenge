// Day 11: Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const resolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully!");
  }, 2000);
});

resolvePromise.then((result) => console.log(result)); // Promise resolved successfully!

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected");
  }, 2000);
});

rejectPromise.catch((error) => console.error(error)); // Promise rejected

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 3000);
});

fetchData
  .then((message) => {
    console.log(message);
    return new Promise((resolve) =>
      setTimeout(() => resolve("Data processed"), 2000)
    );
  })
  .then((message) => {
    console.log(message);
    return new Promise((resolve) =>
      setTimeout(() => resolve("Data displayed"), 1000)
    );
  })
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// • Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.