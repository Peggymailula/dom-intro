// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector( ".billItemTypeWithSettings");

var TotalAddBtn = document.querySelector(".radioAddBtn");
var updateBtn = document.querySelector(".updateSettings");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var TotalSettings = document.querySelector(".totalSettings");
var callCostSetting= document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")

var callTotall =0;
var smsTotall = 0;


function Update(){

   //update


}


function Addition(){

var checkRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if (checkRadioBtn){
     billItemTypeWithSettings = checkRadioBtn.value
    // billItemType will be 'call' or 'sms'
}

if (billItemTypeWithSettings === "call"){
    callTotall  ++;
}
else if (billItemTypeWithSettings === "sms"){
    smsTotall ++;
}

var CallTotaled= callTotall* callCostSetting.value;
var smsTotaled= smsTotall * smsCostSetting.value;
callTotalSettings.innerHTML = CallTotaled.toFixed(2);
smsTotalSettings.innerHTML = smsTotaled.toFixed(2);

var totallyCost = CallTotaled + smsTotaled;
TotalSettings.innerHTML = totallyCost;



if (totallyCost > criticalLevelSetting.value ){
    
    TotalSettings.classList.add("danger");
}



else if (totallyCost > warningLevelSetting.value ){
    
    TotalSettings.classList.add("warning");
}


}



  


// get refences to all the settings fields

//get a reference to the add button
updateBtn.addEventListener('click',Addition);

TotalAddBtn.addEventListener('click', Addition);


//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
