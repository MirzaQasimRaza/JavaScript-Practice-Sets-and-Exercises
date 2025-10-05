// Create a website which is capable of storing bookmarks of your favourite websites using href

let google = document.getElementById("google");
let youtube = document.getElementById("youtube");
let chatgpt = document.getElementById("chatgpt");
let facebook = document.getElementById("facebook");
let bookmarks = document.getElementById("bookmarks");

google.addEventListener("click",()=>{
    bookmarks.insertAdjacentHTML("afterend","You have visited Google.com <br></br>");
})

youtube.addEventListener("click",()=>{
    bookmarks.insertAdjacentHTML("afterend","You have visited youtube.com <br></br>");
})

chatgpt.addEventListener("click",()=>{
    bookmarks.insertAdjacentHTML("afterend","You have visited chatgpt.com <br></br>");
})

facebook.addEventListener("click",()=>{
    bookmarks.insertAdjacentHTML("afterend","You have visited facebook.com <br></br>");
})

