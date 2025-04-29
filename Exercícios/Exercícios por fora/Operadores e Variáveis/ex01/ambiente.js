// 1. Crie um programa que calcule a área de um retângulo
//    - Peça ao usuário a base e altura (use prompt)
//    - Armazene em variáveis
//    - Calcule e mostre o resultado


// Solicita a altura
let altura = prompt('Digite a altura do retângulo: ')
// Solicita a base
let base = prompt('Digite a base do retângulo: ')

// Validação se campos forem inseridos incorretamente
if (isNaN(base) || isNaN(altura)){
    alert("[ERRO] - Favor inserir apenas números!")
} else{ // Se campos estiverem inseridos corretamente entra para o cálculo

    //Cálculo da área
    let area = parseFloat(base) * parseFloat(altura) // adicionado parseFloat para conversão do número

    //Exibe o resultado
    alert(`A área do triângulo é: ${area}`)
}