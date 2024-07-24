// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const handleErrorPromise = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random().toFixed(1);
    console.log("Random: ", random);
    if (random >= 0.5) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected");
    }
  });
};

handleErrorPromise()
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const handleErrorAsync = async () => {
  try {
    const result = await handleErrorPromise();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};

handleErrorAsync()
