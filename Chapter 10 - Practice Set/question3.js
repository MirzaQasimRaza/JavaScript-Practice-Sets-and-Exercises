let noteNumber;
let note;

noteNumber = prompt("Enter the note number");
note = prompt("Enter your note");

localStorage.setItem(noteNumber,note);

let key = prompt("Enter the key number to read the following note.");

if(key==noteNumber){
    alert("Note has been fetched.");
    alert("Your note is: " + localStorage.getItem(key));
}
else{
    alert("Following key " + key + " does not exist in localStorage.");
}
