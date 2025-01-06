// Form Validation
// Create a simple form with fields for "Name" and "Email." When the form is submitted:

// If any field is empty, display an error message below the form.
// Prevent the form submission if there are errors.

const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();

  const existingError = document.getElementById("error-message");
  if (existingError) {
    existingError.remove();
  }

  if (!name || !email) {
    let errorPara = document.createElement("p");
    errorPara.id = "error-message";
    errorPara.style.color = "red";
    errorPara.textContent = "Name or Email field cannot be empty";
    form.appendChild(errorPara);
    return;
  }

  console.log({
    name,
    email,
  });

  nameInput.value = "";
  emailInput.value = "";
}
