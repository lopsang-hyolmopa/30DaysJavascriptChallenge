// Create a module that exports a function to add two numbers. Import and use this module in another script.
function getSum(a, b) {
  return a + b;
}

// Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
  fullName: "Ram Thapa",
  age: 35,
  address: "Pokhara",
  greeting: function () {
    return `Hello from ${this.fullName}`;
  },
};

module.exports.getSum = getSum;
module.exports.person = person;
