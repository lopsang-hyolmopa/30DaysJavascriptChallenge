// Dynamic List Item Addition
// Create a text input field and a button labeled "Add Item." When the button is clicked, the text from the input field should be added as a new item in a list. Clear the input field after adding the item.

const addBtn = document.querySelector("button");
let inputField = document.querySelector("input");
let lists = document.querySelector("ul");

addBtn.addEventListener("click", addItem);

function addItem() {
  let inputValue = inputField.value.trim();
  if (inputValue === "") {
    alert("Cannot add empty item!");
    return;
  }

  const list = document.createElement("li");
  list.textContent = inputValue;
  lists.appendChild(list);
  inputField.value = "";
}
