// list of all possible characters line 2-100
// add a .split
let capital = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

let lower = [
  'a', 
  'b', 
  'c', 
  'd', 
  'e', 
  'f', 
  'g', 
  'h', 
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

let numbers = [
  '0', 
  '1', 
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9'
];

let special = [
  '!',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  ']',
  '{',
  '}',
  '|',
  '<',
  ',',
  '.',
  '>',
  '?',
  '/',
  ';',
  ':',
  '`',
  '~',
]
// password options


function determineTheUsersPW() {
  var length = parseInt (
  prompt("Please choose your password length between 8 - 128")
  );   
    
  var hasSpecial = confirm(
    "Click OK if you want special characters."
  );

  var hasNumbers = confirm(
    "Click OK if you want Numbers."
  );

  var hasCapital = confirm(
    "Click OK if you want Capital Letters."
  );

  var hasLower = confirm(
    "Click OK if you want Lower-Case Letters."
  )

    var pwOptions = {
      length: length,
      hasSpecial: hasSpecial,
      hasNumbers: hasNumbers,
      hasCapital: hasCapital,
      hasLower: hasLower,
    }

    return pwOptions
}




// password generator math
function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
}

function generatePassword() {
  var options = determineTheUsersPW()
  var result = [];
  var allCharacters = [];
  var exactCharacters = [];
  
  if (options.hasSpecial) {
    allCharacters = allCharacters.concat(special)
    exactCharacters.push(getRandom(special))
  }

  if (options.hasNumbers) {
    allCharacters = allCharacters.concat(numbers)
    exactCharacters.push(getRandom(numbers))
  }

  if (options.hasCapital) {
    allCharacters = allCharacters.concat(capital)
    exactCharacters.push(getRandom(capital))
  }

  if (options.hasLower) {
    allCharacters = allCharacters.concat(lower)
    exactCharacters.push(getRandom(lower))
  }
  
  // password generator math results
    for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(allCharacters)
    result.push(randomChar)
    }

    for (var i = 0; i < exactCharacters.length; i++) {
      result[i] = exactCharacters[i];
    }

    return result.join('')
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
