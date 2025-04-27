function carregar() {
    var frase = window.document.getElementById('frase')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 1
    frase.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#455025'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#F2AD6A'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#0D2748'
    }
}