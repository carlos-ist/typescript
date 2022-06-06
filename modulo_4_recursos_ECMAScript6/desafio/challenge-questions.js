
/*
Desafio Javascript - Módulo 4 - Aula 58

Objetivos Gerais:
 Traduza esses códigos de JavaScript para TypeScript
 Entregue o que os enunciados pedem
 Realize melhorias as quais você vê como necessárias! Fique de olhos
abertos para:
 "Tratamento" para erros
 Variáveis desnecessárias
 Checagem desnecessárias
 const para variáveis imutáveis
*/

// 1 - Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
var dobro = function(valor) {
    return valor * 2
    }
    console.log(dobro(10))

// 2 - Verifique se há espaço para melhorias nesse trecho de código!
var dizerOla = function (nome) {
    if (nome === undefined) { nome = "Pessoa" }
    console.log("Ola, " + nome)
    }
    dizerOla()
    dizerOla("Anna")

// 3 - Dado esse array, imprima o menor valor!
    var nums = [-3, 33, 38, 5]
    console.log('???')

// 4 - Adicione os elementos de nums em array !

    var nums = [-3, 33, 38, 5]
    var array = [55, 20]
    console.log(array)

// 5 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!

    var notas = [8.5, 6.3, 9.4]
    var notas1 = notas[0]
    var notas2 = notas[1]
    var notas3 = notas[2]
    console.log(nota1, nota2, nota3)

    var cientista = {primeiroNome: "Will", experiencia: 12}
    var primeiroNome = cientista.primeiroNome
    var experiencia = cientista.experiencia
    console.log(primeiroNome, experiencia)






















