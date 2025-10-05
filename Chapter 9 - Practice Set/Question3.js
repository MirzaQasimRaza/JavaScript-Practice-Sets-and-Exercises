/*
    Create a promise which rejects after 3 seconds. Use an
    async/await to get it's value. Use a try catch
    to handle its error.

*/


let promise = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("I have been rejected..."))
        },3000)
    })
}

async function gettingData(){
    try{
    let getData = await promise();
        console.log(getData);
    }
    catch(error){
        console.log("This error has been handled.");
        console.log(error.message);
    }
}

gettingData();

