// Global Variable
var ss = SpreadsheetApp.openById("1unSWTjttLPb_gwtVT76WVNp_8lRFhRPBy_L3V09XV4Y");
var sheet = ss.getActiveSheet();

function setAFormula() {
  sheet.getRange("D2").setFormula("(A2+B2)*C2");
  
  var lr = sheet.getLastRow();
  var fillDownRange = sheet.getRange(2,4,lr-1);
  
  sheet.getRange("D2").copyTo(fillDownRange);
}
