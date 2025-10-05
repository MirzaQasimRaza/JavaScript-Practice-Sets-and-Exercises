/*
    Question ---> Use reduce to calculate the factorial of a given number from an array of first n
    natural numbers. (n being the number whose factorial needs to be calculated)
*/

let arr = [1,2,3,4,5,6];

let a = arr.reduce((a,b)=>{
    return a*b;
})

console.log("The factorial of first 6 natural numbers is: ",a);