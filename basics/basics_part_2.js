function openSheetById(){
    var ss = SpreadsheetApp.openById("12xe0aBxeAq3GtQOpFh2Ih8L0oYqdfwULvbEzCvzO3-Y");
    return ss;
  }
  
function setValueSheet(){
    var ss = openSheetById();
    var sheet = ss.getActiveSheet();
    sheet.getRange("C1").setValue("Hello World!");
  }

  function getLogSheet(){
    var ss = openSheetById();
    var sheet = ss.getActiveSheet();
    var rows = sheet.getDataRange();
    var values = rows.getValues();
    
    for(var i = 0; i  < values.length; i++){
      var row = values[i];
      Logger.log(row);
    }
  }