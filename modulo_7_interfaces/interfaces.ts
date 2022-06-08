console.log('From ./modulo_7_interfaces/interfaces.js')
console.log('')

function saudarComOla(pessoa: {nome:string}) {
    console.log('Olá, ' + pessoa.nome)
}

const pessoa = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoa)


