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
//@logarClasse
let Eletrodomestico = 
// Quando uma função retorna um decorator, esse tipo de funão chama-se "Factory"
class Eletrodomestico {
    constructor(dado2) {
        //dado=1
        dado2 = 's';
    }
};
Eletrodomestico = __decorate([
    logarClasseSe(true) //este decorator retorna e chama o decorator @logarClasse
    // Quando uma função retorna um decorator, esse tipo de funão chama-se "Factory"
], Eletrodomestico);
//console.log(typeof Eletrodomestico)
function logarClasse(constructor) {
    console.log(constructor);
}
//retornando decorator vazio, pois retornar Null ocasiona erro compilação no typescript
function decoratorVazio(_) { }
// Factory
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
//# sourceMappingURL=decorators.js.map