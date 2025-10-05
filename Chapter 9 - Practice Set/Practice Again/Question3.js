// Solution Question 3

function promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Something went wrong while loading the script."));
        },3000)
    })
}

async function getData(){
    try{
        let data = await promise();
        console.log(data);
    }
    catch(error){
        console.log(error);
        console.log(error.message);
    }
}

getData();

