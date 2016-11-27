(function($){

	$.fn.blurPlug = function(conf){


		var conf = $.extend({
			filter: 'blur',
			value: '10px'
		}, conf)



		var start = function(){

			var it = this;
			var section = $(this).parent();
			

			$(it).append('<div class="dots"></div>');	
	        var images = [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
			for( var i = 0; i < images.length; i++ ){
			$('.dots').append('<div data-img="'+i+'" class="dot"></div>');
			}


			$(it).append('<div class="leftbutton"><</div>');
			$('.leftbutton').css({
		'position': 'absolute',
		'width': '50px',
		'height': '50px',
		'background-color':'red',
		

					})


		$(it).append('<div class="rightbutton">></div>');
		$('.rightbutton').css({
		'position': 'absolute',
		'width': '50px',
		'height': '50px',
		'background-color':'red',
		'right':'0px'
		
		})




$('.rightbutton').click(function(){
				if(i>images.length-1){
				 i=-1;
	    	 }
			$(it).css('background','url(img/'+images[i++]+')');
			$('.dot').css('background-color', 'rgba(0, 136, 255, .7)');
			$('.dot:eq('+i+')').css('background-color', 'red');
			
			console.log(i);
							var bgImg = $(it).css('background-image');
									
									$('.filtered').css('background-image', bgImg);
		})




		console.log(i);
		$('.leftbutton').click(function(){
			if(i<=0){
				 i=images.length;
	    	 }
			$(it).css('background','url(img/'+images[i--]+')')
			console.log(i);
			$('.dot').css('background-color', 'rgba(0, 136, 255, .7)');
			 $('.dot:eq('+i+')').css('background-color', 'red');
			 
								var bgImg = $(it).css('background-image');
									
									$('.filtered').css('background-image', bgImg);
		})




var i=0;
	$('.dot').click(function(){
		var j= $(this).attr('data-img');
		// $('.imgBlock').html("<img src="+images[j]+">")
		$(it).css('background', 'url(img/'+images[j]+')');
		i=j;
					
					
					var bgImg = $(it).css('background-image');
									
									$('.filtered').css('background-image', bgImg);
		});

  	setInterval(function(){
             $(it).animate({
				// width: 0,
			  	opacity: 0}, 1000, function() {
			 	 if(i>images.length-1){
					 i=0;
		    	 }
			  	console.log(i);
			  $('.dot').css('background-color', 'rgba(0, 136, 255, .7)');
			  $('.dot:eq('+i+')').css('background-color', 'red');		 
			  $(this).css('background','url(img/'+images[i++]+')').animate({
				//  width: '100%',
				 opacity: 1},5000);


				 					var bgImg = $(it).css('background-image');
									$('.filtered').animate({
										opacity: 0
									},1000, function(){

											
									$('.filtered').css('background-image', bgImg).animate({
										opacity: 1
									},5000);


									});



				 
									
            });
        }, 4000);











			
			var bgImg = $(it).css('background-image');
			// $(this).find( 'img' ); *****
			section.append('<div class="filtered">');
			$('.filtered').css('background-image', bgImg);
			////////////////////////////
			//////TODO: Switch. Css method
			////////////////////////////
			switch(conf.filter){
				case 'blur':
				$('.filtered').addClass('blur')
				$('.blur').css('filter', 'blur('+conf.value+'px)')
				console.log(conf.value);
				break;
				case 'grayscale': 
				$('.filtered').addClass('grayscale')
				$('.grayscale').css('filter', 'grayscale('+conf.value+')')
				break;
				case 'sepia': 
				$('.filtered').addClass('sepia')
				$('.sepia').css('filter', 'sepia('+conf.value+'%)')
				break;
				case 'brightness': 
				$('.filtered').addClass('brightness')
				$('.brightness').css('filter', 'brightness('+conf.value+')')
				break;
				case 'invert': 
				$('.filtered').addClass('invert')
				$('.invert').css('filter', 'invert('+conf.value+'%)')
				console.log(conf.value);
				break;
			}
			




		}

		return this.each(start)
	}

}(jQuery))