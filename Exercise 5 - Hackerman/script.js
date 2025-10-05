let terminal = document.getElementById("terminal");

function delayMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

async function loadData() {
    let m1 = await delayMessage("Initializing Hack Program....", 1000);
    terminal.innerHTML += `<div>${m1}</div>`;

    let m2 = await delayMessage("Hacking Jake's username....", 1000);
    terminal.innerHTML += `<div>${m2}</div>`;

    let m3 = await delayMessage("Username found: jake17....", 1000);
    terminal.innerHTML += `<div>${m3}</div>`;

    let m4 = await delayMessage("Connecting to Facebook....", 1000);
    terminal.innerHTML += `<div>${m4}</div>`;
}

loadData();
