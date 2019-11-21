/*
    Author: Rishit Patel
    Date: 20 Nov, 2019
    Description: Escape The Spade Game
*/
function startGame() {
    ranNum1 = Math.floor((Math.random() * 4) + 1);
    ranNum2 = Math.floor((Math.random() * 4) + 1);
    ranNum3 = Math.floor((Math.random() * 4) + 1);
    ranNum4 = Math.floor((Math.random() * 4) + 1);
    document.getElementById("suits1").src = "suit-" + ranNum1 + ".png";
    document.getElementById("suits2").src = "suit-" + ranNum2 + ".png";
    document.getElementById("suits3").src = "suit-" + ranNum3 + ".png";
    document.getElementById("suits4").src = "suit-" + ranNum4 + ".png";
    if (ranNum1 == 4 || ranNum2 == 4 || ranNum3 == 4 || ranNum4 == 4) {
        document.getElementById("result").innerHTML = "You Lose!";
    }
    else {
        document.getElementById("result").innerHTML = "You Win!";
    }
}
