let num = [5, 8, 2, 9, 3]

/*
num[5] = 6
let tam = num.length
let ord = num.sort()
num.push(120)

console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho do vetor é ${tam}`)
console.log(`A ordem crescente dos elementos é ${ord}`)
*/

/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){ /* Para cada pos em num. Funciona apenas para arrays e objetos */
/*
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)