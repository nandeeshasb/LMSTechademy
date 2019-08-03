/*(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);*/

$(document).ready(main);
var contador=1;
$function main(){
	$('.menu-bar').click(function(){
		//$('nav').toggle();
		if (contador == 1) {
			$('nav').animate({
				left:'0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
}