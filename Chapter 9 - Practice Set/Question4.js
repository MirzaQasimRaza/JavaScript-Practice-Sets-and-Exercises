/*
    Write ap rogram using Promise.all() inside an async/await to await 3 promises.
    Compare its results with the case where we await these promises one by one.
*/

async function promise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am promise 1 and I have been resolved.");
        },2000)
    })
}

async function promise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am promise 2 and I have been resolved.");
        },1000)
    })
}

async function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am promise 3 and I have been resolved.");
        },3000)
    })
}

async function run(){
    console.time("Run");
    // let p1 = await promise1();
    // let p2 = await promise2();  -----> Yeh sab 6 seconds mein run kar raha hai not good.
    // let p3 = await promise3();

    let p1 = promise1();
    let p2 = promise2();
    let p3 = promise3();
    let p1p2p3 = await Promise.all([p1,p2,p3]); // ----> This whole program took 3 seconds very good.
    console.log(p1p2p3);
    console.timeEnd("Run");
}

run();