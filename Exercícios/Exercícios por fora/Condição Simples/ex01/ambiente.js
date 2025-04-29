// 1. Verifique se um número é positivo, negativo ou zero

let num = parseFloat(prompt('Digite um número para saber se ele é positivo ou negativo: '))

if (isNaN(num)){
    alert("[ERRO] - Insira apenas números!")
} else {

    let mensagem // variável para poder construir a saída gradualmente

    if (num === 0){
        mensagem = `O número ${num} é ZERO`
    } else if (num > 0){
        mensagem = `O número ${num} é POSITIVO`
    } else {
        mensagem = `O número ${num} é NEGATIVO!`
    }

    alert(mensagem)
}