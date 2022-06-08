"use strict";
console.log("From ./modulo_5_classes/classes.js");
console.log('"sourceMap": true" on tsconfig.json');
console.log('');
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
const casamento = new Data; // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
/*
Desafio Produto
Atributos: nome, preco e desconto.
Criar o construtor
Obs 1.: Desconto é opcional (valor padrão 0)
Obs 2.: Criar dois produtos: passando 2 e 3 params
*/
console.log('');
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.precoComDesconto = () => (this.preco - (this.desconto * this.preco)).toFixed(2);
    }
    // Criar método precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto
    resumo() {
        return `Produto: "${this.nome}" custa R$${this.precoComDesconto()}, ${this.desconto * 100}% Off`;
    }
}
const manteiga = new Produto("Margarina Qualy", 6);
console.log(manteiga.resumo());
console.log('');
const geladeira = new Produto("Brastemp", 3000, 0.1);
console.log(geladeira.resumo());
console.log(geladeira.precoComDesconto());
console.log('');
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
    getVelocidadeAtual() {
        return this.velocidadeAtual;
    }
}
const carro1 = new Carro('ford', 'ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log("Velocidade Atual: " + carro1.acelerar());
Array(20).fill(0).forEach(() => carro1.frear());
console.log("Velocidade Atual: " + carro1.frear());
class Ferrari extends Carro {
    /* Obrigatório declarar o constructor da classe Pai no caso abaixo, {marca} será definido por default "Ferrari"
    modelo e velocidadeMaxima serão chamados quando o objeto for instanciado, conforme o que foi definido nos
    argumentos do constructor para a subclasse Ferrari*/
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`Marca: ${f40.marca} Modelo: ${f40.modelo}`);
console.log("Velocidade aumentada em " + f40.acelerar());
console.log("Velocidade reduzida em " + f40.frear());
console.log("Velocidade Atual: " + f40.getVelocidadeAtual());
console.log('');
// Getters & Setters
class Pessoa {
    constructor() {
        /* Convencionalmente, o underline antes de um atributo indica
        que o mesmo possui modificador de acesso "private" */
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
        else {
            console.log("Valor: " + valor + ", idade inválida, tente novamente.");
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(Pessoa);
console.log(pessoa1);
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
console.log('');
// Classe Abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
console.log('');
//# sourceMappingURL=classes.js.map