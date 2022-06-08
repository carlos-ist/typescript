console.log('From ./modulo_6_modulos_e_namespaces_em_typescript/namespaces/namespaces.js')

namespace Areas {

    const PI = 3.14

    export const circunferencia = (raio: number) => PI * Math.pow(raio,2)
    export const retangulo = (base: number, altura: number) => base * altura

}

const PI = 2.99

console.log("Área Circunferência: " + Areas.circunferencia(10))
console.log("Área Retângulo" + Areas.retangulo(10,20))
console.log('')


