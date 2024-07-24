// Activity 5: Graceful Error Handling in Fetch

const invalidUrl = "https://dummyjson.com/users/invalid";
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
const fetchData = () => {
  return fetch(invalidUrl, { method: "GET" });
};

fetchData()
  .then((apiResponse) => apiResponse.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error: ", error));

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const fetchDataAsync = async () => {
  try {
    const apiResponse = await fetchData();
    const data = await apiResponse.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error)
  }
};

fetchDataAsync()