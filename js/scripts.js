var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateFunction(){
  var akan_name = ""

  var gender = document.forms["userinput"]["gender"].value;

  var date = document.forms["userinput"]["date"].value;

  var confirmDate = new Date(date); 

  var confirmDay = confirmDate.getDay();

  if (gender === "Male"){
    akan_name = maleNames[confirmDay];
  }
  else if (gender === "Female"){
    akan_name = femaleNames[confirmDay]
  } 
  else {
    alert ("Date Invalid, Enter correct input");
  }

  alert("Your akan name is " +akan_name);

}
