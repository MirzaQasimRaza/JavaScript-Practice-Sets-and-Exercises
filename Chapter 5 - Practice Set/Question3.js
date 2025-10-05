/*
    Question 3 ---> Filter for numbers divisible by 10 from a given array
*/

let arr = [50,60,75,67,90,100,115];

let a = arr.filter((value)=>{
    if(value%10==0){
        return value;
    }
    else{
        return 0;
    }
})

console.log(a)