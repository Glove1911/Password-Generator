// Assigned Variables
var passwordLength;
var specialCharacter;
var upperCase;
var lowerCase;
var numeric;
var passwordChoice;

var character= ["!", "(",")", "#", "$", "%", "'", "&", "(", ")", "*", "+", "=", ",", "-", "_", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "//",  "^", "`", "~", "|", "{", "}"];

var num= [1,2,3,4,5,6,7,8,9];

var letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Function for uppercase coversion
var gotoUpper = x => x.toUpperCase()
// Convert array to uppercase letters
var letters2 = letters.map(gotoUpper);
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  passwordLength = parseInt(prompt("Choose your password length.  Password must be between 8 and 128 characters."));
  if (!passwordLength){
    alert("Must enter a value!");
  }
  else if (passwordLength < 8 || passwordLength > 128){
    passwordLength = parseInt(prompt("You must select between 8 and 128."));
  }

  else {
    specialCharacter = confirm("Will password have special characters?");
    upperCase = confirm("Will password contain uppercase letters?");
    lowerCase= confirm("Will password contain lowercase letters?");
    numeric= confirm("Will password contain numbers?");

    
  }

  if (!specialCharacter && !upperCase && !lowerCase && !numeric){
    passwordChoice = alert("You must select criteria!");
  }

  else if (specialCharacter && upperCase && lowerCase && numeric){
    passwordChoice = character.concat(num, letters, letters2);
  }

  else if (specialCharacter && upperCase && lowerCase){
    passwordChoice = character.concat(letters, letters2);
  }

  else if (specialCharacter && upperCase && numeric){
    passwordChoice = character.concat(letters2, num);
  }

  else if (specialCharacter && lowerCase && numeric){
    passwordChoice = character.concat(letters,num);
  }

  else if (num && lowerCase && upperCase){
    passwordChoice = num.concat(letters, letters2);
  }

  else if (specialCharacter && upperCase){
    passwordChoice = character.concat(letters2);

  }

  else if (specialCharacter && lowerCase){
    passwordChoice = character.concat(letters);

  }

  else if (specialCharacter && numeric){
    passwordChoice = character.concat(num);
  
  }

  else if (upperCase && lowerCase){
    passwordChoice = letters2.concat(letters);

  }

  else if (numeric && lowerCase){
    passwordChoice = num.concat(lowerCase);

  }

  else if (numeric && upperCase){
    passwordChoice = num.concat(upperCase);

  }

  else if (specialCharacter){
    passwordChoice = character;

  }

  else if (upperCase){
    passwordChoice = letters2;

  }
  
  else if (lowerCase){
    passwordChoice = letters;

  }

  else if  (numeric){
    passwordChoice = num;
  }

  var password = [];
    // For loop to generate password based on length choice
  for (var i = 0; i < passwordLength; i++){
   password.push (passwordChoice[Math.floor(Math.random() * passwordChoice.length)]); 
  }

  return password.join("");
}










 
