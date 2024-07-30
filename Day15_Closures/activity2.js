// Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function generateId() {
  let id = 0;
  return function increaseId() {
    console.log("Inital id", id);
    return id += 1;
  };
}

const userId = generateId();
console.log(userId());
console.log(userId());
console.log(userId());

// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function setUser(name) {
  return function greeting() {
    return `Hello! ${name}`;
  };
}

const userGreeting = setUser("Ram Thapa");
console.log(userGreeting());
