// Activity 4: Fetching Data from an API
const apiUrl = "https://dummyjson.com/users";

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const fetchDataPromise = () => fetch(apiUrl);

fetchDataPromise()
  .then((apiResponse) => apiResponse.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataAsync = async () => {
  try {
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();
    console.log(data);
  } catch (err) {
    console.error("Something is wrong!", err);
  }
};

// fetchDataAsync();
