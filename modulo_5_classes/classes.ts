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




