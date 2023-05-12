// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Create variables in an object for the various characters in the password
// https://www.tutorialstonight.com/password-generator-in-javascript
function writePassword() {
  var password = generatePassword();
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numberCase = '0123456789';
  var specialCase = '!@#$%^&*()-=_+[]{}|;:,.<>?';
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
