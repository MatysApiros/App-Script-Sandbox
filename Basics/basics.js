function getLogSheet(){
  // refers the spreadsheet application
  var app = SpreadsheetApp;
  // refers the spreadsheet in  the application
  var ss = app.getActiveSpreadsheet();
  // refers to the current sheet
  var sheet = ss.getActiveSheet();
  // 
  var rows = sheet.getDataRange();
  // 
  var values = rows.getValues();
  
  for(var i = 0; i  < values.length; i++){
    var row = values[i];
    Logger.log(row);
  }
}

function getLogSheetRevision(){
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var values = sheet.getDataRange().getValues();
  for(var i = 0; i  < values.length; i++){
    Logger.log(values[i]);
  }
}