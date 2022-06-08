"use strict";
console.log('From ./modulo_6_modulos_e_namespaces_em_typescript/namespaces/namespaces.js');
var Areas;
(function (Areas) {
    const PI = 3.14;
    Areas.circunferencia = (raio) => PI * Math.pow(raio, 2);
    Areas.retangulo = (base, altura) => base * altura;
})(Areas || (Areas = {}));
const PI = 2.99;
console.log("Área Circunferência: " + Areas.circunferencia(10));
console.log("Área Retângulo" + Areas.retangulo(10, 20));
console.log('');
//# sourceMappingURL=namespaces.js.map