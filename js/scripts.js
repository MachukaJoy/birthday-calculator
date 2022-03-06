var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateFunction() {
  var akan_name = ""

  var gender = document.forms["userinput"]["gender"].value;

  var date = document.forms["userinput"]["date"].value;
  //change the date format
  var confirmDate = new Date(date);
  
  //get the day from the changed format
  var dayIndex = confirmDate.getDay(); 

  if (gender === "Male") {
    akan_name = maleNames[dayIndex];
  }
  else if (gender === "Female") {
    akan_name = femaleNames[dayIndex]
  }
  else {
    alert("Input is either Invalid or Empty, Enter correct input");
  }

  alert("Your akan name is " + akan_name);

}
