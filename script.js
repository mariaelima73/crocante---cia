//INÍCIO JAVASCRIPT

//Página Home

    //let menu = document.getElementById('catPaes')

    function clicarMenu1() {
        location.href = 'menu.html'
       
        document.querySelector('.paes').style.display = 'block';

       
    }

    function clicarMenu2() {
        location.href = 'menu.html'

         //   let catDoces2 = document.getElementById('catDoces')
         //   let pagdc = document.getElementById('doces')
         //   catDoces2.addEventListener("click", clicarDoces)
         //   pagdc.src = 'doces.html'
    }

    function clicarMenu3() {
        location.href = 'menu.html'

         //   let catDoces2 = document.getElementById('catDoces')
         //   let pagdc = document.getElementById('doces')
         //   catDoces2.addEventListener("click", clicarDoces)
         //   pagdc.src = 'doces.html'
    }

    function clicarMenu4() {
        location.href = 'menu.html'

         //   let catDoces2 = document.getElementById('catDoces')
         //   let pagdc = document.getElementById('doces')
         //   catDoces2.addEventListener("click", clicarDoces)
         //   pagdc.src = 'doces.html'
    }


//Rodando html dentro do html iframe
var catPaes2 = document.getElementById('catPaes')
var pagpa = document.getElementById('paes')
var catDoces2 = document.getElementById('catDoces')
var pagdc = document.getElementById('doces')
var catSalg2 = document.getElementById('catSalg')
var pagsl = document.getElementById('salgados')
var catBeb2 = document.getElementById('catBeb')
var pagbb = document.getElementById('bebidas')

catPaes2.addEventListener("click", clicarPaes)
catDoces2.addEventListener("click", clicarDoces)
catSalg2.addEventListener("click", clicarSalgados)
catBeb2.addEventListener("click", clicarBebidas)

   function clicarPaes() {

    pagpa.src = 'paes.html';
    document.getElementById('paes').style.display = 'block';
    document.getElementById('doces').style.display = 'none';
    document.getElementById('salgados').style.display = 'none';
    document.getElementById('bebidas').style.display = 'none';
   }

   function clicarDoces() {

    pagdc.src = 'doces.html'
    document.getElementById('paes').style.display = 'none'
    document.getElementById('doces').style.display = 'block'
    document.getElementById('salgados').style.display = 'none'
    document.getElementById('bebidas').style.display = 'none'
   }
   
   function clicarSalgados() {

    pagsl.src = 'salgados.html'
    document.getElementById('paes').style.display = 'none'
    document.getElementById('doces').style.display = 'none'
    document.getElementById('salgados').style.display = 'block'
    document.getElementById('bebidas').style.display = 'none'
   }

   function clicarBebidas() {
    
    pagbb.src = 'bebidas.html'
    document.getElementById('paes').style.display = 'none'
    document.getElementById('doces').style.display = 'none'
    document.getElementById('salgados').style.display = 'none'
    document.getElementById('bebidas').style.display = 'block'
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




//carrossel no INDEX
  
const imgs = document.getElementById('img')


