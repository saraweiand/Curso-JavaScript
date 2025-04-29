// 2. Crie um conversor de temperatura Celsius para Fahrenheit
//    - Fórmula: F = C × 9/5 + 32
//    - Teste com os valores: 0°C, 25°C, 100°C

// Inserir o valor da temperatura em Celsius
let valor = parseFloat(prompt('Digite a temperatura em °C: '))

// Validação das entradas
if (isNaN(valor)){
    alert("[ERRO] - Por favor, insira apenas números!")
} else {
    // Conversão das temperaturas
    let temp = (valor * 9) / 5 + 32

    // Apresentação do resultado
    alert(`A temperatura ${valor}°C é ${temp}°F`)
}