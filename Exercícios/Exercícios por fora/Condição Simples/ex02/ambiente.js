// 2. Crie um programa que verifique se uma pessoa pode votar
//    - Menor de 16: não vota
//    - Entre 16 e 18 ou maior que 70: voto opcional
//    - Entre 18 e 70: voto obrigatório

let idade = parseInt(prompt('Digite sua idade para saber se você pode ou não votar: '))

if (isNaN(idade) || idade < 0 || idade > 120){
    alert("[ERRO] - Idade inválida! Digite uma idade entre 0 e 120.")
} else {

    let mensagem = `Você tem ${idade} anos. `

    if (idade < 16){
        mensagem += "NÃO pode votar!"
    } else if (idade >= 18 && idade <= 70){
        mensagem += "Seu voto é OBRIGATÓRIO!"
    } else {
        mensagem += "Seu voto é OPCIONAL!"
    }

    alert(mensagem)
}