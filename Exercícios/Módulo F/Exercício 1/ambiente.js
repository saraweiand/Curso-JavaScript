function adicionar(){
    let in1 = document.getElementById('in1')
    let saida = document.getElementById('saida')

    if (in1.value == 0 || in1.value.length == '' ){
        window.alert('ERRO - Insira os dados corretamente')
    } else {
        let in1 = Number(in1.value)
        let res = " "
        saida.innerHTML += `Valor ${in1} adicionado.`;
        
    }
}