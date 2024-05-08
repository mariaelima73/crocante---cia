//INÍCIO JAVASCRIPT

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
    var imagem = document.getElementById('img-footer');

    // Verifica a largura da tela
    var larguraDaTela = document.getElementById('main-footer-container').style.width;

    // Se a largura da tela for menor que 600 pixels, troca a imagem
    if (larguraDaTela < 600) {
        imagem.src = "imagens/footer2.png";
    } else {
        imagem.src = "imagens/footer.png";
    }
    window.addEventListener('resize', trocarImagem);
}

// Chama a função trocarImagem quando o tamanho da tela é alterado



    


//Finalizar Pedido







