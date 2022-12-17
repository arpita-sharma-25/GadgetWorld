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
			setTimeout(carousel, 4000); // Change image every 2 seconds
			}


			$(document).ready(function(){
				$("#phonesSection1").mouseenter(function()
				{
					$("#css1").slideDown("slow" , function(){
		
					});
				});
		
				$("#phonesSection1").mouseleave(function()
				{
					$("#css1").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$("#phonesSection2").mouseenter(function()
				{
					$("#css2").slideDown("slow" , function(){
		
					});
				});
		
				$("#phonesSection2").mouseleave(function()
				{
					$("#css2").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$("#phonesSection3").mouseenter(function()
				{
					$("#css3").slideDown("slow" , function(){
		
					});
				});
		
				$("#phonesSection3").mouseleave(function()
				{
					$("#css3").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$("#phonesSection4").mouseenter(function()
				{
					$("#css4").slideDown("slow" , function(){
		
					});
				});
		
				$("#phonesSection4").mouseleave(function()
				{
					$("#css4").slideUp("slow" , function(){
						
					});
				});
			});

				