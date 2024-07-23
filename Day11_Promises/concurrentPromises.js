// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First promise resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second promise resolved"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third promise resolved"), 3000)
);

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((err) => console.error("One of the promises failed", err));

// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
