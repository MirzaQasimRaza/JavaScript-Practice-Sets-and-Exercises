function updateClock(){
   
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    document.getElementById("date").textContent = `Today's Date: ${day}-${month}-${year}`;
    document.getElementById("hours").textContent = h + " :";
    document.getElementById("minutes").textContent = m + " :";
    document.getElementById("seconds").textContent = s;

}

updateClock();

setInterval(updateClock,1000);