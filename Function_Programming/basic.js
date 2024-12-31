// Basic: Write a function that takes an array of numbers and returns a new array with each number transformed according to these rules: even numbers are doubled, odd numbers are tripled, and zero remains unchanged. Use functional methods instead of loops.
const numbers = [0, 1, 2, 3, 4, 5];

const isZero = (num) => num === 0;
const isEven = (num) => num % 2 === 0;
const doubleNumber = (num) => num * 2;
const tripleNumber = (num) => num * 3;

transformNumbers = (array) =>
  array.map((ele) =>
    isZero(ele) ? ele : isEven(ele) ? doubleNumber(ele) : tripleNumber(ele)
);

console.log(transformNumbers(numbers)); // [0, 3, 4, 9, 8, 15]

// transformElement = (element) => {
//   if (element <= 0) {
//     return 0;
//   } else if (element % 2 === 0) {
//     return element * 2;
//   } else {
//     return element * 3;
//   }
// };
