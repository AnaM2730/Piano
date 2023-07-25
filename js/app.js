const keys = document.querySelectorAll('.key');

const handleMouseDown = (key) => { /* muda de estilo/background */
key.style.background = '#ddd'; /* quando clicar no mouse */
}

const handleMouseUp = (key) => { /* muda de estilo/background */
key.style.background = 'white'; /* quando soltar o mouse */
}


keys.forEach((key) => { /* forEach - adiciona em cada elemento */
    key.addEventListener('mousedown', () => handleMouseDown(key)) /* adiciona click */
/* mousedown - quando clicar no mouse */

    key.addEventListener('mouseup', () => handleMouseUp(key)) /* adiciona click */

}); 
















