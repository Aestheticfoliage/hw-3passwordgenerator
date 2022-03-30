//GLOBAL VARIABLES
var upperCaseList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCaseList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//console.log("number", numberList);
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
// generate password takes the property of add characters and 
function generatePassword() {
  //Varaiables

  var addCharacters = "";
  // this window prompt asks users for a length to assign to passwordLength
  var passwordLength = window.prompt(
    "how long would you like your password please choose between 8 and 128 characters"
  );
  console.log("" + passwordLength);
// this window asks the user to confirm whether or not they would like to use uppercase letters and then logs they're response
  var upperCase = window.confirm(
    "would you like use upper case letters yes or no:"
  );
  console.log("" + upperCase);

  //checks to make sure the input value is within the required values
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter valid number of characters");
    //Ask the user again
    passwordLength = window.prompt(
      "how long would you like your password please choose between 8 and 128 characters"
    );
  } else {
    // if the value referenced in the window.confirm evaluates to true the list of uppercase characters is added to the addCharacters string
    if (upperCase === true) {
      addCharacters = addCharacters + upperCaseList.join("");
    }
    console.log("First Time", addCharacters);
// prompts user with a window.confirm function to confirm whether or not to use lowercase letters if the value returned evaluates as true the list of lowercase characters is added to the addCharacters string
    var lowerCase = window.confirm(
      "would you like to use lower case letters yes or no:"
    );
    console.log("" + lowerCase);
    if (lowerCase === true) {
      addCharacters = addCharacters + lowerCaseList.join("");
    }
    // prompts user with a window.confirm function to confirm whether or not to use numbers if the returned value evaluates to true it is included in the add characters string
    var numbers = window.confirm("would you like to use numbers yes or no:");
    console.log("" + numbers);
    if (numbers === true) {
      addCharacters = addCharacters + numberList.join("");
    }
// prompts user with a window.confirm function to confirm whether or not to use symbols if the returned value evaluates to true it is included in the add characters string
    var symbols = window.confirm("would you like to use symbols yes or no:");
    console.log("" + symbols);
    if (symbols == true) {
      addCharacters = addCharacters + symbolList.join("");
    }
    console.log("Final List of string ", addCharacters);

    var result = "";
    //FOr loop to generate a string based on the length requested by user  consisting of randomized values based on which variables were selected for the addCharacters string
    for (var i = 0; i < passwordLength; i++) {
      //Random char based on the addcharacter list
      var randomNumber = Math.floor(Math.random() * addCharacters.length);
      var randomLetter = addCharacters.charAt(randomNumber);
      console.log(randomLetter);
      //add all the letters
      result = result + randomLetter;
    }
  }

  //return the final combination of password
  return result;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
