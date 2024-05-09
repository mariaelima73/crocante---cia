//INÍCIO JAVASCRIPT

// Função ir para página quando clicar na categoria

var catPaes = document.getElementById('catPaes')

    function clicarPaes(){
        location.href = 'http://127.0.0.1:5500/paes.html'
    }

var catDoces = document.getElementById('catDoc')

    function clicarDoces(){
        location.href = 'http://127.0.0.1:5500/doces.html'
    }

var catSalgados = document.getElementById('catSalg')

    function clicarSalgados(){
        location.href = 'http://127.0.0.1:5500/salgados.html'
    }

var catBebidas = document.getElementById('catBeb')

    function clicarBebidas(){
        location.href = 'http://127.0.0.1:5500/bebidas.html'
    }

//Página sobre

//Transição no SOBRE---------------------

    function entrar() {
        document.getElementById("sobre")
        sobre.style.opacity = 1;
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

//TRANSIÇÃO SOBRE MOBILE


//Finalizar Pedido









