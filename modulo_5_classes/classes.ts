console.log("From ./modulo_5_classes/classes.js")
console.log('"sourceMap": true" on tsconfig.json')
console.log('')

class Data {

    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

}

const aniversario = new Data(3,11,1991)
console.log(aniversario)

const casamento = new Data // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)



class DataEsperta {

    constructor(
        public dia: number = 1, 
        public mes: number = 1, 
        public ano: number = 1970 ) {
    
    }

}

const aniversarioEsperto = new DataEsperta(3,11,1991)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

/* 
Desafio Produto
Atributos: nome, preco e desconto.
Criar o construtor
Obs 1.: Desconto é opcional (valor padrão 0)
Obs 2.: Criar dois produtos: passando 2 e 3 params
*/

console.log('')

class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0,
    ) {}
}

let manteiga = new Produto("Qualy", 6)
console.log(manteiga)

let geladeira = new Produto("Brastemp", 3000, (3000*0.1))
console.log(geladeira)



