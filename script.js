//INÍCIO JAVASCRIPT

//const catPaes = document.getElementById('catPaes')
//let pagPaes 

   // function clicarPaes() {

     //   location.href = 'menu.html#'

      //  pagPaes.src = 'paes.html#'
        
   // }

//Página Home

var catPaes2 = document.getElementById('catPaes')
var pagpa = document.getElementById('paes')
var catDoces2 = document.getElementById('catDoc')
var pagdc = document.getElementById('doces')
var catSalg2 = document.getElementById('catSalg')
var pagsl = document.getElementById('salgados')
var catBeb2 = document.getElementById('catBeb')
var pagbb = document.getElementById('bebidas')

catPaes2.addEventListener("click", clicarPaes)
catDoces2.addEventListener("click", clicarDoces)
catSalg2.addEventListener("click", clicarSalgados)
catBeb2.addEventListener("click", clicarBebidas)


    let menu = document.getElementById('catPaes')

    function clicarMenu () {
        location.href = 'menu.html'
     
            var catPaes2 = document.getElementById('catPaes')
            var pagpa = document.getElementById('paes')
            catPaes2.addEventListener("click", clicarPaes)
            pagdc.src = 'paes.html'
           
    }


//Rodando html dentro do html iframe

   function clicarPaes() {

    pagdc.src = 'paes.html'
   }

   function clicarDoces() {
    
    pagdc.src = 'doces.html'
   }
   
   function clicarSalgados() {

    pagdc.src = 'salgados.html'
   }

   function clicarBebidas() {
    
    pagdc.src = 'bebidas.html'
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


