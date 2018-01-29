// Get the linked HTML file
function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  
// Add the entered data to the Sheet (data entered through the Front-End)
  function addPlanilha(pessoa){
    var ss = openSheetById();
    var sheet = ss.getActiveSheet();
    var pessoas = [];
    
    sheet.appendRow([pessoa.nome, pessoa.peso, pessoa.altura, pessoa.gordura, pessoa.imc]);
    
    return pessoa;
  }
  
// Openning Sheet by ID
  function openSheetById(){
    var ss = SpreadsheetApp.openById("12xe0aBxeAq3GtQOpFh2Ih8L0oYqdfwULvbEzCvzO3-Y");
    return ss;
  }