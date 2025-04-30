/*
Crie um objeto pessoa com as propriedades nome, idade e profissao. Exiba uma mensagem no console como:
"João tem 30 anos e é engenheiro."
*/

/*

CÓDIGO QUE FIZ - AINDA NÃO HAVIA VISTO FORMAS DE CRIAR OBJETO

let pessoa = new Object()
pessoa.nome = "João"
pessoa.idade = 30
pessoa.profissao = "engenheiro"

console.log(`${pessoa.nome} tem ${pessoa.idade} anos e é ${pessoa.profissao} `)

*/

/*
FORMA QUE ENCONTREI DE PODER SIMPLIFICAR O CÓDIGO
*/

let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "engenheiro"
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos e é ${pessoa.profissao} `)