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

// Array
function imprimir<T>(args:T[]){
    args.forEach(elemento=>console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Alpha', 'Beta', 'Gama'])

imprimir<{nome: string, idade: number}>([
    {nome:'Fulano', idade:22},
    {nome:'Cicrano', idade:23},
    {nome:'Beltrano', idade: 24}
])

console.log('')
type Aluno = {nome: string, idade: number}
imprimir<Aluno>([
    {nome:'Fulano', idade:22},
    {nome:'Cicrano', idade:23},
    {nome:'Beltrano', idade: 24}
])

// Tipo Genérico
type Echo = <T>(data:T) => T // Essa definição lembra uma interface, um protocolo de uso.
const chamarEcho: Echo = echoMelhorado //Função declarada acima
console.log(chamarEcho<string>('Alguma coisa'))


// Classes com Generics
class OperacaoBinaria{
    constructor(
        public operando1: any,
        public operando2: any 
        ){}

    executar(){
        return this.operando1 + this.operando2
    }
}

console.log(new OperacaoBinaria('Bom', 'dia').executar())
console.log(new OperacaoBinaria(3, 7).executar())
console.log(new OperacaoBinaria(3, 'Opa').executar())
console.log(new OperacaoBinaria({}, {}).executar())





