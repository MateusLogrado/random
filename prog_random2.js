const readlineSync = require("readline-sync")

let numArray = []

function gerarAleatorio(num){

    // Math.random() * (max - min) + min => formula do aleatório

    let valor = Math.floor(Math.random() * (num - 0 + 1)) + 0
    return valor
}

function ordenaNumero(a,b){
    return a - b
}

function gravar(){
    console.log(" Digite apenas numeros inteiros entre 1 e 10")
    let num1 = readlineSync.question("Digite um numero inteiro: ")

    if((num1 > 10)||(num1 <= 1)){
        console.log("Valor invalido, digite um numero inteiro de 1 a 10")
    }else{
        for(i=0; i < num1;i++){
        numArray.push(gerarAleatorio(i+10))
    }
}
    console.log("-----------------------")
    console.table(numArray)
    console.log("-----------------------")
    numArray.sort()
    console.log("-----------------------")
    console.table(numArray)
}

gravar()