/*
    Question Ex1 :

    Write a Javascript program to generate a random number and store it in a variable. The program then takes an input
    from the user to tell them whether the guess was Correct, greater or lesser than the original number.
    100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed.
    Number should be between 1 - 100

*/

/*
    Question Ex1 :

    Write a Javascript program to generate a random number and store it in a variable. The program then takes an input
    from the user to tell them whether the guess was Correct, greater or lesser than the original number.
    100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed.
    Number should be between 1 - 100
*/

const readline = require("readline-sync");

let no_of_guesses = 0;
let guess_no = null;
let random_no = Math.floor(Math.random() * 100) + 1; // Ensures number is between 1-100

console.log("Welcome to the Number Guessing Game!");

while (guess_no !== random_no) {
    guess_no = parseInt(readline.question("Enter a number between 1-100: "));

    if (isNaN(guess_no) || guess_no < 1 || guess_no > 100) {
        console.log("Invalid input! Please enter a valid number between 1 and 100.");
        continue; // Skip this loop iteration
    }

    no_of_guesses++;

    if (guess_no < random_no) {
        console.log("Select a Higher Number Please");
    } else if (guess_no > random_no) {
        console.log("Select a Lower Number Please");
    } else {
        console.log(`🎉 Congratulations! You guessed the number, which was ${guess_no}.`);
        console.log(`You guessed the number in ${no_of_guesses} attempts.`);
        break;
    }
}
