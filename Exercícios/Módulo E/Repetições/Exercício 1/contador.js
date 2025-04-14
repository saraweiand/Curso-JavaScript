function contar() {
    var in1 = window.document.getElementById('in1')
    var in2 = window.document.getElementById('in2')
    var ipasso = window.document.getElementById('ipasso')
    var resElemento = window.document.getElementById('res')

    if (in1.value.length == 0 || in2.value.length == 0 || ipasso.value.length == 0) {
        window.alert('[ERRO] - Digite os dados corretamente!')
    } else {
        var in1 = Number(in1.value)
        var in2 = Number(in2.value)
        var ipasso = Number(ipasso.value)
        var resTexto = " "
        
        if (in1 <= in2){
            for(var i = in1; i <= in2; i += ipasso){
                resTexto += i + " 👉 "
            }
        } else {
            for(var i = in1; i >= in2; i -= ipasso){
                resTexto += i + " 👈 "
            }
        }
        resElemento.innerHTML = resTexto;
    }
}