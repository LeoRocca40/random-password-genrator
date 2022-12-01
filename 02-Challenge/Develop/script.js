// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerCase = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specialCharacters =  ['!','@','#','&','*','+','?','/']
let length = [8, 128]
let criteria = [lowerCase, upperCase, numbers, specialCharacters]

// Write password to the #password input
function generatePassword() {
  length = prompt("How long?");
  if (length < 8 || length >128) {
    alert("Must be in between 8-128 characters long");
    generatePassword();
  } else {
    lowerCase = confirm("Want lowercase?");
    upperCase = confirm("Want uppercase?");
    numbers = confirm("Want numbers?");
    specialCharacters = confirm("Want special characters?");
  };
  let criteriaSelector = [lowerCase, upperCase, numbers, specialCharacters];
  let criteria2 = [];
  for (i=0; i < criteria.length; i++){
    if (criteriaSelector[i]){
      criteria2=criteria2.concat(criteria[i]);
    };
};
password = ""
for (i=0; i < length; i++){
  newChar = criteria2[Math.floor((Math.random())*criteria2.length)];
  password = password.concat(newChar);
}
console.log(password)
return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
