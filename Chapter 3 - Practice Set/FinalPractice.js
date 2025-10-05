// Solution 1

let marks = {
    "Harry" : 98,
    "Rohan" : 80,
    "Aakash" : 7,
}

for(let i=0; i<Object.keys(marks); i++){
    console.log(Object.keys(marks)[i] + " Marks is: " + marks[Object.keys(marks)[i]]);
}

// Solution 2

for(let a in marks){
    console.log(marks[a]);
}

// Solution 3

let correctNumber = 7;

let i;

do{
    console.log("Try again");
    i = prompt("Enter the correct Number");
    i = Number.parseInt(i);
}while(i!=correctNumber);

// Solution 5

function mean(a,b,c,d,e){
    return a+b+c+d+e/5;
}

console.log("The mean of 5 numbers is: " + mean(2,3,4,5,6));