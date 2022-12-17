            //jQuery

//Alertbox when page is fully loaded
			$(document).ready(function(){
				alert("Welcome To Gadget World");
			});

//SIGN UP FORM
$(document).ready(function(){
	$("#loginbtn").click(function(){
		$("#loginform").slideToggle();
	});
});

//SIGNUP ALERTBOX
$(document).ready(function(){
	$("#signupbtn").click(function(){
		alert("Successfully SignUp");
	});
});

            //Java Script

//EMAIL VALIDATION
function ValidateEmail()
{
var inputText=document.getElementById("btn");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Thanks for registration");
}
else
{
alert("You have entered an invalid email !");
}
}


var myIndex = 0	
			carousel();

		function carousel() {
			var i;
			var x = document.getElementsByClassName("mySlides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
			}
			myIndex++;
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
			setTimeout(carousel, 4000); // Change image every 4 seconds
			}
