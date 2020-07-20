 $(document).ready(function(){
	/*   menu-do-usuario */
    
    $('.js--menu-usuario-icon').click(function(){  
	 	var nav = $('.menu-usuario');
	 	var icon = $('.js--menu-usuario-icon');

	 	nav.slideToggle(200);

	 	if (icon.hasClass('ion-arrow-down-b')) {
	 		icon.removeClass('menu-usuario');

	 	}else{
	        icon.addClass('menu-usuario');
	 	}
 	});

 });


var mainHeader = document.querySelector('.main-header');
var mobileNav = document.querySelector('.js--mobile-nav');
var icon = $('.js--mobile-nav i');

mobileNav.addEventListener("click",()=>{
	
	if(mainHeader.style.display==="none") {
		mainHeader.style.display="block";
		icon.addClass('ion-close-round');
		icon[0].style.color="white";
	 	icon.removeClass('ion-navicon-round');

	}else{
	   mainHeader.style.display="none";
	    icon.addClass('ion-navicon-round');
	    icon[0].style.color="black";
	 	icon.removeClass('ion-close-round');
	}

})