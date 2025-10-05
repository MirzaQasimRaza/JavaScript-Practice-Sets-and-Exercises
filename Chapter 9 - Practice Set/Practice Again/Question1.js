// Question 1 Solution

function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);

        script.onload = function(){
            alert("Script is loaded successfully.");
            console.log("Script is loaded...");
        }

        script.onerror = function(){
            console.log("Failed to execute the script.");
        }
    })
}

let promise = loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js');

promise.then((value)=>{
    console.log(value);
    // alert("Script has been loaded successfully.");
})
.catch((error)=>{
    console.log(error);
})