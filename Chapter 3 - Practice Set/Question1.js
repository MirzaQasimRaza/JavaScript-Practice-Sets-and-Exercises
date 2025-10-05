/* Write a program to print the marks of a student in an object using for loop */

const marks = {
    "harry" : 98,
    "rohan" : 70,
    "aakash": 7,
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}