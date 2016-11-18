(function($){

	$.fn.testPlug = function(options){ //fn - позволяет запускать нашу функцию, как нативную функцию jQuery

		var options = $.extend({ // extend - совмещает 2 объекта. принимает 2 параметра ( 1 - текущий ( дефолтный ) объект, 2 - то, с чем нужно совместить/добавить )
			speed: 800,
			toTop : true
		}, options);

		
			
		 var make = function(){

			 if(options.toTop===true){
				$('body').append('<button class="toTop">Up</button>')
				$('.toTop').css({
					'background-color': '#000',
					'height': '50px',
					'position':'fixed',
					'z-index': '100',
					'bottom': '30px',
					'right': '30px',
					'width': '50px',
					'color': '#fff',
					'border': 'none'
				})
			
				$('.toTop').click(function(e){
				e.preventDefault();
					$('html, body').animate({
					scrollTop: 0
					}, options.speed);
				});
			}
			
			$(this).click(function(e){
				e.preventDefault();
					var id = $(this).attr('href');
					var offset = $(id).offset().top;
					$('html, body').animate({
					scrollTop: offset
					}, options.speed);
					
				
				
			});
		};

		return this.each(make) // this - возвращает то, к чему применяется функция testPlug ( см. index.html )
	}

}(jQuery))