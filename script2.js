//Voltar ao topo do index
const botaoVoltarAoTopo = document.getElementById('voltarAoTopo')

botaoVoltarAoTopo.addEventListener('click', () => {
    scrollTo({top: 0, behavior: 'smooth'})
})

addEventListener('scroll', () => {
    if (scrollY > 100) {
        botaoVoltarAoTopo.style.display = 'block';
    } else {
        botaoVoltarAoTopo.style.display = 'none';
    }
})

//-----------------------------------------------------------------------

//TRANSIÇÃO NO INDEX

let time = 1000, 
    currentImageIndex = 0,
    images = document.querySelectorAll("#carrossel img")
    max = images.length

    function nextImage() {
        currentImageIndex++

        if(currentImageIndex >= max)
            currentImageIndex = 0

        images[currentImageIndex].classList.add('selected')
    }

    function start() {
        
    }

window.addEventListener("load", start)