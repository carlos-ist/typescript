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


