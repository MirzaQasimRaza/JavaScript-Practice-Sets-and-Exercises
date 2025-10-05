let input = document.getElementById("input");
let create = document.getElementById("create");
let deleteTodo = document.getElementById("delete");
let access = document.getElementById("access");
let todo = document.getElementById("Todo");

// Auto-incrementing ID for keys
let count = localStorage.length + 1;

create.addEventListener("click", () => {
    let value = input.value.trim();
    if (value !== "") {
        localStorage.setItem(`todo-${count}`, value);
        alert("To-Do note has been created.");
        input.value = "";
        count++;
    } else {
        alert("Please enter a task.");
    }
});

deleteTodo.addEventListener("click", () => {
    let keyToDelete = prompt("Enter the key of the To-Do to delete (e.g. todo-1)");
    if (localStorage.getItem(keyToDelete)) {
        localStorage.removeItem(keyToDelete);
        alert("To-Do note has been deleted.");
    } else {
        alert("No To-Do found with that key.");
    }
});

access.addEventListener("click", () => {
    todo.innerHTML = `<h2>Your To-Do's</h2>`; // Reset list

    if (localStorage.length === 0) {
        todo.innerHTML += "<p>No To-Do's available.</p>";
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("todo-")) {
            let value = localStorage.getItem(key);
            let p = document.createElement("p");
            p.textContent = `${key}: ${value}`;
            todo.appendChild(p);
        }
    }
});


