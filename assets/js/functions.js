/* JavaScript for Base Apparel Coming Soon challenge from Frontend Mentor */

/* Validate the email address (regex grabbed from emailregex.com) */
function validateInput(){
  var email = document.getElementById("input-email").value;
  var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!email) setState("error");
  else {
    var emailStatus = regex.test(String(email).toLowerCase());
    if (emailStatus) setState("success");
    else setState("error");
  }
}

/* Set error or success state */
function setState(state){
  var input = document.getElementById("input-email");
      input.classList.remove("input--error","input--success");
      input.classList.add("input--" +state);
      input.parentElement.classList.remove("label--error","label--success");
      input.parentElement.classList.add("label--" +state);
}

/* Put an event handler on the button */
var submit = document.getElementById("button-submit");
submit.addEventListener("click", function(event){
  event.preventDefault();
  validateInput();
});