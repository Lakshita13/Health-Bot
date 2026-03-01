function showMessage(){
alert("Appointment page below!");
}

function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let date = document.getElementById("date").value;
let error = document.getElementById("error");

if(name=="" || email=="" || date==""){
error.innerHTML="Please fill all fields";
error.style.color="red";
return false;
}

alert("Appointment Booked Successfully!");
return true;
}