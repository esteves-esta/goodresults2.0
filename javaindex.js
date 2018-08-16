
(function(window, document, undefined){

	window.onload = init;

	function init(){

	// MENU RESPONSIVO (MAX-WIDTH:500PX) ------------------------------------
	// FUNÇÃO DO BOTÃO DE ABRIR A NAVEGAÇAO
	function openNav() {
		document.getElementById("new").style.display = "block";
		document.getElementById("new").className = "overlay";
		document.getElementById("closebtn").style.display = "block";
	}

	// FUNÇÃO DO BOTÃO DE FECHAR A NAVEGAÇAO
	function closeNav() {
		document.getElementById("new").className = "";
		document.getElementById("new").style.display = "none";
		document.getElementById("closebtn").style.display = "none";
	}

	//TODA VEZ QUE A PAGINA MUDA DE LARGURA VERIFICA AS CONDIÇÕES DO IF/ELSE
	//FAZ COM QUE OS LINKS APARECAM NA TELA CHEIA
	//APOS SER CLICADO O BOTAO DE FECHAR
	window.addEventListener('resize', function(event){
		if (window.innerWidth > 768) {
			document.getElementById("new").style.display = "block";
		} 
		else{
			document.getElementById("new").style.display = "none";
		}
	});

	//TRIGGER DE EVENTOS
	//PEGA OS BOTOES E ADICONA O EVENTO E A FUNÇAO
	var btnOpen =  document.getElementById("menu");
	btnOpen.addEventListener("click", openNav);

	var btnClose =  document.getElementById("closebtn");
	btnClose.addEventListener("click", closeNav);

	// PÁGINA DE SUPORTE ------------------------------------
	/*  SUPORTE PERGUNTAS */
	var urlEscola = window.location.href;
	var urlIndex = urlEscola.lastIndexOf("/");
	var urlEnd = urlEscola.substring(urlIndex, urlEscola.length);

	if(urlEnd === "/suporte.html"){

		function abrirPergunta(event){
			if(event.target.nodeName === "H3"){
				var next = event.target.nextElementSibling;
				var btnh3 = event.target;
				if(next.style.display === "block"){
					next.style.display = "none";
					btnh3.style.backgroundColor = "#fff";
				}
				else{
					next.style.display = "block";
					btnh3.style.backgroundColor = "#efefef";

				}
			}	

		}

		var pergunta = document.getElementById("perguntas");
		pergunta.addEventListener("click", abrirPergunta);

		$(window).scroll(function() {

			$('#perguntas h3').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
			});

		});
	}

	if(urlEnd === "/institucional.html"){
	// PÁGINA INSTITUCIONAl ------------------------------------

		$(window).scroll(function() {

			$('#insti-text').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
			});

			$('#insti-img').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
			});

			$('#insti-valores').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("slideRight");
			}
			});

			$('#insti-equipe').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("slideLeft");
			}
			});



			});
	}


	// PÁGINA INDEX ------------------------------------
	/*  INDEX SERVIÇOS ICONES */
	if(urlEnd === "/index.html"){

	// PÁGINA INDEX ------------------------------------
	/* CHAMADA DA FUNÇÃO HEADER TITULO ROTATIVO - Simple Typing CarouseL
	* DE AUTORIA DE Gregory Schier */

	var elements = document.getElementsByClassName('txt-rotate')

	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #CCC }";
	document.body.appendChild(css);

	$(window).scroll(function() {


		$('#nosimg').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
		});

		$('#nostext').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideRight");
			}
		});

		$('#title').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideRight");
			}
		});

		$('.servitens').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+900) {
				$(this).addClass("slideRight");
			}
		});



		$('#clienteimg').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideRight");
			}
		});

		$('#cliente-comentario').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
		});



		$('#home-contatotitle').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
		});

		$('#home-contato').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
		});



	});

	}//final index 


	// PÁGINA PORTIFOLIO ------------------------------------
	if(urlEnd === "/portifolio.html"){

		function hover(event){
			if(event.target.parentElement.id === "grid9"){

				var grid4 = document.getElementById("grid4")
				grid4.style.opacity = '1';
				grid4.style.display = 'block';

			}
			if(event.target.parentElement.id === "grid2"){

				var grid1 = document.getElementById("grid1")
				grid1.style.opacity = '1';
				grid1.style.display = 'block';

			}
		}

		function outHover(event){
			if(event.target.className === "grid over"){
				event.target.style.opacity = '0';
				event.target.style.display = 'none';

			}
		}

		window.addEventListener('resize', function(event){
			if (window.innerWidth > 1000 && window.innerWidth < 1400) {
				var container = document.getElementById("container");
				container.addEventListener("mouseover", hover);
				container.addEventListener("mouseout", outHover);
			} 
		});


		$(window).scroll(function() {

			$('#apresenta').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideRight");
			}
			});



			$('.grid').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
			});

			$('.case').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("expandOpen");
			}
			});

			$('#grid3').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("expandOpen");
			}
			});

		});

	}

	// PÁGINA CONTATO ------------------------------------
	if(urlEnd === "/contato.html"){

		$(window).scroll(function() {

			$('#contato-info').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideRight");
			}
			});



			$('#form2').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideRight");
			}
			});

			$('#map').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideRight");
			}
			});


		});


	}




	}//INIT


	/* FUNÇÃO  HEADER TITULO ROTATIVO - Simple Typing CarouseL
	* DE AUTORIA DE Gregory Schier */
	var TxtRotate = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

		var that = this;
		var delta = 300 - Math.random() * 100;

		if (this.isDeleting) { delta /= 2; }

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function() {
			that.tick();
		}, delta);
	};

})(window, document, undefined);