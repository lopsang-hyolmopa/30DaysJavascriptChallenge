// Day 19: Regular Expressions
// Tasks/Activities:

// Activity 1: Basic Regular Expressions
// • Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const word = /JavaScript/gi // gi - denotes for global + case insensitive
const str = 'JavaScript is one of the most popular programming languages. Javascript is dynamically typed language.'
console.log(str.match(word))

// • Task 2: Write a regular expression to match all digits in a string. Log the matches.
const digit = /\d/g
const userId = 'HaNy9C8muKAxAF4As8t0N1Dd5goRG47_'

console.log(userId.match(digit))