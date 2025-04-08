function contar() {
    var in1 = window.document.getElementById('in1')
    var in2 = window.document.getElementById('in2')
    var ipasso = window.document.getElementById('ipasso')
    var res = window.document.getElementById('res')

    if (in1.value.length == 0 || in2.value.length == 0 || ipasso.value.length == 0) {
        window.alert('[ERRO] - Digite os dados corretamente')
    } else {
        while (in1 <= in2) {
            in1 += ipasso
           res.innerHTML = `${in1}`
        }
    }
}