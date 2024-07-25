// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
// import { map } from "lodash"; (acutal way - but not supported here in node env. so, have to use alternative ways.)
import pkg from "lodash";
const { map } = pkg;

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = map(numbers, (number) => number ** 2);
// console.log(squaredNumbers);

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from "axios";

const apiUrl = "https://dummyjson.com/users/";

const fetchData = async () => {
  try {
    const apiResponse = await axios.get(apiUrl);
    const users = await apiResponse.data.users;
    console.log(users);
  } catch (error) {
    console.log("Something is wrong!", error);
  }
};

fetchData();
