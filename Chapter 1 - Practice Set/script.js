/*
    Question 1 : Create a variable of type string and try to add a number to it.
*/

let a = "Qasim";
let b = 1;
// Answers
 console.log(a+1);  //Qasim1
 console.log(a+b); //Qasim1

/*
    Question 2 : Use typeof operator to find the datatype of the string in last question
*/

 console.log(typeof String); //---> Answer ---> Function
 console.log(typeof a) //---> Answer ---> String


/*
    Question 3 : Create a const object in javascript . Can you change it to hold a number later?
*/

// Answer ---> Yes you can

const obj = {
    name : "Toyota",
    model : "Corolla",
    year : 2024,
}

console.log(obj);

obj.year = 2025;
console.log(obj)

/*
    Question 4: Try to add a new key to the const objct in problem 3. Were you able to do it?
*/

// Answer yes

obj.color = "black";
console.log(obj);

/*
    Question 5: Write a Js Program to create a word-meaning dictionary of 5 words
*/

const dictionary = {
    "Elaborate" : "Explain in detail",
    "Sweeping" : "Cleaning",
    "Consuming" : "Using or Utilizing",
    "Swapping" : "Exchanging",
    "Exterminate" : "Remove or Eliminate",
}

console.log(dictionary);