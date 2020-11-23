// Assignment code here

var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "/", ",", "."];
var charactersArr = [];


function generatePassword() {
  window.alert("Welcome to Password Generator")
  window.alert("Please selec the following criteria");

  var passwordLenght = window.prompt("Please specify the lenght of your password! Range from 8 to 128 characters!")
  if (passwordLenght < 8 || passwordLenght > 128 || passwordLenght === "" || passwordLenght === null) {
    window.alert("Invalid entry. Please Try again.");
    return generatePassword();
  } else {
    console.log(passwordLenght);
  }
//  window.alert("You have selected a password of the lenght of " + passwordLenght);

  var lowerCase = window.confirm("Would you like to have lowercase?");
  if (lowerCase) {
    charactersArr = charactersArr.concat(lowerArr);
  } else {
    console.log(lowerArr);
  }

  var upperCase = window.confirm("Would you like to have uppercase?");
  if (upperCase) {
    charactersArr = charactersArr.concat(upperArr);
  } else {
    console.log(upperArr);
  }

  var numeric = window.confirm("Would you like to have numbers?");
  if (numeric) {
    charactersArr = charactersArr.concat(numericArr);
  } else {
    console.log(numericArr);
  }

  var specialCharacters = window.confirm("Would you like to have special character?");
  if (specialCharacters) {
    charactersArr = charactersArr.concat(specialArr);
    console.log(charactersArr);
  } else {
    console.log(specialArr);
  }
  
  var password = "";
  for (var i = 0; i < passwordLenght; i++) {
    var randomNum = Math.floor(Math.random() * charactersArr.lenght);
    password = password + charactersArr[randomNum];
  }
  console.log(password); 
  return password;
} 
  




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
