// JavaScript code for form validation
let form = document.getElementById("myForm");
// Prevent form from submitting
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve the input field value
  let inputField = document.getElementById('inputField');
  let inputValue = inputField.value;

  // Regular expression pattern for alphanumeric input
  let Regex = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (Regex.test(inputValue)) {
    // Valid input: display confirmation and submit the form
    alert("Form has been submitted!");
    form.submit(); 
  } else {
    // Invalid input: display error message
    alert("Invalid input! Please enter an alphanumeric value.");
  }
});