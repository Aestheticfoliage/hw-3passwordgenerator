var upperCase =
  ("A",
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
  "Z");

var lowerCase =
  ("a",
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
  "z");

var numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");

var symbols = ("!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=");
var yes = "true";
var no = "false";

var passwordArray = [""];

var passwordLength = "";
// expression one adds selected value to password array if true
//var expression1 = console.log(yes == this)
var upperCase = window.prompt(
  "would you like use upper case letters yes or no:"
);
console.log("" + upperCase);
// var passwordArray = function isequal(upperCase,yes){
//   if  (upperCase === yes){
//     console.log(passwordArray['']);
//     else (upperCase == yes);{console.log ('')}
//     else (upperCase === no);{
//       console.log('');
      
//     }
//   }


var lowerCase = window.prompt(
  "would you like to use lower case letters yes or no:"
);
console.log("" + lowerCase);
var numbers = window.prompt("would you like to use numbers yes or no:");
console.log("" + numbers);
if (lowerCase == yes); 

console.log([passwordArray]);

var symbols = window.prompt("would you like to use symbols yes or no:");
console.log("" + symbols);
if (symbols == true) {
  symbols + [passwordArray];
}
console.log([passwordArray]);
var passwordLength = window.prompt(
  "how long would you like your password please choose between 8 and 128 characters"
);
console.log("" + passwordLength);

// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
