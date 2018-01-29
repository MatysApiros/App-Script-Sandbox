//  Log Function
function logPanel() {
    Logger.log("Hello World!");
}
  
//   Set method with different 'getRange' parameters
function learnBasics2() {
    var app = SpreadsheetApp;
    var ss = app.getActiveSpreadsheet();
    var activeSheet = ss.getActiveSheet();
    
    activeSheet.getRange("A1").setValue("Hello World!");
    
    activeSheet.getRange("D7:F1").setValue("Hello World!");
    
    activeSheet.getRange(2, 2, 3).setValue("Hello World!");
    
    activeSheet.getRange(1,8,3,3).setValue("Hello World!");
    
    var text = activeSheet.getRange(1,1).getValue();
    activeSheet.getRange(6,2).setValue(text);
}

// Add + n to a row
function learnBasics3(){
    var app = SpreadsheetApp;
    var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
    var someCell = activeSheet.getRange(8,1).getValue();
    activeSheet.getRange(8,1).setValue(someCell + 5);
}
  
// Simple Loop Method
function simpleForLoop(){
    var app = SpreadsheetApp;
    var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
    
    for(i = 8; i < 12; i++){
      var someCell = activeSheet.getRange(i+8,1).getValue();
      someCell = someCell + 5;
      activeSheet.getRange(i,1).setValue(someCell);
    }
}

// Copy data to other other sheet
function copyToOtherSheet(){
    var app = SpreadsheetApp;
    var targetSheet = app.getActiveSpreadsheet().getSheetByName("Página2");
    var tempNumber = targetSheet.getRange(2,1).getValue();
    var secondSheet = app.getActiveSpreadsheet().getSheetByName("Página3");
    
    secondSheet.getRa;
}