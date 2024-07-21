// Day 9: DOM Manipulation
// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.
const h1 = document.getElementById("h1");
h1.textContent = "Day 9 - DOM Manipulation";

// • Task 2: Select an HTML element by its class and change its background color.
const des = document.getElementsByClassName("description");
des[0].style.background = "red";

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
const body = document.querySelector("body");
const div = document.createElement("div");
div.textContent = "New Div from DOM manipulation";
body.appendChild(div);

// Task 4: Create a new li element and add it to an existing ul list.
const list = document.querySelector("ul");
const item = document.createElement("li");
item.textContent = "Color";
list.appendChild(item);

// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
const h3 = document.querySelector("h3");
h3.remove(h3);

// Task 6: Remove the last child of a specific HTML element.
list.removeChild(list.lastElementChild);

// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.querySelector("img");
image.src =
  "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg";

// • Task 8: Add and remove a CSS class to/from an HTML element.
image.classList.add("imageClass");

setTimeout(() => {
  image.classList.remove("imageClass");

  if (image.classList.length === 0) {
    image.removeAttribute("class");
  }
}, 3000);

// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  des[0].textContent =
    "Solving the JavaScript questions from Chai Code website.";
});

// • Task 10: Add a mouseover event listener to an element that changes its border color.
btn.addEventListener("mouseover", () => {
  btn.style.borderColor = "green";
});
