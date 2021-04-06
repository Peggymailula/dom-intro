// get a reference to the sms or call radio buttons
var billItemType = document.querySelector( ".billItemTypeRadio");

var TotalAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");
var billTotalElement = document.querySelector(".totalTwo");
var callsTotal = 0;
var smsTotal = 0;


function BillTotal(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
}

if (billItemType === "call"){
    callsTotal += 2.75
}
else if (billItemType === "sms"){
    smsTotal += 0.75;
}

//update the totals that is displayed on the screen.
callsTotalElem.innerHTML = callsTotal.toFixed(2);
smsTotalElem.innerHTML = smsTotal.toFixed(2);

var totalCost = callsTotal + smsTotal;
billTotalElement.innerHTML = totalCost.toFixed(2);

if (totalCost >= 50){
    // adding the danger class will make the text red
    billTotalElement.classList.add("danger");
}
else if (totalCost >= 30){
    billTotalElement.classList.add("warning");
}



}


  

 //var checkedRadioBtn = document.querySelector(".billItemTypeWithSettings:checked");
 





  
TotalAddBtn.addEventListener('click', BillTotal);

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
