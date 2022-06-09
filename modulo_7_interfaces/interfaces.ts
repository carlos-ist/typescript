console.log('From ./modulo_7_interfaces/interfaces.js')
console.log('')

interface Humano {
    nome: string
    idade?: number // Atributo opcional
    ["abc"]?: true   // Atributo opcional, atributo dinâmico, com propriedade ainda a ser definida
    saudar(sobrenome: string): void
    //saudar?(sobrenome: string): void //O método também pode ser opcional na interface, colocando o interrogação ao lado do nome da função.
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome='Joana'
}

// Object Literals
const pessoa: Humano = {
    nome: 'João',
    idade: 27,

    saudar(sobrenome: string): void {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome)
    }

}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Skywalker')


// Usando Classes...
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) :void {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)


// Interface Função
interface FuncaoCalculo {
    (a: number, b: number) : number
}

let potencia: FuncaoCalculo

potencia = function (base: number, exp: number): number {
    // Math.pow (3,10)
    // 3 ** 10
    // Array(exp).fill(base).reduce((t, a) => t * a)
    return base ** exp
}

console.log(potencia(3,10))

// Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a():void{}
}

class RealAB implements A, B {
    a():void{}
    b():void{}
}

class RealABC implements ABC {
    a():void{}
    b():void{}
    c():void{}
}

abstract class AbstrataABD implements A, B {
    a():void{}
    b():void{}
    abstract d():void
}

