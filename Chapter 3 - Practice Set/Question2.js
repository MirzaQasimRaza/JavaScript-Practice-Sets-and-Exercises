/* Write the program in Q1 using for in loop */

const marks = {
    "Harry" : 98,
    "Rohan" : 70,
    "Aakash": 7,
}

for(let a in marks){
    console.log("The marks of " + a + " is " + marks[a]);
}