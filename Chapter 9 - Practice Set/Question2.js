// Write the same program from previous question and use async/await Syntax

async function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);

        script.onload = function(){
            alert("I am a script inside of async function and I am running successfully.");
            resolve("Program has been runned successfully..");
        }

        script.onerror = function(){
            reject("I am a script and I've been rejected...");
        }
    })
}

async function main(){
    try{
        let runscript = await loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js");
        console.log(runscript);
    }
    catch(error){
        console.log(error);
    }
}

main();

