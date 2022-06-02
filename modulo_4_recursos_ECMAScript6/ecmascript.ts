console.log("From ./modulo_4_recursos_ECMAScript6/ecmascript.js");
console.log('');
// let & const
// console.log(variavelNaoDeclarada);
// var variavelNaoDeclarada = '?'; /*hoisting -  o tipo var para variáveis acaba issando a variavel para "topo" da leitura
// desconsiderando o erro de variavel não declarada*/

//var variavelNaoDeclarada = '?'; // no let não ocorre esse Issamento da variável ao topo... logo ocorrerá erro de falta de declaração.

let estaFrio = true

if(estaFrio) {
    //var acao = "colocar casaco" // vai imprimir este valor mesmo fora deste escopo
    let acao = "colocar casaco" // não imprimirá o valor atribuido fora do escopo
    console.log(acao)
}

//console.log(acao)

const cpf: string = '123.456.789.99' // Nota: variável const também é acessível somente dentro de seu contexto, não é por padrão global
//cpf = '789.456.123.11'

console.log(cpf)




