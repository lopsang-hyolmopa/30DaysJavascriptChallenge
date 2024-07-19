// Day 7: Objects
// Tasks/Activities:

// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  title: "Deep work",
  author: "Cal Newport",
  year: 2016,
};

console.log(book); // { title: 'Deep Work', author: 'Cal Newport', year: 2016 }

// • Task 2: Access and log the title and author properties of the book object.
const bookTitle = book.title;
console.log("Title:", bookTitle); // Deep Work

const bookAuthor = book.author;
console.log("Author:", bookAuthor); // Cal Newport

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getTitleAuthor = function () {
  return `${book.title} by ${book.author}`;
};
console.log(book.getTitleAuthor()); // Deep work by Cal Newport

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (newYear) {
  book.year = newYear;
  return book.year;
};
// book.updateYear(2019);
console.log(book); // { title: 'Deep work', author: 'Cal Newport', year: 2019, getTitleAuthor: [Function], updateYear: [Function] }

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "Kathmandu Valley Public Library",
  address: "Pradarshani Marg, Kathmandu",
  books: [
    { title: "Atomic Habits", author: "James Clear", publishedYear: 2018 },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      publishedYear: 1997,
    },
    {
      title: "The ONE Thing",
      author: "Gary W. Keller, Jay Papasan",
      publishedYear: 2012,
    },
  ],
  contactNumber: "01-4229756",
};

console.log(library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
const libraryName = library.name;
console.log("Libray Name:", libraryName); // Kathmandu Valley Public Library

const allBooksTitle = library.books.map((book) => book.title);
console.log(allBooksTitle); // ['Atomic Habits', 'Rich Dad Poor Dad', 'The ONE Thing']

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleYear = function () {
  return `${this.title} was originally published in ${this.year}.`;
};
console.log(book.getTitleYear()); // Deep work was originially published in 2016.

// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const allBookKeys = Object.keys(book)
console.log(allBookKeys)

const allBookValues = Object.values(book)
console.log(allBookValues) 