//var catDoc = document.getElementById('catDoc')

   // function clicarDoces() {
   //     var URL = "http://127.0.0.1:5500/dc.html"
        
    //    document.getElementById('doce').innerHTML = str.link(URL)

  //  }


  document.querySelectorAll('button').forEach(link => {
    const doce = document.getElementById('doce')
    
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.href)
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = 'http://127.0.0.1:5500/dc.html')
    }
})
    