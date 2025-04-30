/*
Crie uma função que receba um número n e exiba no console todos os números pares de 0 até n
*/

function numero(n){
    if (isNaN(n) || n < 0) {
        console.log("[ERRO] - Insira apenas números positivos!")
    } else {
        for (let i = 0; i <= n; i += 2) {
            console.log(i)
        }
    }
}

let numeroDigitado = parseInt(prompt('Digite um número: '))
numero(numeroDigitado)

