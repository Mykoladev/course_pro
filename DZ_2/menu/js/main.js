$(document).ready(function(){


	$('.icon').click(function(){

		var wdh=$('.menu').css('width');
		console.log(wdh);
		if(wdh==='0px'){
				$('.menu').animate({
				width : 300,
				opacity: 1		
				},1000)

		}
		else if(wdh==='300px'){
				$('.menu').animate({
				width : 0,
				opacity: 0	
				},1000)
		}
	})

})
