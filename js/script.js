 $(document).ready(function(){
	/*   mobile navegation */
 	$('.js--mobile-nav').click(function(){  
	 	var nav = $('.js--main-nav');
	 	var icon = $('.js--mobile-nav i');

	 	nav.slideToggle(200);

	 	if (icon.hasClass('ion-navicon-round')) {
	 		icon.addClass('ion-close-round');
	 		icon.removeClass('ion-navicon-round');

	 	}else{
	        icon.addClass('ion-navicon-round');
	 		icon.removeClass('ion-close-round');
	 	}
 	});
 });

