// Solution question 4

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am promise 1 and I am resolved.");
    },2000)
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am promise 2 and I am resolved.");
    },1000)
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am promise 3 and I am resolved.");
    },3000)
})

async function getAllPromise(){
    console.time("start");
    let p1 = promise1;
    let p2 = promise2;
    let p3 = promise3;

    let p1p2p3 = await Promise.all([p1,p2,p3]);
    console.log(p1p2p3);
    console.timeEnd("start");
}

getAllPromise();