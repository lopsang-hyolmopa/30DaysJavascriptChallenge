// Day 10: Event Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const para = document.querySelector("p");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  para.textContent = "This text is from DOM Manipulation";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.querySelector("img");
image.addEventListener("dblclick", () => {
  image.style.display = "none";
});

// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.
const header = document.querySelector("h1");
header.addEventListener("mouseover", () => {
  header.style.backgroundColor = "cyan";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
header.addEventListener("mouseout", () => {
  header.style.backgroundColor = "";
});

// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const nameInput = document.getElementById("name");
nameInput.addEventListener("keydown", (e) => {
  // console.log(e.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const displayPara = document.getElementById("display");
nameInput.addEventListener("keyup", () => {
  displayPara.textContent = nameInput.value;
});
