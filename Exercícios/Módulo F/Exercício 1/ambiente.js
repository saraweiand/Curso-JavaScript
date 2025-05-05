let numerosAdicionados = [] // Array para armazenar os números já adicionados

function adicionar(){
    let in1 = document.getElementById('in1')
    let saida = document.getElementById('saida')
    let valor = Number(in1.value)

    if (isNaN(valor) || valor === 0 || valor > 100){
        window.alert('ERRO - Insira um número entre 1 e 100')
        return;
    }

    if (numerosAdicionados.includes(valor)){
        window.alert('[INVÁLIDO] - Número já adicionado!')
        return;
    }

    numerosAdicionados.push(valor)
    saida.innerHTML += `Valor ${valor} adicionado.<br>`
    in1.value = '' // Limpa o campo de entrada
    in1.focus() // Coloca o foco de volta no input
}

function finalizar(){
    let resultado = document.getElementById('resultado')
    let tamanho = numerosAdicionados.length

     // Verifica se há números cadastrados antes de calcular
     if (tamanho === 0) {
        resultado.innerHTML = "Nenhum número foi adicionado!";
        return;
    }

    let maior = Math.max(...numerosAdicionados) // Correção: usa spread operator (...) para passar os números como argumentos separados
    let menor = Math.min(...numerosAdicionados) // Correção: usa spread operator (...) para passar os números como argumentos separados
    let soma = numerosAdicionados.reduce((total, num) => total + num, 0)
    let media = soma / tamanho
    resultado.innerHTML = `
        Ao todo, temos ${tamanho} números cadastrados.<br>
        O maior valor informado foi ${maior}.<br>
        O menor valor informado foi ${menor}.<br>
        Somando todos os valores, temos ${soma}.<br>
        A média dos valores digitados é ${media.toFixed(2)}.`
}

