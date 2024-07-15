// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const number = 4;
if (number > 0) {
  console.log("Positive Number"); // Positive Number
} else if (number < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero");
}

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 14;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote."); // You are not eligible to vote.
}

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const a = 1,
  b = 3,
  c = 2;
if (a > b) {
  if (a > c) {
    console.log("Largest Number:", a);
  } else {
    console.log("Largest Number:", c);
  }
} else {
  if (b > c) {
    console.log("Largest Number:", b);
  } else {
    console.log("Largest Number:", c);
  }
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
getDay = (number) => {
  switch (number) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid option");
  }
};
getDay(7);

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
getGrade = (score) => {
  let grade;
  switch (true) {
    case score > 80 && score <= 100:
      grade = "A";
      break;
    case score > 60 && score <= 80:
      grade = "B";
      break;
    case score > 50 && score <= 60:
      grade = "C";
      break;
    case score >= 40 && score <= 50:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  return grade;
};

console.log(getGrade(90));

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
checkNumber = (number) => {
  const result = number % 2 === 0 ? "Even Number" : "Odd Number";
  return result;
};

console.log(checkNumber(2));

// Activity 5: Combining Conditions
// • Task 7: Write a program to check a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const checkLeapYear = (year) => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("Leap Year");
  } else {
    console.log("Not Leap Year");
  }
};

checkLeapYear(2100);
