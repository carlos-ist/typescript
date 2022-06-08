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



class DataEsperta {

    constructor(
        public dia: number = 1, 
        public mes: number = 1, 
        public ano: number = 1970 ) {
    
    }

}

const aniversarioEsperto = new DataEsperta(3,11,1991)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

/* 
Desafio Produto
Atributos: nome, preco e desconto.
Criar o construtor
Obs 1.: Desconto é opcional (valor padrão 0)
Obs 2.: Criar dois produtos: passando 2 e 3 params
*/

console.log('')

class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0,
    ) {}

    // Criar método precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto

    public resumo(): string {
        return `Produto: "${this.nome}" custa R$${this.precoComDesconto()}, ${this.desconto*100}% Off`
    }

    public precoComDesconto = () => (this.preco - (this.desconto * this.preco)).toFixed(2)

}

const manteiga = new Produto("Margarina Qualy", 6)
console.log(manteiga.resumo())
console.log('')

const geladeira = new Produto("Brastemp", 3000, 0.1)
console.log(geladeira.resumo())
console.log(geladeira.precoComDesconto())

console.log('')


class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
        ){}
    
    protected alterarVelocidade(delta: number): number {
       
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima
    
        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }

    public getVelocidadeAtual(): number {
        return this.velocidadeAtual
    }

}

const carro1 = new Carro('ford', 'ka', 185)

Array(50).fill(0).forEach(()=>carro1.acelerar())
console.log("Velocidade Atual: " + carro1.acelerar())

Array(20).fill(0).forEach(()=>carro1.frear())
console.log("Velocidade Atual: " + carro1.frear())

class Ferrari extends Carro {
    /* Obrigatório declarar o constructor da classe Pai no caso abaixo, {marca} será definido por default "Ferrari"
    modelo e velocidadeMaxima serão chamados quando o objeto for instanciado, conforme o que foi definido nos 
    argumentos do constructor para a subclasse Ferrari*/
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)

    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari("F40", 324)
console.log(`Marca: ${f40.marca} Modelo: ${f40.modelo}`)
console.log("Velocidade aumentada em " + f40.acelerar())
console.log("Velocidade reduzida em " + f40.frear())
console.log("Velocidade Atual: " + f40.getVelocidadeAtual())

console.log('')

// Getters & Setters
class Pessoa {

    /* Convencionalmente, o underline antes de um atributo indica
    que o mesmo possui modificador de acesso "private" */
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number){
        if(valor >= 0 && valor <= 120){
            this._idade = valor
        } else {
            console.log("Valor: "+ valor + ", idade inválida, tente novamente.")
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(Pessoa)
console.log(pessoa1)
console.log(pessoa1.idade)


pessoa1.idade = -3
console.log(pessoa1.idade)

// Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

// const m1 = new Matematica()
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))

console.log('')
// Classe Abstrata
abstract class Calculo {
    protected resultado: number = 0
    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t,a) => t + a)
    }
}

class multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t,a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

c1 = new multiplicacao()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

console.log('')







