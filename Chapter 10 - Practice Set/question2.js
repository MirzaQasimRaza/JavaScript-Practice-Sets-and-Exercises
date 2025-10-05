// Question - 2 : Create a note saving app which stores your note to localStorage.

localStorage.clear();

let noteNumber;
let note;

do{
    noteNumber = prompt("Enter note number");
    note = prompt("Enter the note");
    
    localStorage.setItem(noteNumber,note);
    alert("Note has been saved.");
}while(confirm("Do you want to add another note?"));
