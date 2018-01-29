// Global Variable
var ss = SpreadsheetApp.openById("1unSWTjttLPb_gwtVT76WVNp_8lRFhRPBy_L3V09XV4Y");

function validate(){
  var sheet = ss.getActiveSheet();
  var workingcell = sheet.getRange(7,1).getValue();
  
  if(workingcell > 50){
    sheet.getRange(7,2).setValue("High");
  }
}