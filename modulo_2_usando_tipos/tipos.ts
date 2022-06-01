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

let usuário2: { nome: string, idade: number } = {
    nome: "José",
    idade: 27
}


//usuario = {}

/*
usuario = {
    name: 'Maria',
    age: 32
}
*/

console.log(usuario)
console.log(usuário2)

console.log(usuário2.nome)

// Desafio --------------

/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número)
        e retorna uma string.
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/

let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
    } = {
        
        supervisores: ['ana', 'fernando'],
        baterPonto(horario: number): string {
                if(horario<=8){
                    return "ponto normal"
                }
                else {
                    return 'fora do normal'
                }
            }
        }
  
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))
console.log(funcionario.baterPonto(7))







