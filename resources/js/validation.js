function textIsBlank(varName)
{
	if((varName.value).replace(/^\s+|\s+$/gm,'').length == 0) 
	{
		changeTextboxAppearance(varName);
		return true;
	}
	return false;
}

function changeTextboxAppearance(varName)
{
	varName.focus();
	varName.style.borderColor="red";
}

function validateName() {
	var varName = document.getElementById("name");
	if (textIsBlank(varName) == true) 
	{
		sweetAlert("Oops...", "You left the Name field blank!", "error");
		return false;
	}
	if (varName.value.length >= 2 && (/^[A-Za-z\s]+$/.test(varName.value))==true) 
	{
		return true;
	}
	else if (varName.value.length < 2 && (/^[A-Za-z\s]+$/.test(varName.value))==true){
		changeTextboxAppearance(varName);
		sweetAlert("Oops...", "The Name you entered is too short!", "error");
		return false;
	}
	else {
		changeTextboxAppearance(varName);
		sweetAlert("Oops...", "Sorry, special characters and numbers are not allowed!", "error");
		return false;
	}
}

function validateEmail()
{
	var varEmail = document.getElementById("email");
	var regexpr=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (textIsBlank(varEmail) == true) 
	{
		changeTextboxAppearance(varEmail);
		sweetAlert("Oops...", "You left the Email field blank!", "error");
		return false;
	}
	if (regexpr.test(varEmail.value) != true)
	{
		changeTextboxAppearance(varEmail);
		sweetAlert("Oops...", "Please enter a valid email address!", "error");
		return false;
	}
	else
	{
		return true;
	}
}


function validateForm() {
	if(validateName() == true & validateEmail() == true)
	{
		swal("Good job!", "Your information was sent successfully!", "success");
		return true;
	}
	else
	{
		return false;
	}
}