"use strict";
console.log("From ./modulo_5_classes/classes.js");
console.log('"sourceMap": true" on tsconfig.json');
console.log('');
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
const casamento = new Data; // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
/*
Desafio Produto
Atributos: nome, preco e desconto.
Criar o construtor
Obs 1.: Desconto é opcional (valor padrão 0)
Obs 2.: Criar dois produtos: passando 2 e 3 params
*/
console.log('');
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
let manteiga = new Produto("Qualy", 6);
console.log(manteiga);
let geladeira = new Produto("Brastemp", 3000, (3000 * 0.1));
console.log(geladeira);
//# sourceMappingURL=classes.js.map