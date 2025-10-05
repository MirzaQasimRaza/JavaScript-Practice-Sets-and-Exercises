// Question 2 solution

async function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);

        script.onload = function(){
            alert("Script is loaded successfully.");
            resolve("Script is loaded...");
        }

        script.onerror = function(){
            console.log("Failed to execute the script.");
        }
    })
}

async function main(){
    let loadData = await loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js');
    console.log(loadData);
}

main();
