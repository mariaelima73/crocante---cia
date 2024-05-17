//Mudança de imagem no footer 

function trocarImagem() {
    // Verifica a largura da tela
    var largura = window.screen.width;
    // Se a largura da tela for menor que 600 pixels, troca a imagem
    if (largura < 600) {
        document.getElementById('img-footer').src = 'imagens/footer2.png';
    } else {
        document.getElementById('img-footer').src = 'imagens/footer.png';
    }
}
// Chama a função trocarImagem quando o tamanho da tela é alterado
window.addEventListener('resize', trocarImagem);

//----------------------------------------------------------
//Carrossel na HOME

//var slideIndex = 0;
//showSlides();

//function showSlides() {
//  var slides = document.getElementsByClassName("carrossel-item");
// for (var i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
//}
//----------------------------------------------------------
