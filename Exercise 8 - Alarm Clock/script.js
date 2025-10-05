function updateClock(){
    let sec = document.getElementById("sec");
    let min = document.getElementById("min");
    let hrs = document.getElementById("hrs");

    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    let secDeg = seconds * 6;
    let minDeg = minutes * 6 + seconds * 0.1;
    let hrDeg = ((hours % 12) * 30) + (minutes * 0.5);
    sec.style.transform = `rotate(${secDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hrs.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(updateClock,1000);
updateClock();