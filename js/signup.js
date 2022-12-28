alert("huuuu");

function enableButton()
{
	if(document.getElementById("statement").checked)
	{
		document.getElementById("submit").disabled = false;
	}
	else{
		document.getElementById("submit").disabled = true;
	}
}


function checkPassword()
{
	var passwordx = document.getElementById("password").value ;
	var cnfpassword = document.getElementById("password1").value ;
	
	if(passwordx==cnfpassword)
	{
		return true;
	}
	else
	{
		alert("Passwords does not match!");
		return false;
	}
}