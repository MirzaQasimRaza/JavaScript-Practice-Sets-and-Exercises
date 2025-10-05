let input = document.getElementById("input");
let create = document.getElementById("create");
let deleteTodo = document.getElementById("delete");
let access = document.getElementById("access");
let getTodo = document.getElementById("Todo");

let count = localStorage.length + 1;

create.addEventListener("click",()=>{
    let value = input.value.trim();
    if(value!==""){
        localStorage.setItem(`todo-${count}`,value);
        alert("To-do task has been created.");
        input.value = "";
        count++;
    } else{
        alert("Please enter the task.");
    }
})

deleteTodo.addEventListener("click",()=>{
    let deletekey = prompt("Enter the task you want to delete (e.g todo-1)");
    if(localStorage.getItem(deletekey)){
        localStorage.removeItem(deletekey);
        alert("Task has been deleted.");
    }
    else{
        alert("Task doesn't exist.");
    }
})

access.addEventListener("click",()=>{
    getTodo.innerHTML = "<h2>Your To-Do's Tasks";

    if(localStorage.length === 0){
        getTodo.innerHTML += "No task exist.";
    }

    for(let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        if(key.startsWith("todo-")){
            let value = localStorage.getItem(key);
            let p = document.createElement("p");
            p.textContent = `${key}: ${value}`;
            getTodo.appendChild(p);
        }
    }
})

// += appends the content and = replaces the content