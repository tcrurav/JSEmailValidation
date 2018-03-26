window.onload = initialize;

function initialize(){
  document.getElementById("form-email").addEventListener("submit", validate);
}

function validate(){
  console.log("hola");
  var emailRegEx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var email = document.getElementById("email").value;
  var stateEmail ;

  if (emailRegEx.test(email)){
    stateEmail = true;
  } else {
    stateEmail = false;
  }
  console.log(stateEmail);

  if (email == "" || stateEmail == false){
    event.preventDefault();
    document.getElementById("error-email").style.display = "block";
  }
}
