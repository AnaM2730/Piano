const keys = document.querySelectorAll(".key");

/* REPRODUÇÃO DAS NOTAS */
const playNote = (note) => {
    const audio = new Audio(`../note/${note}.wav`);
    audio.play();
};

/* click mouse */
const handleMouseDown = (key) => {
    /* muda de estilo/background */
    playNote(key.getAttribute("data-note"));

    if (key.className.includes("preta")) {
        /* key.style.background = 'linear-gradient(#222, black)';
        key.style.borderBottom = 'none';
        key.style.height = '148px'; */
        key.classList.add("preta-pressionada");
        return;
    }

    key.style.background = "#ddd"; /* quando clicar no mouse */
};

const handleMouseUp = (key) => {
    /* muda de estilo/background */

    if (key.className.includes("preta")) {
        key.classList.remove("preta-pressionada");
        return;
    }

    key.style.background = "white"; /* quando soltar o mouse */
};

keys.forEach((key) => {
    /* forEach - adiciona em cada elemento */
    key.addEventListener("mousedown", () =>
        handleMouseDown(key)
    ); /* adiciona click */
    /* mousedown - quando clicar no mouse */

    key.addEventListener("mouseup", () =>
        handleMouseUp(key)
    ); /* adiciona click */
});
