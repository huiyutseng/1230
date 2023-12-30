
// Global variables
let secretNumber = generateRandomNumber();

// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check the user's guess
function checkGuess() {

  // Local variable
  let guessedCorrectly = false;

  // 5. Here should be an if-else statement.
  while (!guessedCorrectly) {
      // Check if the guess is correct
      let userGuess = document.getElementById("userGuess").value;
      if (parseInt(userGuess) === secretNumber) {
        // Set the flag to true to exit the loop
        guessedCorrectly = true;
        alert("Congratulations! You guessed the correct number.");
        showImageAndPlaySound("picture2.jpeg", "music2.mp3");
      } else {
        // Ask the user to continue guessing
        alert("Sorry, try again!");
        showImageAndPlaySound("picture1.jpeg", "music1.mp3");
        document.getElementById("userGuess").value = "";
        return; // exit the function to prevent further execution
      }
    }
  // If the answer is correct, then output "Congratulations! You guessed the correct number!" with picture2 and music2.
  secretNumber = generateRandomNumber();
  // If the answer is wrong, then output "Sorry, try again!" with picture1 and music1.

  // P.S. Generate a new random number for the next round after getting the correct answer.

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}


// Function to show image and play sound

function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}

//trigger the buttom with enter key
document.getElementById("userGuess").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      checkGuess();
  }
});

// Event listener to trigger checkGuess on clicking anywhere on the page
window.addEventListener("click", function () {
  // Check the flag and execute the function if needed
  if (!guessedCorrectly) {
    checkGuess();
  }
}, false);