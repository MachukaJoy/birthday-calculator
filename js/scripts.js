var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateFunction(){
  var akan_name = ""

  var gender = document.forms["userinput"]["gender"].value;

  var date = document.forms["userinput"]["date"].value;
  // change date format to be able to get day
  
  var confirmDate = new Date(date); 

  var confirmDay = confirmDate.getDay();



}
alert("Your akan name is " +akan_name);