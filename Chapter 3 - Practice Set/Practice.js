// Solution 1

let marks = {
    "harry" : 98,
    "rohan" : 70,
    "aakash" : 7,
}

for(let i=0; i<Object.keys(marks); i++){
    console.log(Object.keys(marks)[i] + " marks are: " + marks[Object.keys(marks)[i]]);
}

console.log("Hello World")


// Solution 2

for(let a in marks){
    console.log(marks[a]);
}

// Solution 3

let correctNumber = 7;
let i;

do{
    console.log("Try Again");
    i = prompt("Enter the correct Number");
    i = Number.parseInt(i);
}while(i!=correctNumber)

console.log("Congratulations... You Chose the Correct Number");

// Solution 4

const mean = (a,b,c,d) => {
    return a+b+c+d/4;
}

console.log("The Mean is: " + mean(4,5,6,7));