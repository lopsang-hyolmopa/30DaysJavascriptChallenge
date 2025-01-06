// Color Picker
// Create three buttons labeled "Red," "Green," and "Blue." Clicking each button should change the background color of the page to the respective color.

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    colorData = button.className
    body.style.backgroundColor = colorData
  });
});