// Global Variable
var ss = SpreadsheetApp.openById("1unSWTjttLPb_gwtVT76WVNp_8lRFhRPBy_L3V09XV4Y");

// Validate if the number is high, mid or low
function validate(){
  var sheet = ss.getActiveSheet();
  
  for(var i = 7; i < 14; i++){
    var workingcell = sheet.getRange(i,1).getValue();
    if(workingcell >= 75){
        sheet.getRange(i,2).setValue("High");
    }
    else if(workingcell >= 50){
      sheet.getRange(i,2).setValue("High Mid");
    }
    else if(workingcell >= 25){
      sheet.getRange(i,2).setValue("Low Mid");
    }
    else{
        sheet.getRange(i,2).setValue("Low");
    }
  }
}


