// Global Variable
var ss = SpreadsheetApp.openById("1unSWTjttLPb_gwtVT76WVNp_8lRFhRPBy_L3V09XV4Y");

function clearSheet(){
  var sheet = ss.getActiveSheet();
  sheet.getRange("A1:F11").clearContent();
}

// Global Format
var ss = SpreadsheetApp.openById("1unSWTjttLPb_gwtVT76WVNp_8lRFhRPBy_L3V09XV4Y");

function clearSheet(){
  var sheet = ss.getActiveSheet();
  sheet.getRange("A1:F11").clearFormat();
}

// Global Variable + Format
var ss = SpreadsheetApp.openById("1unSWTjttLPb_gwtVT76WVNp_8lRFhRPBy_L3V09XV4Y");

function clearSheet(){
  var sheet = ss.getActiveSheet();
  sheet.getRange("A1:F11").clear();
}