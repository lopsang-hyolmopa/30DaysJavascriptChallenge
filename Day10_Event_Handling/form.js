// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log({
    name: nameInput.value,
    age: ageInput.value,
  });
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selectDropdown = document.getElementById("motorcycles");
const selectedValue = document.querySelector("p");

selectDropdown.addEventListener("change", (e) => {
  selectedValue.textContent = e.target.value;
});

// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.getElementById("myList");
list.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
