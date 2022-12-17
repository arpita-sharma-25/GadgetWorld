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
			setTimeout(carousel, 3000); // Change image every 2 seconds
			}


			$(document).ready(function(){
				$("#laptop1").hover(function(){
					$("#hover1").fadeToggle();
				}),
				$("#laptop2").hover(function(){
					$("#hover2").fadeToggle();
				}),
				$("#laptop3").hover(function(){
					$("#hover3").fadeToggle();
				});
			});

$(document).ready(function(){
				$(".pic1").mouseenter(function()
				{
					$(".css1").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic1").mouseleave(function()
				{
					$(".css1").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$(".pic2").mouseenter(function()
				{
					$(".css2").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic2").mouseleave(function()
				{
					$(".css2").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$(".pic3").mouseenter(function()
				{
					$(".css3").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic3").mouseleave(function()
				{
					$(".css3").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$(".pic4").mouseenter(function()
				{
					$(".css4").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic4").mouseleave(function()
				{
					$(".css4").slideUp("slow" , function(){
						
					});
				});
			});				