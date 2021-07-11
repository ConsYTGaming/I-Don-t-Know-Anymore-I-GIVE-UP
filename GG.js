function Login() { 
	
    window.location = "last.html";
}
function CloseTab() { 
    setTimeout(setAlert, 5000);
    confirm("The Tab Is Unresponsive, Click OK To Close Tab");
}
function setAlert() {
    window.close()
}