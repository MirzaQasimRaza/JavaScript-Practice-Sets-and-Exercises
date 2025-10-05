function updateClock() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are 0-based
    let year = date.getFullYear();

    // Formatting for two digits
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    // Update HTML
    document.getElementById("date").textContent = `Today's date : ${day}-${month}-${year}`;
    document.getElementById("hours").textContent = h + " :";
    document.getElementById("minutes").textContent = m + " :";
    document.getElementById("seconds").textContent = s;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
