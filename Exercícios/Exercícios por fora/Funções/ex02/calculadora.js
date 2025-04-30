let n1 = parseFloat(prompt("Digite um número: "))
let n2 = parseFloat(prompt("Digite um segundo número: "))
let escolha = prompt("Digite uma operação entre: 1 - Soma, 2 - Subtração, 3 - Divisão, 4 - Multiplicação")

function calculadora(){

    let opcao = parseInt(escolha)

    if (isNaN(n1) || isNaN(n2)) {
        return "Por favor, digite números válidos!";
    }
    if (opcao == 1){
        let soma = n1 + n2
        return `${n1} + ${n2} é ` + soma
    } else if (opcao == 2){
        let sub = n1 - n2
        return `${n1} - ${n2} é ` + sub
    } else if(opcao == 3){
        let div = n1 / n2
        return `${n1} / ${n2} é ` + div
    } else if {
        let multi = n1 * n2
        return `${n1} * ${n2} é ` + multi
    } else if (opcao >= 1 && opcao <= 4) {
        let multi = n1 * n2;
        return `${n1} * ${n2} é ` + multi;
    } else {
        return "Operação inválida! Escolha de 1 a 4.";
    }
}

console.log(calculadora())