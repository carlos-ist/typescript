"use strict";
// string --------------
let nome = "João";
console.log(nome);
// numbers --------------
let idade = 27;
//idade = 'ana'
console.log(idade);
// boolean --------------
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
// array --------------
let hobbies = ['cozinhar', 'praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
//hobbies = 100
//console.log(hobbies)
// Tuplas --------------
let endereco = ["av Principal", 99];
console.log(endereco);
// Enum --------------
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Amarelo"] = 100] = "Amarelo";
    Cor[Cor["Roxo"] = 15] = "Roxo";
})(Cor || (Cor = {}));
console.log(Cor);
let minhaCor = Cor.Verde;
console.log(minhaCor);
// funções --------------
nome = "josé";
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
// função como tipo de variável --------------
function multiplicar(numA, numB) {
    return numA * numB;
}
// let calculo // tipo any
let calculo;
//calculo = digaOi  // função declarada mais acima
calculo = multiplicar; /* função declarada logo acima, a função multiplicar
 tem a mesma tipagem e retorno declarada em calculo.*/
console.log(calculo(5, 6));
// Objetos e tipos --------------
let usuario = {
    nome: 'joão',
    idade: 27
};
let usuário2 = {
    nome: "José",
    idade: 27
};
//usuario = {}
/*
usuario = {
    name: 'Maria',
    age: 32
}
*/
console.log(usuario);
console.log(usuário2);
console.log(usuário2.nome);
// Desafio --------------
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número)
        e retorna uma string.
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
// Object Literals --------------
let funcionario2 = {
    supervisores: ['ana', 'fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return "ponto normal";
        }
        else {
            return 'fora do normal';
        }
    }
};
let funcionario3;
funcionario3 = {
    supervisores: ['ana', 'fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return "ponto normal";
        }
        else {
            return 'fora do normal';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(8));
console.log();
console.log(funcionario3);
console.log(funcionario3.baterPonto(9));
let funcionario = {
    supervisores: ['Beatriz', 'Fonseca'],
    baterPonto(horario) {
        if (horario <= 8) {
            return "ponto normal";
        }
        else {
            return 'fora do normal';
        }
    }
};
console.log(funcionario);
console.log(funcionario.baterPonto(8));
// Union Types --------------
let nota = 10; // Variável nota suporta tipos tanto number como string
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// Checagem de tipos --------------
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log(typeof valor);
}
const contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1);
console.log(contato1.nome);
/* Contudo, se uma variável for iniciada com tipo Null, por padrão
ela será tipada com como tipo Any*/
let telefone = null; // = any
// Desafio --------------
console.log('');
console.log('Desafio');
console.log('');
let contaBancaria = {
    saldo: 3000,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
console.log(correntista.contaBancaria.saldo);
correntista.contaBancaria.depositar(104);
console.log(correntista.contaBancaria.saldo);
console.log(correntista);
//# sourceMappingURL=tipos.js.map