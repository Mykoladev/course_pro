(function($){

	$.fn.blurPlug = function(conf){


		var conf = $.extend({
			filter: 'blur',
			value: '10px'
		}, conf)


		var start = function(){
	var block= this;
	$(block).css({
		'width': '99,9%',
   		'height': '600px',
    	'background': 'url(img/5.jpg)',
    	'overflow': 'hidden',
    	'position': 'relative',
   		'border': '5px solid rgba(0, 136, 255, .7)'
   
	});
	$(block).append('<div class="dots"></div>');	
	var images = [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
	for( var i = 0; i < images.length; i++ ){
		$('.dots').append('<div data-img="'+i+'" class="dot"></div>');
	}

	$(block).append('<div class="leftbutton"><</div>');
	$('.leftbutton').css({
		'position': 'absolute',
		'width': '50px',
		'height': '50px',
		'background-color':'red',
		

	})
	$(block).append('<div class="rightbutton">></div>');
	$('.rightbutton').css({
		'position': 'absolute',
		'width': '50px',
		'height': '50px',
		'background-color':'red',
		'right':'0px'
		
	})

	var i=0;
	$('.dot').click(function(){
		var j= $(this).attr('data-img');
		// $('.imgBlock').html("<img src="+images[j]+">")
		$(block).css('background', 'url(img/'+images[j]+')');
		i=j;
		});

  	setInterval(function(){
             $(block).animate({
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
				 opacity: 1},1000);
            });
        }, 4000);
			$('.rightbutton').click(function(){
				if(i>images.length-1){
				 i=-1;
	    	 }
			$(block).css('background','url(img/'+images[i++]+')');
			$('.dot').css('background-color', 'rgba(0, 136, 255, .7)');
			$('.dot:eq('+i+')').css('background-color', 'red');
			
			console.log(i);
			
		})
		console.log(i);
		$('.leftbutton').click(function(){
			if(i<=0){
				 i=images.length;
	    	 }
			$(block).css('background','url(img/'+images[i--]+')')
			console.log(i);
			$('.dot').css('background-color', 'rgba(0, 136, 255, .7)');
			 $('.dot:eq('+i+')').css('background-color', 'red');
			 
		
		})

		}

		return this.each(start)
	}

}(jQuery))