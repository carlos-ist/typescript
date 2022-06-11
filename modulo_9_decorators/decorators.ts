console.log('From ./modulo_9_decorators/decorators.js')

/*
Nota: Decorator é chamado apenas quando a classe é carregada.
Ainda que se instancie objetos, sua execução ocorre na chamada/declaração da classe.
E não durante a instanciação dos objetos.
*/
//@logarClasse
@logarClasseSe(true) //este decorator retorna e chama o decorator @logarClasse
// Quando uma função retorna um decorator, esse tipo de funão chama-se "Factory"
class Eletrodomestico {

    static dado:number

    constructor(
        
        dado2:string
    ){
        
        //dado=1
        dado2='s'
    }

}

//console.log(typeof Eletrodomestico)

function logarClasse(constructor: Function): void{
    console.log(constructor)
}

//retornando decorator vazio, pois retornar Null ocasiona erro compilação no typescript
function decoratorVazio( _:Function){}


// Factory
function logarClasseSe(valor:boolean){
    return valor ? logarClasse : decoratorVazio
}







