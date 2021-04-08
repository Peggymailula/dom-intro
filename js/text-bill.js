// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
var textTotalAddBtn= document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var  totalCostElem = document.querySelector(".totalOne");
//get a reference to the add button

var callsTotals = 0;
var smsTotals = 0;

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotals += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotals += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotals.toFixed(2);
    smsTotalElem.innerHTML = smsTotals.toFixed(2);
    var totalCost = callsTotals + smsTotals;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);