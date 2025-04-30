/*
Crie uma função saudacao que receba um nome e retorne:
"Olá, [nome]! Bem-vindo(a)."
*/

function saudacao(){
    let nome = prompt("Digite seu nome: ")
    return "Olá " + nome + "! Bem vindo(a)."
}

console.log(saudacao())