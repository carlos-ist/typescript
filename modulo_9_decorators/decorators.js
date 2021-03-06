"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('From ./modulo_9_decorators/decorators.js');
/*
Nota: Decorator é chamado apenas quando a classe é carregada.
Ainda que se instancie objetos, sua execução ocorre na chamada/declaração da classe.
E não durante a instanciação dos objetos.
*/
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { } //Recebe uum parâmetri do tipo "function" (a classe) e não retorna nada...
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(Construtor) {
    console.log('Carregado...');
    return class extends Construtor {
        constructor(...args) {
            console.log('Antes');
            super(...args);
            console.log('Depois');
        }
    };
}
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    logarClasse
    //@logarClasseSe(true) //factory - retorna um decorator
    //@decorator({a: 'Teste', b: 123}) //Factory que retorna um decorator, imprimi teste ao receber a classe.
    //@logarObjeto
    ,
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this + "ooo");
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
//# sourceMappingURL=decorators.js.map