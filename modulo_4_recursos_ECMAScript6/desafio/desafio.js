"use strict";
// 1 - Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// 2 - Verifique se há espaço para melhorias nesse trecho de código!
const dizerOla = (nome = 'Pessoa') => console.log("Ola, " + nome);
dizerOla();
dizerOla("Anna");
/*
const dizerOla = function (nome: string = "Pessoa"): void {
    console.log("Olá, " nome)
}

dizerOla()
dizerOla("Anna")
*/
// 3 - Dado esse array, imprima o menor valor!
let nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// 4 - Adicione os elementos de nums(acima) em array !
let array = [55, 20];
//let array = [55, 20, ...nums]
array.push(...nums);
console.log(array);
// 5 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// 6 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
