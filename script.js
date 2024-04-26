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


//Fazer a imagem aumentar quando passar o mouse

const boxes = document.querySelectorAll(".box-img")

//Iteração sobre cada elemento box

boxes.forEach(box => {
    //Encontrar o elemento img dentro do elemento box atual
    const img = box.querySelector(".img")

    //Adicionar os ouvintes de eventos ao elemento box atual
    box.addEventListener("mousemove", (e) => {

        const x = e.clientX - box.getBoundingClientRect().left
        const y = e.clientY - box.getBoundingClientRect().top

        console.log(x, y)

        img.style.transformOrigin = `${x}px ${y}px`
        img.style.transform = "scale(1.2)"
    })

    box.addEventListener("mouseleave", (e) => {

        img.style.transformOrigin = "center"
        img.style.transform = "scale(1)"
    })

})


//Finalizar Pedido







