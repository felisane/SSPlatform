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


const slidepaginas = document.querySelector('.slidepaginas');


const primeiroNextBtn = document.querySelector('.nxtBtn');
const segundoPrevBtn = document.querySelector('.prev-1');
const segundoNextBtn = document.querySelector('.next-1');
const terceiroPrevBtn = document.querySelector('.prev-2');
const terceiroNextBtn = document.querySelector('.next-2');
const quartoPrevBtn = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.btn-salvar');

const fazslidefuncao = (botao, margin) => {
		botao.addEventListener("click", ()=>{
		slidepaginas.style.marginLeft= margin+"%";
	});
}

fazslidefuncao(primeiroNextBtn, -21.7);
fazslidefuncao(segundoPrevBtn, 0);
fazslidefuncao(segundoNextBtn, -43.4);
fazslidefuncao(terceiroPrevBtn, -21.7);
fazslidefuncao(terceiroNextBtn, -65.1);
fazslidefuncao(quartoPrevBtn, -43.4);

submitBtn.addEventListener("click", ()=>{
		alert('registrado com sucesso');
	});
