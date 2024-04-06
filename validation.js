// Function to set aria-invalid attribute based on validity state
function setAriaInvalid(input) {
  if (input.validity.valid) {
    input.removeAttribute('aria-invalid');
  } else {
    input.setAttribute('aria-invalid', 'true');
  }
}

// Get all input elements
var inputs = document.querySelectorAll('input');

// Loop through each input and add event listener
inputs.forEach(function (input) {
  input.addEventListener('input', function () {
    setAriaInvalid(this); // Set aria-invalid attribute when input changes
  });
});