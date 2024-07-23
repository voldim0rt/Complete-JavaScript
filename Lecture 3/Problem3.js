//Create a game where you start with the random number. Ask the user to keep guessing the game number
//until the user enters the correct value

let gameNum = 25;

let userNum = prompt("Guess the number: ");

while (userNum != gameNum) {
   userNum= prompt("You entered the wrong number. Try again!");
}

alert("Congratulations! You guessed the number correctly.");
// console.log("Congratulations! You guessed the number correctly.");
