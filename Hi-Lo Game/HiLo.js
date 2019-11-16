/*
    Author: Rishit Patel
    Date: 16 Nov, 2019
    Description: JavaScript for Hi-Lo game
*/
var theNum = 0;
var counter = 0;
function randomNum() {
    theNum = Math.floor((Math.random() * 100) + 1);
    console.log(theNum);
}

var input = document.getElementById("numInput");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("guessButton").click();
    }
});

function guessNum() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
    var numIn = 0;
    numIn = document.getElementById("numInput").value;
    console.log(numIn);
    if (numIn > theNum) {
        console.log("high");
        document.getElementById("theIcon").className = "fas fa-arrow-down";
        document.body.style.backgroundColor = "red";
        //document.body.style.backgroundImage = "linear-gradient(-90deg, red " + theNum + "%, green)";
        //document.body.style.backgroundImage = "linear-gradient(-90deg, red, green " + (100 * numIn) / theNum + "%)";
        //document.body.style.background = "linear-gradient(to right, rgba(0, 255, 0, 1) " + (((100 * numIn) / theNum)) + "%, rgba(255, 0, 0, 1) 100%)";
        //document.getElementById("mainContainer").style.background = "linear-gradient(90deg, rgba(0,255,16,1)" + (((100 * numIn) / theNum)) + "%, rgba(0,0,0,0) 100%)";
        console.log((((100 * numIn) / theNum) - 10));
    }
    else if (numIn < theNum) {
        console.log("low");
        document.getElementById("theIcon").className = "fas fa-arrow-up";
        document.body.style.backgroundColor = "red";
        //document.body.style.backgroundImage = "linear-gradient(-90deg, red, green " + (100 * theNum) / numIn + "%)";
        //document.body.style.background = "linear-gradient(to right, rgba(0, 255, 0, 1) " + (((100 * numIn) / theNum)) + "%, rgba(255, 0, 0, 1) 100%)";
        //document.getElementById("mainContainer").style.background = "linear-gradient(90deg, rgba(0,255,16,1)" + (((100 * numIn) / theNum)) + "%, rgba(0,0,0,0) 100%)";
        console.log((((100 * theNum) / numIn) - 10));
    }
    else if (numIn == theNum) {
        console.log("match");
        document.getElementById("theIcon").className = "fas fa-check-circle";
        document.getElementById("theGuessing").style.display = "none";
        document.getElementById("correctNum").innerHTML = theNum;
        document.getElementById("congo").style.display = "block";
        document.body.style.backgroundColor = "limegreen";
    }
    document.getElementById("numInput").value = '';
}
