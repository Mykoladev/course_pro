(function($){

	$.fn.blurPlug = function(conf){


		var conf = $.extend({
			filter: 'blur',
			value: '10px'
		}, conf)



		var start = function(){

			var section = $(this).parent();
			var bgImg = $(this).css('background-image');
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