// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Create variables in an object for the various characters in the password

// https://www.tutorialstonight.com/password-generator-in-javascript for some inspiration and study
function generatePassword() {
 
  // Prompts and confirms for selelctions
  // First prompt.  Uses a prompt, then a parse to an integer.  Then uses an if statement to check the length or if the entry is an integer.  Program terminates
  // upon an invalid answer
 let passLength = parseInt(prompt("Enter a desired length for your password. 8-128"));
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    console.log("Invalid length, pleas refresh the page enter a valid length.");
    return;
  } 
 console.log(passLength);
 
 // prompts for uppercase, lowercase, numbers and symbols.  Since we use the confirm method, all values are booleans, akd truthy or falsys
 let passUpper = confirm("Do you desire uppercase characters?");
  console.log(passUpper);

 let passLower = confirm("Do you desire lowercase?");
console.log(passLower);

 let passNumber = confirm("Do you desire numbers?");
  console.log(passNumber);

 let passSymbols = confirm("Do you desire symbols");
  console.log(passSymbols);

  // if statement.  if all selections are not selected, as denoted by the && "AND" operator , program ends.
  if (!passUpper && !passLower && !passNumber && !passSymbols) {
    console.log('At least one character set must be selected.  Please refresh the page and try again.');
    return;
  }

  // Variables used for the password generator.
  // Cleaned up the the aid of tutor Ddominique Meeks Gombe.
  let password = "";
  let characters = "";
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let symbols = '!@#$%^&*';

  // If statements.  If a certain item was selected, then run that if statement, then run the generator for that selection.
  if (passUpper) {
    characters += upperCase;
    password += getRandomChar(upperCase); //ensures at least one uppercase char is in the password
  }
  if (passLower) {
    characters += lowerCase;
    password += getRandomChar(lowerCase);
  }
  if (passNumber) {
    characters += numbers;
    password += getRandomChar(numbers);
  }
  if (passSymbols)
 {
    characters += symbols;
    password += getRandomChar(symbols);
  }

  //  While statement.  While password generation is below the length selected, continue generating random characters until that limit is reached.
  while(password.length < passLength) {
    password += getRandomChar(characters)
  }
  
  // console.log for testing purposes
  // console.log(password);

  return password;

}  // function ends

// Function for generating the passwords, using the Math.random() methods.
function getRandomChar(characters){
  const random = Math.floor(Math.random() * characters.length);
  return characters.charAt(random);
}

//  Function for when the button is pressed on the webpage to generate the password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);