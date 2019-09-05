function validation(){
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var subject = document.getElementById('subject').value;
var message = document.getElementById('message').value;


document.getElementById('error_message').style.padding = "10px";

	if (name.length < 4) {
		document.getElementById('error_message').innerHTML = "Enter a valid name";
		return false;
	}

	if (email.indexOf("@") == -1 || email.length < 10) {
		document.getElementById('error_message').innerHTML = "Please Enter a Valid Email Address";
		return false;
	}

	if (subject.length < 4) {
		document.getElementById('error_message').innerHTML = "Enter a valid Subject";
		return false;
	}

	if (message.length < 20) {
		document.getElementById('error_message').innerHTML = "Please Enter More Than 20 Characters";
		return false;
	}

	alert ("Form Submitted Successfully!")
	return true;
}