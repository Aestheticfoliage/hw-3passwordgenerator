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

function generatePassword() {
  //Varaiables

  var addCharacters = "";
  var passwordLength = window.prompt(
    "how long would you like your password please choose between 8 and 128 characters"
  );
  console.log("" + passwordLength);

  var upperCase = window.confirm(
    "would you like use upper case letters yes or no:"
  );
  console.log("" + upperCase);

  //Ask to incorrect
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter valid number of characters");
    //Ask the user again
    passwordLength = window.prompt(
      "how long would you like your password please choose between 8 and 128 characters"
    );
  } else {
    if (upperCase === true) {
      addCharacters = addCharacters + upperCaseList.join("");
    }
    console.log("First Time", addCharacters);

    var lowerCase = window.confirm(
      "would you like to use lower case letters yes or no:"
    );
    console.log("" + lowerCase);
    if (lowerCase === true) {
      addCharacters = addCharacters + lowerCaseList.join("");
    }
    var numbers = window.confirm("would you like to use numbers yes or no:");
    console.log("" + numbers);
    if (numbers === true) {
      addCharacters = addCharacters + numberList.join("");
    }

    var symbols = window.confirm("would you like to use symbols yes or no:");
    console.log("" + symbols);
    if (symbols == true) {
      addCharacters = addCharacters + symbolList.join("");
    }
    console.log("Final List of string ", addCharacters);

    var result = "";
    //FOr loop
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
