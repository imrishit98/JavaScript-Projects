/**
 * Author: Rishit Patel 
 * Date: Nov 27, 2019
 * Description: Hi-Low Game 
 */


var theNum = 0;
var counter = 0;
var db;
var name;

function firebaseDB() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
}
function randomNum() {
    firebaseDB();
    theNum = Math.floor((Math.random() * 100) + 1);
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
    if (numIn > theNum) {
        document.getElementById("theIcon").className = "fas fa-arrow-down";
        document.body.style.backgroundColor = "red";
    }
    else if (numIn < theNum) {
        document.getElementById("theIcon").className = "fas fa-arrow-up";
        document.body.style.backgroundColor = "red";
    }
    else if (numIn == theNum) {
        document.getElementById("theIcon").className = "fas fa-check-circle";
        document.getElementById("theGuessing").style.display = "none";
        document.getElementById("correctNum").innerHTML = theNum;
        document.getElementById("congo").style.display = "block";
        document.body.style.backgroundColor = "limegreen";
        name = prompt("Please enter your name");
        submitScore();
    }
    document.getElementById("numInput").value = "";
}

function submitScore() {
    var data = {
        Name: name,
        Guesses: counter
    }
    var ref = db.ref('Hi-Low/guessScore');
    ref.push(data);

}