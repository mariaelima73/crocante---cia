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

//----------------------------------------------------------------------//