// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const resolveAfter3Secs = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved with async after"), 3000);
  });
};

const resolvePromiseAsync = async () => {
  console.log("Calling promise");
  const result = await resolveAfter3Secs();
  console.log(result);
};

resolvePromiseAsync();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise rejected with async try and catch"), 1500);
  });
};

const rejectPromiseAsync = async () => {
  try {
    const result = await rejectPromise();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

rejectPromiseAsync()
