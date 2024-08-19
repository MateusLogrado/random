let numArray = []

const readlineSync = require("readline-sync")
function leitura(){
    let num1 = readlineSync.question("Digite um numero real: ")
    let num2 = calcula(num1)

    console.log(`num2 = ${num2}`)

    return num1
}

function calcula(num1, num2){
    let numero = Math.floor(num1)
    let numero2 = Math.ceil(3.56)

    console.log(`numero 1: ${numero}`)
    console.log(`numero 2: ${numero2}`)
    return numero
}

leitura()