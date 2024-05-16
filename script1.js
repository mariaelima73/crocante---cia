//INÍCIO JAVASCRIPT
//------------------------------------------------------------
// Do index para menu

function redirecionar(iframeId) {
    // Redireciona para 2.html com o parâmetro do iframe que deve ser visível
    window.location.href = `menu.html?iframe=${iframeId}`;
}

//-----------------------------------------------------------
// Função para obter o valor de um parâmetro específico da URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Função para ajustar a visibilidade dos iframes com base no parâmetro da URL
function ajustarVisibilidadeIframes() {
    const iframeId = getParameterByName('iframe');
    if (iframeId) {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            iframe.classList.remove('visible');
        });
        const iframeParaMostrar = document.getElementById(iframeId);
        if (iframeParaMostrar) {
            iframeParaMostrar.classList.add('visible');
        }
    }
}

// Chama a função ao carregar a página
window.onload = ajustarVisibilidadeIframes;

//----------------------------------------------------------------------------

//Rodando html dentro do html - iframe
var catPaes2 = document.getElementById('catPaes2')
var pagpa = document.getElementById('iframe1')
var catDoces2 = document.getElementById('catDoces')
var pagdc = document.getElementById('iframe2')
var catSalg2 = document.getElementById('catSalg')
var pagsl = document.getElementById('iframe3')
var catBeb2 = document.getElementById('catBeb')
var pagbb = document.getElementById('iframe4')

catPaes2.addEventListener("click", clicarPaes)
catDoces2.addEventListener("click", clicarDoces)
catSalg2.addEventListener("click", clicarSalgados)
catBeb2.addEventListener("click", clicarBebidas)


function clicarPaes() {

    pagpa.src = 'paes.html';
    document.getElementById('iframe1').style.display = 'block';
    document.getElementById('iframe2').style.display = 'none';
    document.getElementById('iframe3').style.display = 'none';
    document.getElementById('iframe4').style.display = 'none';
}

   function clicarDoces() {

    pagdc.src = 'doces.html'
    document.getElementById('iframe1').style.display = 'none'
    document.getElementById('iframe2').style.display = 'block'
    document.getElementById('iframe3').style.display = 'none'
    document.getElementById('iframe4').style.display = 'none'
   }
   
   function clicarSalgados() {

    pagsl.src = 'salgados.html'
    document.getElementById('iframe1').style.display = 'none'
    document.getElementById('iframe2').style.display = 'none'
    document.getElementById('iframe3').style.display = 'block'
    document.getElementById('iframe4').style.display = 'none'
   }

   function clicarBebidas() {
    
    pagbb.src = 'bebidas.html'
    document.getElementById('iframe1').style.display = 'none'
    document.getElementById('iframe2').style.display = 'none'
    document.getElementById('iframe3').style.display = 'none'
    document.getElementById('iframe4').style.display = 'block'
   }


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

var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("carrossel-item");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}










// Função ir para página quando clicar na categoria

//var catPaes = document.getElementById('catPaes')

    //function clicarPaes(){
    //    location.href = 'http://127.0.0.1:5500/paes.html'
    //}
//Transição no SOBRE---------------------

  //  function entrar() {
   //     document.getElementById("sobre")
   //     sobre.style.opacity = 1;
  //  }



