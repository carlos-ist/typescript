console.log('From ./modulo_9_decorators/decorators.js')

/*
Nota: Decorator é chamado apenas quando a classe é carregada.
Ainda que se instancie objetos, sua execução ocorre na chamada/declaração da classe.
E não durante a instanciação dos objetos.
*/

//@logarClasse
//@logarClasseSe(true) //factory - retorna um decorator
@decorator({a: 'Teste', b: 123}) //Factory que retorna um decorator, imprimi teste ao receber a classe.
class Eletrodomestico {
    constructor(){
        console.log('novo...')
    }
}

//console.log(typeof Eletrodomestico) // apenas comprovando que uma classe em javascript é (retorna) uma function

function logarClasse(constructor:Function){
    console.log(constructor)
}

function decoratorVazio(_:Function){} //Recebe uum parâmetri do tipo "function" (a classe) e não retorna nada...


function logarClasseSe(valor:boolean){
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: {a: string, b?: number}){
    return function(_:Function):void {
        console.log(obj.a + ' ' + obj.b)
    }
}






