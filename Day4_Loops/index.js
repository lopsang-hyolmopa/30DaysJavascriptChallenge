// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
// console.log("Multiplication table of 5");
for (let j = 1; j <= 10; j++) {
  //   console.log(`5 * ${j} = ${5 * j}`);
}

// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let k = 1;
while (k <= 10) {
  sum += k;
  k++;
}
// console.log("Sum:", sum); // 55

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let x = 10;
while (x >= 1) {
  //   console.log(x);
  x--;
}

// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let y = 1;
do {
  //   console.log(y);
  y++;
} while (y <= 5);

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
calculateFactorial = (number) => {
  let factorial = 1;
  do {
    factorial *= number;
    number--;
  } while (number >= 1);
  return factorial;
};
// console.log(calculateFactorial(7)); // 5040

// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log();
}

// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
