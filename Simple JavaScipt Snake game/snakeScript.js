/*
    Author: Rishit Patel
    Date: 18 Nov, 2019
    Description: Simple Snake Game JavaScipt
*/

window.onload = function () {
    document.addEventListener("keyup", keyPush);
    canv = document.getElementById("gameC");
    ctx = canv.getContext("2d");
    setInterval(game, 1311 / 15);
}
var playerX = playerY = 7;
var gridSize = tileC = 20;
var appleX = 7;
var appleY = 2;
var xv = yv = 0;
var trail = [];
var tail = 6;
var score = 0;
function game() {
    document.getElementById("score").innerText = score;
    playerX += xv;
    playerY += yv;
    if (playerX < 0) {
        playerX = tileC - 1;
    }
    if (playerX > tileC - 1) {
        playerX = 0;
    }
    if (playerY < 0) {
        playerY = tileC - 1;
    }
    if (playerY > tileC - 1) {
        playerY = 0;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "white";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
        if (trail[i].x == playerX && trail[i].y == playerY) {
            tail = 6;
            score = 0;
        }
    }
    trail.push({ x: playerX, y: playerY });
    while (trail.length > tail) {
        trail.shift();
    }

    if (appleX == playerX && appleY == playerY) {
        tail++;
        score++;
        appleX = Math.floor(Math.random() * tileC);
        appleY = Math.floor(Math.random() * tileC);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);
}
function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            xv = -1; yv = 0;
            break;
        case 38:
            xv = 0; yv = -1;
            break;
        case 39:
            xv = 1; yv = 0;
            break;
        case 40:
            xv = 0; yv = 1;
            break;
    }
}
