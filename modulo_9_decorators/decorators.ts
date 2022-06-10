console.log('From ./modulo_9_decorators/decorators.js')

@logarClasse
class Eletrodomestico {
    constructor(){
        console.log('novo...')
    }

}

//console.log(typeof Eletrodomestico)

function logarClasse(constructor:Function){
    console.log(constructor)
}













