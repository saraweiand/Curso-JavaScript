/*
2. Ao clicar no botão:
   - Pegue o valor do input
   - Verifique se é um número par ou ímpar
   - Mostre o resultado no parágrafo
*/

function verificar(){
    // pegando o elemento (string) e convertendo para numeral
    let n1 = document.getElementById('in1')
    

    if (n1.value == 0 || n1.value < 0){
        alert("[ERRO] - Insira um número a partir do número 1!")
    } else if (n1.value % 2 === 0){
        para.innerHTML = `O seu número é PAR!`
    } else {
        para.innerHTML = 'O seu número é ÍMPAR!'
    }
}