// Global Variable
var ss = SpreadsheetApp.openById("1unSWTjttLPb_gwtVT76WVNp_8lRFhRPBy_L3V09XV4Y");
var sheet = ss.getActiveSheet();

// Read Range to JS and Write to Range
function copyArray(){
  var temp = sheet.getRange("A7:B13").getValues();
  Logger.log(temp);
  
  //  Long Way
  var array = [[10.0, "Low"], 
               [7.0, "Low"], 
               [50.0, "High Mid"], 
               [51.0, "High Mid"], 
               [17.0, "Low"], 
               [25.0, "Low Mid"], 
               [100.0, "High"]
              ];
  sheet.getRange("D7:E13").setValues(array);
  
  //  Alternate Way
  sheet.getRange("G7:H13").setValues(temp);
}