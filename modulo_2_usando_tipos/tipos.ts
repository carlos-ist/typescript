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

// Object Literals --------------

let funcionario2: {
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
  
let funcionario3: {
    supervisores: string[],
    baterPonto: (horas: number) => string
    }

funcionario3 = {
        
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

console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(8))
console.log()
console.log(funcionario3)
console.log(funcionario3.baterPonto(9))

// Criando um tipo funcionário --------------

type funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: funcionario = {
        
    supervisores: ['Beatriz', 'Fonseca'],
    baterPonto(horario: number): string {
            if(horario<=8){
                return "ponto normal"
            }
            else {
                return 'fora do normal'
            }
        }
    }

    console.log(funcionario)
    console.log(funcionario.baterPonto(8))

// Union Types --------------

let nota: number | string = 10 // Variável nota suporta tipos tanto number como string
console.log(`Minha nota é ${nota}`)

nota = '10'
console.log(`Minha nota é ${nota}`)

// Checagem de tipos --------------

let valor = 30

if (typeof valor === "number") {
    console.log("É um number")
} else {
    console.log(typeof valor)
}

// Valores opcionais com tipo Null --------------

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null /*Se um atributo pode ser preenchido ou nulo,
    o tipo null necessita ser declarado nesse caso como Union Type*/
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
}

console.log(contato1)
console.log(contato1.nome)

/* Contudo, se uma variável for iniciada com tipo Null, por padrão
ela será tipada com como tipo Any*/

let telefone = null // = any


// Desafio --------------

console.log('')
console.log('Desafio')
console.log('')

type contaBancaria = {
	saldo: number,  
	depositar: (valor:number) => void
} 

let contaBancaria: contaBancaria = {
    saldo: 3000,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista: { 
	nome: string,
	contaBancaria: contaBancaria,
	contatos: string []
} = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

console.log(correntista.contaBancaria.saldo)
correntista.contaBancaria.depositar(104)
console.log(correntista.contaBancaria.saldo)
console.log(correntista)

