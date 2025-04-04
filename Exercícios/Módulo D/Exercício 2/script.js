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
        if (fsex == 'fem')
    }
}


