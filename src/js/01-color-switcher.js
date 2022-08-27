const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let randomColor = null;
let randomColorActive = false;

startBtn.addEventListener('click', () => {
    if (randomColorActive) {
        return;
    }
    randomColorActive = true;
    randomColor = setInterval (() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(randomColor);
    randomColorActive = false; 
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
