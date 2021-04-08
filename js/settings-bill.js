// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector( ".billItemTypeWithSettings");

var TotalAddBtn = document.querySelector(".radioAddBtn");
var updateBtn = document.querySelector(".updateSettings");

var callCostTotalElement = document.querySelector(".callTotalSettings");
var smsCostTotalElement = document.querySelector(".smsTotalSettings");
var TotalCostElement = document.querySelector(".totalSettings");

var callCostSettingElement= document.querySelector(".callCostSetting");
var smsCostSettingElement= document.querySelector(".smsCostSetting");
var warningLevelElement= document.querySelector(".warningLevelSetting");
var criticalLevelElement= document.querySelector(".criticalLevelSetting");

var callTotall =0;
var smsTotall = 0;

//callTotalSettings.value=0;
//smsTotalSettings.value=0;
//TotalSettings.value=0;
//warningLevelSetting.value=0;
//criticalLevelSetting.value =0;
var callCost=0;
var smsCost=0;
var warningLevel=0;
var criticalLevel=0;
var totallyCost= TotalCostElement.value;





function Update(){

    callCost = callCostSettingElement.value;
    smsCost = smsCostSettingElement.value;
   // totallyCost= TotalCostElement.value;
    warningLevel = warningLevelElement.value;
    criticalLevel = criticalLevelElement.value;

    colours(totallyCost);

   // alert(callTotalSettings);
   //TotalCostElement.classList.remove("warning");
   //TotalCostElement.classList.remove("danger");
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

var CallTotaled = callTotall*callCost;
var smsTotaled= smsTotall *  smsCost;

callCostTotalElement.innerHTML = CallTotaled.toFixed(2);
smsCostTotalElement.innerHTML = smsTotaled.toFixed(2);

 totallyCost = CallTotaled + smsTotaled;
TotalCostElement.innerHTML = totallyCost;
colours(totallyCost);

}

 var colours = function(totallyCost ){
    if(totallyCost < warningLevel  )
       {
           TotalCostElement.classList.remove("warning");
           TotalCostElement.classList.remove("danger");
       }
       
       else if (totallyCost >= warningLevel && totallyCost < criticalLevel  )
       {
          TotalCostElement.classList.remove("danger");
           TotalCostElement.classList.add("warning");
       }
       
       else if (totallyCost >= criticalLevel ){
           TotalCostElement.classList.remove("warning");
           TotalCostElement.classList.add("danger");
       }
       
       
      
    }
    







  


// get refences to all the settings fields

//get a reference to the add button

TotalAddBtn.addEventListener('click', Addition);
updateBtn.addEventListener('click',Update);


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
