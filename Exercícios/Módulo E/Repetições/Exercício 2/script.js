function contar(){
    var in1 = window.document.getElementById('in1')
    var saida = window.document.getElementById('saida')

    if(in1.value.length == '' || in1.value < 0){
        window.alert('[ERRO] - Digite os dados novamente')
    } else{
        var in1 = Number(in1.value)
        var in2 = 0
        var res = " "
        saida.innerHTML = "";

        for(var i = in2; i <= 10; i += 1){
            res += in1 * i + " "
            saida.innerHTML += `${in1} x ${i} = ${res}<br>`;
            res = " "
        }
    }
}
