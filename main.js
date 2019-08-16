var name = document.getElementById("name");
var age = document.getElementById("age");
var locations = document.getElementById("loc");
var mail = document.getElementById("mailID");

age.addEventListener("invalid", () => {
  if(age.value === ""){
    age.setCustomValidity("Please enter your age");
  } else {
    age.setCustomValidity("");
  }
});

mail.addEventListener("input", function (event) {
   if(mail.validity.typeMismatch){
    mail.setCustomValidity("abc@example.com");
} else {
  mail.setCustomValidity("");
}
});

mail.addEventListener("invalid", () => {
  if(mail.value === ""){
    mail.setCustomValidity("Please enter the vaild mail ID");
  } else {
    mail.setCustomValidity("");
  }
});

name.addEventListener("invalid", () => {
  if(name.value === ""){
    name.setCustomValidity("Please enter the name !");
  } else {
    name.setCustomValidity("");
  }
 
});

locations.addEventListener("invalid", () => {
  if(locations.value === ""){
    locations.setCustomValidity("Please enter the Location");
  } else {
    locations.setCustomValidity("");
  }
});



