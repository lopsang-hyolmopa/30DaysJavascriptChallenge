// Image Toggle
// Add an image to your webpage and a button labeled "Toggle Image." Clicking the button should hide the image if it’s visible or show it if it’s hidden.

const btn = document.querySelector("button");
const img = document.querySelector("img");

let isVisible = true;

btn.addEventListener("click", () => {
  img.style.display = isVisible ? "none" : "block";
  isVisible = !isVisible;
});
