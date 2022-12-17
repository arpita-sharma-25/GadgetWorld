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
			setTimeout(carousel, 5000); // Change image every 2 seconds
			}

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

			$(document).ready(function(){
				$(".pic5").mouseenter(function()
				{
					$(".css5").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic5").mouseleave(function()
				{
					$(".css5").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$(".pic6").mouseenter(function()
				{
					$(".css6").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic6").mouseleave(function()
				{
					$(".css6").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$(".pic7").mouseenter(function()
				{
					$(".css7").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic7").mouseleave(function()
				{
					$(".css7").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$(".pic8").mouseenter(function()
				{
					$(".css8").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic8").mouseleave(function()
				{
					$(".css8").slideUp("slow" , function(){
						
					});
				});
			});

			$(document).ready(function(){
				$(".pic9").mouseenter(function()
				{
					$(".css9").slideDown("slow" , function(){
		
					});
				});
		
				$(".pic9").mouseleave(function()
				{
					$(".css9").slideUp("slow" , function(){
						
					});
				});
			});