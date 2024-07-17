 // Define necessary variables
 const generateBtn = document.getElementById("generate");
 const lengthInput = document.getElementById("length");
 const uppercaseInput = document.getElementById("uppercase");
 const lowercaseInput = document.getElementById("lowercase");
 const numbersInput = document.getElementById("numbers");
 const symbolsInput = document.getElementById("symbols");
 const passwordResult = document.querySelector(".result");

 // Define character arrays
 const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
 const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
 const numbers = "0123456789".split("");
 const symbols = "!@#$%^&*()_+[]{}|;:,.<>?".split("");

 // Add an event listener to the generate button
 generateBtn.addEventListener("click", function(e) {
     // Prevent the default form submission behavior
     e.preventDefault();

     // Get the user's input
     const length = +lengthInput.value; // get the password length from the input field
     const hasUppercase = uppercaseInput.checked; // check if uppercase letters are selected
     const hasLowercase = lowercaseInput.checked; // check if lowercase letters are selected
     const hasNumbers = numbersInput.checked; // check if numbers are selected
     const hasSymbols = symbolsInput.checked; // check if symbols are selected

     // Initialize the password and characters arrays
     let password = '';
     let characters = [];

     // Add characters to the characters array based on the user's input
     if (hasUppercase) {
         characters = characters.concat(uppercaseLetters);
     }
     if (hasLowercase) {
         characters = characters.concat(lowercaseLetters);
     }
     if (hasNumbers) {
         characters = characters.concat(numbers);
     }
     if (hasSymbols) {
         characters = characters.concat(symbols);
     }

     // Check if no option is selected
     if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
         // Display the error message
         passwordResult.innerHTML = "Please select at least one character type.";
         return; // Exit the function early
     }

     // Generate the password
     for (let i = 0; i < length; i++) {
         // Select a random character from the characters array and add it to the password
         password += characters[Math.floor(Math.random() * characters.length)];
     }

     // Display the generated password
     passwordResult.innerHTML = password;
 });