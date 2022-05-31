"use strict";
// string
let nome = "João";
console.log(nome);
// numbers
let idade = 27;
//idade = 'ana'
console.log(idade);
// boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
// array
let hobbies = ['cozinhar', 'praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
//hobbies = 100
//console.log(hobbies)
// Tuplas
let endereco = ["av Principal", 99];
console.log(endereco);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Amarelo"] = 100] = "Amarelo";
    Cor[Cor["Roxo"] = 15] = "Roxo";
})(Cor || (Cor = {}));
console.log(Cor);
let minhaCor = Cor.Verde;
console.log(minhaCor);
// funções
nome = "josé";
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
// função como tipo de variável
function multiplicar(numA, numB) {
    return numA * numB;
}
let calculo;
calculo = digaOi; // função declarada mais acima
console.log(calculo()); //redundância a função diga Oi já chama "console.log" no seu escopo.
calculo();
calculo = multiplicar; // função declarada logo acima
console.log(calculo(5, 6));
