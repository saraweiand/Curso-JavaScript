function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] - Insira os dados novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                //CRIANÇA
                img.setAttribute('src', 'crianca-h.jpg')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovem-h.jpg')
            } else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'homem.jpg')
            } else{
                //IDOSO
                img.setAttribute('src', 'idoso-h.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                //CRIANÇA
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'mulher.jpg')
            } else{
                //IDOSO
                img.setAttribute('src', 'idosa-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}


