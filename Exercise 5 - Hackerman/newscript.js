let terminal = document.getElementById("terminal");

function delayMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

async function showMessage() {
    // Message 1
    let m1 = await delayMessage("Initializing Hacking", 1000);
    let line1 = document.createElement("div");
    line1.textContent = m1;
    terminal.appendChild(line1);

    line1.textContent += await delayMessage(".", 500);
    line1.textContent += await delayMessage(".", 500);
    line1.textContent += await delayMessage(".", 500);

    // Message 2
    let m2 = await delayMessage("Hacking Jake's username", 1000);
    let line2 = document.createElement("div");
    line2.textContent = m2;
    terminal.appendChild(line2);

    line2.textContent += await delayMessage(".", 500);
    line2.textContent += await delayMessage(".", 500);
    line2.textContent += await delayMessage(".", 500);

    // Message 3
    let m3 = await delayMessage("Username found: jake17", 1000);
    let line3 = document.createElement("div");
    line3.textContent = m3;
    terminal.appendChild(line3);

    line3.textContent += await delayMessage(".", 500);
    line3.textContent += await delayMessage(".", 500);
    line3.textContent += await delayMessage(".", 500);

    // Message 4
    let m4 = await delayMessage("Connecting to Facebook", 1000);
    let line4 = document.createElement("div");
    line4.textContent = m4;
    terminal.appendChild(line4);

    line4.textContent += await delayMessage(".", 500);
    line4.textContent += await delayMessage(".", 500);
    line4.textContent += await delayMessage(".", 500);

    // Message 5
    let m5 = await delayMessage("💀 Your Computer Has Been Hacked 💀");
    let line5 = document.createElement("div");
    line5.textContent = m5;
    terminal.appendChild(line5);
}

showMessage();
