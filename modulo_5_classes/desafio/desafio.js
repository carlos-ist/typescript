"use strict";
console.log("From ./modulo_5_classes/desafio/desafio.js");
console.log('');
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
        this.buzinar = () => 'Pi!';
    } //Não é necessário atribuir o argumento ao atributo.
    acelerar(delta) {
        if (delta > 0) {
            this.velocidade = this.velocidade + delta;
        }
        else {
            console.log("Valor Inválido Tente Novamente");
        }
        return this.velocidade;
    }
}
let moto = new Moto('Ducati');
console.log(moto);
console.log(moto.buzinar());
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
console.log('');
// Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    } //Não é necessário atribuir o argumento ao atributo.
}
class Retangulo extends Objeto2D {
    constructor(base, altura) {
        super(base, altura);
        this.area = () => this.base * this.altura;
    }
}
let retangulo = new Retangulo(5, 10);
console.log("Área do Retangulo: " + retangulo.area());
console.log('');
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor(_primeiroNome = '') {
        this._primeiroNome = _primeiroNome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
let estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
estagiario.primeiroNome = 'Otávio';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map