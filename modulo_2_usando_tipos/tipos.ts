// string --------------
let nome: string = "João"
console.log(nome)

// numbers --------------
let idade: number = 27

//idade = 'ana'
console.log(idade)

// boolean --------------
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

// array --------------
let hobbies: any[] = ['cozinhar','praticar esportes']
console.log(hobbies[0]);
console.log(typeof hobbies)

hobbies = [100]
console.log(hobbies)

//hobbies = 100
//console.log(hobbies)

// Tuplas --------------
let endereco: [string,number] = ["av Principal", 99]
console.log(endereco)


// Enum --------------
enum Cor {
    Cinza, //0
    Verde, //1
    Azul,  //2
    Amarelo = 100,
    Roxo = 15
}

console.log(Cor)

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)


// funções --------------
nome = "josé";
function retornaMeuNome(): string { //setando retorno
    return nome;
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log("Oi");
}

digaOi()

// função como tipo de variável --------------

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

// let calculo // tipo any

let calculo: (numA: number, numB: number) => number

//calculo = digaOi  // função declarada mais acima

calculo = multiplicar /* função declarada logo acima, a função multiplicar
 tem a mesma tipagem e retorno declarada em calculo.*/

console.log(calculo(5,6))

// Objetos e tipos --------------

let usuario = {
    nome: 'joão',
    idade: 27
}

//-
















