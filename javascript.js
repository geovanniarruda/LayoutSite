// jQuery do menu de busca com alert da pesquisa ao apertar o Enter (numero 13 é a representação numerica da tecla Enter para os navegadores)
$(document).on('keypress',function(e) {
  if(e.which == 13) {
    let input = $("#busca").val();
      alert(`A busca foi por: ${input}`)
  }
});



// CARROSSEL
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex -1].style.display = "block";  
}


// Menu Hamburguer 
function mostrarMenu() {
  var x = document.getElementById("navegacao");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// Correção de um bug ao ampliar a tela apos ocultar a navegaçao
function exibirNav() {
  let largura = window.innerWidth;

  if (largura > 768) {
    document.getElementById("navegacao").style.display = "flex";
    
  } 
}


// JavaScript Puro do menu de busca
/* function teste() {
let busca = document.getElementById("busca");
let pesquisado = busca.value;

alert(`A busca foi por: ${pesquisado}`)
}*/