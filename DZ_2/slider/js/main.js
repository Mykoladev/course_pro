$(document).ready(function(){

	var images = [ '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
	for( var i = 0; i < images.length; i++ ){
		$('.dots').append('<div data-img="'+i+'" class="dot"></div>');
	}

	var i=0;
	$('.dot').click(function(){
		var j= $(this).attr('data-img');
		// $('.imgBlock').html("<img src="+images[j]+">")
		$('.imgBlock').css('background', 'url(img/'+images[j]+')');
		i=j;
		});

  	setInterval(function(){
             $('.imgBlock').animate({
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
		
})