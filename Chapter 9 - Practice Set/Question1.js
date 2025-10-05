// Write a program to load a javascript file in a browser using Promises. 
// Use .then() to display an alert when the load is complete.

function loadScript(src){

    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        
        script.onload = function(){
            resolve("I am a script and I have been executed successfully.");
        }
        
        script.onerror = function(){
            reject("Script failed to load...");
        }
    })
}

let loadscript = loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js');
    
loadscript.then((value)=>{
    alert(value);
})
.catch((error)=>{
    console.log(error);
})

