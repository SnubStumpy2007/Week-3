// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Create variables in an object for the various characters in the password

// https://www.tutorialstonight.com/password-generator-in-javascript
function generatePassword() {
 

  // prompts for selelctions
  // first prompt.  Uses a prompt, then a parse to an integer.  Then uses an if statement to check the length or if the entry is an integer.  Program terminates
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


  while(password.length < passLength) {
    password += getRandomChar(characters)
  }
  
  console.log(password);

  return password;

  // functions for generating random passwords



}  // function ends

function getRandomChar(characters){
  const random = Math.floor(Math.random() * characters.length);
  return characters.charAt(random);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// if (passNumber === "Yes") {
//   console.log("yes for lowercase.  place code here")
//  } else if ( passNumber === "No") {
//   console.log("no.  exit loop")
//  } else {
//   alert("Enter another value");
//  }
