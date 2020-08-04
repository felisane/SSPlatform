const slidepaginas = document.querySelector('.slidepaginas');


const primeiroNextBtn = document.querySelector('.nxtBtn');
const segundoPrevBtn = document.querySelector('.prev-1');
const segundoNextBtn = document.querySelector('.next-1');
const terceiroPrevBtn = document.querySelector('.prev-2');
const terceiroNextBtn = document.querySelector('.next-2');
const quartoPrevBtn = document.querySelector('.prev-3');
const quartoNextBtn = document.querySelector('.next-3');
const quintoPrevBtn = document.querySelector('.prev-4');
const submitBtn = document.querySelector('.btn-salvar');

const progressiveText= document.querySelectorAll('.step p');
const progressiveChecka= document.querySelectorAll('.step .checka');
const numero= document.querySelectorAll('.step .numero');

let max =  4;
let current = 1;

const fazslidefuncaoAvancar = (botao, margin) => {
		botao.addEventListener("click", ()=>{
		slidepaginas.style.marginLeft= margin+"%";
		numero[current - 1].classList.add('active');
		progressiveChecka[current - 1].classList.add('active');
		progressiveText[current - 1].classList.add('active');
		current +=1;
	});
}

const fazslidefuncaoRecuar = (botao, margin) => {
		botao.addEventListener("click", ()=>{
		slidepaginas.style.marginLeft= margin+"%";
		numero[current - 2].classList.remove('active');
		progressiveChecka[current - 2].classList.remove('active');
		progressiveText[current - 2].classList.remove('active');
		current -=1;
	});
}

fazslidefuncaoAvancar(primeiroNextBtn, -25);
fazslidefuncaoRecuar(segundoPrevBtn, 0);
fazslidefuncaoAvancar(segundoNextBtn, -50);
fazslidefuncaoRecuar(terceiroPrevBtn, -25);
fazslidefuncaoAvancar(terceiroNextBtn, -75);
fazslidefuncaoRecuar(quartoPrevBtn, -50);
fazslidefuncaoAvancar(quartoNextBtn, -100);
fazslidefuncaoRecuar(quintoPrevBtn, -75);

var popupModal = document.querySelector('.bg-modal');


    submitBtn.addEventListener("click",()=>{           
		var popupModal = document.querySelector('.bg-modal');	
	    popupModal.style.display = "flex";	   		
	});

	popupModal.addEventListener("click", ()=>{
		popupModal.style.display = "none";
		window.location='panel.html';

	});



