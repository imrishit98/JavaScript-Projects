var points = 0;
function addMoney() {
    points = prompt("Add money to play!");
    document.getElementById("points").innerHTML = "$" + points;
}
function startGame() {
    var lose = 0;
    var score = 0;
    var count = 0;
    document.getElementById("result").innerHTML = "You Win!";
    for (count = 1; count < 5; count++) {
        var num = Math.floor((Math.random() * 4) + 1);
        document.getElementById("suits" + count).src = "suit-" + num + ".png";
        if (num == 4) {
            lose = 1;
            document.getElementById("result").innerHTML = "You Lose!";
        }
        else if (num == 2 || num == 3) {
            score += 3;
        }
        if (score == 12) {
            score = score * 4;
        }
        if (score == 9) {
            score = score * 3;
        }
    }
    if (lose == 1) {
        document.getElementById("score").innerHTML = 0;
        points -= 8.5;
    }
    else {
        points += score;
        document.getElementById("score").innerHTML = score;
    }
    document.getElementById("points").innerHTML = "$" + points;

    /*ranNum1 = Math.floor((Math.random() * 4) + 1);
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
    }*/
}

function openNav() {
    document.getElementById("mySidenav").style.width = "351px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}