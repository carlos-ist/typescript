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
//# sourceMappingURL=classes.js.map