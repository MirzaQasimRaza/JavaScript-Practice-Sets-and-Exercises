/* Write a program to print "try again" until the user enters the correct number */

let correctNumber = 4;

let i;

while(i!=correctNumber){
    console.log("Try Again");
    i = prompt("Enter the correct number");
    i = Number.parseInt(i);
}

console.log("You have entered the correct number ");