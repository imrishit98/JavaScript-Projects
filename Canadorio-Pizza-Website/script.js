/*
Author: Rishit Patel
Date: Oct 18, 2019
Description: Build Pizza Assignment JavaScript
*/
var sizePrice = 0;
var toppingPrice = 1;
var crustPrice = 0;
var saucePrice = 0;
var toppingsCount = 0;
var totalPrice = 0;
var totalPrice1 = 0;
var sizeSelection = 0;
var crustSelection = 0;
var sauceSelection = 0;
var couponVal = 1;
var toppingsSelection = [];
var cheeseSelection = "";
var instructionsSelectionDone = "";
var deliverySelection = 0;
var couponSelection = "No coupon applied! You save 0$!! So sad!";
var aSize = 0;
var aCrust = 0;
var aSauce = 0;
var chckbox = 0;
var img = 0;
var src = 0;
//updateSize function to set price for size
function updateSize(aSize) {
  if (aSize == "small") {
    toppingPrice = 1;
    sizePrice = 3.99;
  } else if (aSize == "medium") {
    toppingPrice = 1.5;
    sizePrice = 5.99;
  } else if (aSize == "large") {
    toppingPrice = 2;
    sizePrice = 7.99;
  } else if (aSize == "xlarge") {
    toppingPrice = 2.5;
    sizePrice = 9.99;
  }
  //for order review
  sizeSelection = document.querySelector("input[name=size]:checked").value;
  document.getElementById("sizeChoice").innerHTML = sizeSelection;
  //calling setPrice function
  setPrice();
}
//updateCrust function to set price for crust
function updateCrust(aCrust) {
  if (aCrust == "thick") {
    crustPrice = 1;
    crustSelection = "Thick Crust";
  } else if (aCrust == "thin") {
    crustPrice = -1;
    crustSelection = "Thin Crust";
  } else if (aCrust == "regular") {
    crustPrice = 0;
    crustSelection = "Regular Crust";
  }
  //for order review
  crustSelection = document.querySelector("input[name=crust]:checked").value;
  document.getElementById("crustChoice").innerHTML = crustSelection;
  //calling setPrice function
  setPrice();
}
//updateSauce function to set price for sauce
function updateSauce(aSauce) {
  if (aSauce == "noSauce") {
    saucePrice = 0;
  } else {
    saucePrice = 1;
  }
  //for order review
  sauceSelection = document.querySelector("input[name=sauce]:checked").value;
  document.getElementById("sauceChoice").innerHTML = sauceSelection;
  //calling setPrice function
  setPrice();
}
//updateToppings function to set price for toppings
function updateToppings() {
  var i = 0;
  var theToppings = 0;
  toppingsSelection = [];
  theToppings = document.getElementsByName("toppings");
  toppingsCount = 0;
  theToppings[i] = 0;
  for (i = 0; i < theToppings.length; i++) {
    if (theToppings[i].checked == true) {
      toppingsSelection = toppingsSelection + theToppings[i].value + "<br>";
      toppingsCount++;
      document.getElementById(theToppings[i].className).style.opacity = 1;
    }
    else {
      document.getElementById(theToppings[i].className).style.opacity = 0;
    }
    //calling setPrice function
    setPrice();
    //for order review
    document.getElementById("toppingsChoice").innerHTML = toppingsSelection;
  }

}
//applyCoupon function to change price when coupon is applied
function applyCoupon() {
  document.getElementById("couponChoice").innerHTML = couponSelection;
  setPrice();
  var couponTxt = document.getElementById("aCoupon").value.toUpperCase();
  if (couponTxt == "SAVE10") {
    couponVal = 0.9;
    //document.getElementById("aCoupon").style.display = "none";
    //document.getElementById("couponAdd").style.display = "none";
    document.getElementById("couponAfter").style.display = "block";
    couponSelection = "Congratulations! You saved " + (totalPrice1 * 0.10).toFixed(2) + "$ on your order because you used SAVE10 coupon code!" + "<br /><br />";
  }
  else if (couponTxt == "SAVE25") {
    couponVal = 0.75;
    //document.getElementById("aCoupon").style.display = "none";
    //document.getElementById("couponAdd").style.display = "none";
    document.getElementById("couponAfter").style.display = "block";
    couponSelection = "Congratulations! You saved " + (totalPrice1 * 0.25).toFixed(2) + "$ on your order because you used SAVE25 coupon code!" + "<br /><br />";
  }
  else if (couponTxt == "SAVEHALF") {
    couponVal = 0.5;
    document.getElementById("couponAfter").style.display = "block";
    couponSelection = "Congratulations! You saved " + (totalPrice1 * 0.5).toFixed(2) + "$ on your order because you used SAVEHALF coupon code!" + "<br /><br />";
  }
  else {
    couponVal = 1;
    document.getElementById("couponAfter").style.display = "none";
    alert("Invalid Coupon Code! Please try again!");
  }
  document.getElementById("couponChoice").innerHTML = couponSelection;
  setPrice();
}
//setPrice function to show the price
function setPrice() {
  totalPrice1 = (sizePrice + crustPrice + saucePrice + toppingsCount * toppingPrice);
  totalPrice = (sizePrice + crustPrice + saucePrice + toppingsCount * toppingPrice) * couponVal;
  totalPrice = new Intl.NumberFormat("en", { style: "currency", currency: "CAD" }).format(totalPrice);
  document.getElementById("aPrice").innerHTML = totalPrice;
}
function updateInstructionsDone() {
  instructionsSelectionDone = "";
  instructionsSelectionDone += document.querySelector("input[name=done]:checked").value;
  document.getElementById("instructionsChoice").innerHTML = instructionsSelectionDone;
}
function updateCheese() {
  cheeseSelection = "";
  cheeseSelection = document.querySelector("input[name=theCheese]:checked").value;
  cheeseSelection += "<br />";
  document.getElementById("cheeseChoice").innerHTML = cheeseSelection;
}
function updateDelivery() {
  deliverySelection = "<br />" + "Your order is for ";
  deliverySelection += document.querySelector("input[name=delivery]:checked").value;
  deliverySelection += "<br />";
  document.getElementById("deliveryChoice").innerHTML = deliverySelection;
}
//submitOrder function to change page to review order
function submitOrder() {
  document.getElementById("mainArea").style.display = "none";
  document.getElementById("reviewOrder").className = "reviewOrderShow";
  document.getElementById("reviewOrder").style.display = "block";
  document.getElementById("submitOrder").style.display = "none";
  document.getElementById("editOrder").style.display = "block";
  //document.getElementById("couponChoice").innerHTML = couponSelection;
}
//editOrder function to change page to order page
function editOrder() {
  document.getElementById("mainArea").style.display = "block";
  document.getElementById("reviewOrder").style.display = "none";
  document.getElementById("submitOrder").style.display = "block";
  document.getElementById("editOrder").style.display = "none";
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}