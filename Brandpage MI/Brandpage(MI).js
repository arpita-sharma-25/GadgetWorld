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

//Laptop hover section
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

			//Phones hover section
				$(document).ready(function(){
					$("#phonesSection1").on({
					mouseenter:function(){
					$("#css1").slideDown("slow");
					},
					});
					});
			
				$(document).ready(function(){
					$("#phonesSection1").on({
					mouseleave:function(){
					$("#css1").slideUp("slow");
					},
					});
					});

					$(document).ready(function(){
						$("#phonesSection2").on({
						mouseenter:function(){
						$("#css2").slideDown("slow");
						},
						});
						});
				
					$(document).ready(function(){
						$("#phonesSection2").on({
						mouseleave:function(){
						$("#css2").slideUp("slow");
						},
						});
						});

					$(document).ready(function(){
						$("#phonesSection3").on({
						mouseenter:function(){
						$("#css3").slideDown("slow");
						},
						});
						});
					
					$(document).ready(function(){
						$("#phonesSection3").on({
						mouseleave:function(){
						$("#css3").slideUp("slow");
						},
						});
						});

					$(document).ready(function(){
						$("#phonesSection4").on({
						mouseenter:function(){
						$("#css4").slideDown("slow");
						},
						});
						});
						
					$(document).ready(function(){
						$("#phonesSection4").on({
						mouseleave:function(){
						$("#css4").slideUp("slow");
						},
						});
						});

				