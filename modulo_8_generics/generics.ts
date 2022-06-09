console.log('From ./modulo_8_generics/generics.js')

function echo(objeto:any):any{
    return objeto
}

console.log(echo("joão").length)
console.log(echo(27))
console.log(echo({nome:'João', idade:27}))

console.log('')

// Usando Generics
function echoMelhorado<T>(objeto: T): T{
    return objeto
}

console.log(echoMelhorado("joão").length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome:'João', idade:27}))

console.log('')

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
console.log(avaliacoes)



