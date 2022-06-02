"use strict";
console.log("From ./modulo_3_compilador/compilador.ts");
// Aulas sobre o "tsconfig.json"
let canal = 'gaveta';
let inscritos = 600000;
//canal = inscritos
console.log('');
console.log(" Propriedade: noEmitOnError: true,");
console.log(" Não permite a transpilação em javascript caso haja erro no Tyoescript");
console.log('');
// propriedade source map
/*
Source Map habilita o mapeamento da página (javascript) para o arquivo typescript, através do arquivo ".js.map"
Logo, quando houver debug no navegador, na aba "sources", é possível analisar a página de acordo com o arquivo typescript.
O navegador não lê o typescript, essa funcionalidade apenas está disponível por causa do mapeamento feipo pelo ".js.map"

Necessita estar descomentado e recebendo true no arquivo tsconfig.json
//  "sourceMap": true,
*/
/*
Propriedade "OutDir", seleciona o diretório de saída para os arquivos javascript de compilação.
Da mesma, forma, "outFile", pode configurar além do diretório o nome do arquivo de saída.


*/
// Documentação 
/*
https://www.typescriptlang.org/tsconfig
https://www.typescriptlang.org/docs/handbook/compiler-options.html

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
https://www.typescriptlang.org/docs/handbook/compiler-options.html

*/ 
