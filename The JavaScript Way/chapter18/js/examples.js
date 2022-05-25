// Chronometer
const secondCount = () => {
    const counter = Number(chronoElement.textContent);
    chronoElement.textContent = counter + 1;
};

const chronoElement = document.getElementById("chronometer");
const startStopElement = document.getElementById("startStop");
let countState = false;
let chronoInterval;

startStopElement.addEventListener("click", e => {
    if (countState) {
        countState = false;
        e.target.textContent = "Start";
        clearInterval(chronoInterval);
    } else {
        countState = true;
        e.target.textContent = "Stop";
        chronoInterval = setInterval(secondCount, 1000);
    }
});

// Bouncing ball

const moveBall = () => {
    const xBall = parseFloat(getComputedStyle(ballElement).left);
    const xMax = parseFloat(getComputedStyle(frame).width);
    if (xBall + ballWidth === xMax) {
        direction = -1;
    } else if (xBall <= 0) {
        direction = 1;
    }
    ballElement.style.left = (xBall + movement * direction) + "px";
    if (direction < 0) {
        ballElement.setAttribute("class", "rotateL");
    } else {
        ballElement.setAttribute("class", "rotateR");
    }
    ballAnimation = requestAnimationFrame(moveBall);
};

const ballElement = document.getElementById("ball");
const ballWidth = parseFloat(getComputedStyle(ball).width);
const movement = 5;
let direction = 1;
let ballAnimation;

document.getElementById("start").addEventListener("click", e => {
    ballAnimation = requestAnimationFrame(moveBall);
    document.getElementById("stop").disabled = false;
    e.target.disabled = true;
});

document.getElementById("stop").addEventListener("click", e => {
    cancelAnimationFrame(ballAnimation);
    e.target.disabled = true;
    document.getElementById("start").disabled = false;
    ballElement.setAttribute("class", "");
});