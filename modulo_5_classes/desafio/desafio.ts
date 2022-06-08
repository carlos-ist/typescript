console.log("From ./modulo_5_classes/desafio/desafio.js")
console.log('')

// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0
    
    constructor(public nome: string) {} //Não é necessário atribuir o argumento ao atributo.
    
    public buzinar = ():string => 'Pi!'
     
    public acelerar (delta:number): number {
        if(delta > 0) {
            this.velocidade = this.velocidade + delta
        } else {console.log("Valor Inválido Tente Novamente")}
        
        return this.velocidade
    }

}

let moto = new Moto('Ducati')
console.log(moto)
console.log(moto.buzinar())
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
console.log('')

// Exercício 2 - Herança
abstract class Objeto2D {

    constructor(
        protected base: number = 0,
        protected altura: number = 0
    ){} //Não é necessário atribuir o argumento ao atributo.

    protected abstract area ():number
}

class Retangulo extends Objeto2D {

    constructor(base: number, altura: number){
        super(base, altura)
    }

    area = () => this.base * this.altura

}

let retangulo = new Retangulo(5,10)
console.log("Área do Retangulo: " + retangulo.area())
console.log('')

// Exercício 3 - Getters & Setters

class Estagiario {
    constructor(
        private _primeiroNome:string=''
        ){}

    get primeiroNome():string {
        return this._primeiroNome
    }

    set primeiroNome(nome:string) {
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ''
        }
    }

}

let estagiario = new Estagiario()

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
estagiario.primeiroNome = 'Otávio'
console.log(estagiario.primeiroNome)
















