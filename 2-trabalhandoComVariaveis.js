/*
    OBJETIVOS DA AULA:
        - Entendendo como trabalhar com variáveis locais, globais e constantes.
        - Entender o que são palavras-chave.
*/

const tituloAula = "Trabalhando com Variáveis";
console.log(tituloAula);

/* 
    O JavaScript é CASE SENSITIVE, ou seja, diferencia letras maipusculas de minúsculas (importante considerar isto ao nomear variáveis).
    Além disto, se alguma palavra-chave for escrita incorretamente (trocando-se minúsculas por maipusuclas, e vice e versa), ocorrerá um erro.
*/
console.log("Um texto qualquer."); //Exibirá corretamente "Um texto qualquer".
//Console.Log("Um texto qualquer."); //Exibirá um erro, pois o correto é 'console', e não 'Console", ou 'log', e não 'Log'.

//Ao declararmos uma variável sem um classificador de escopo, ela será GLOBAL (acessível por todo o programa).
//OBS: Evitar este tipo de declaração; por ser global, em grandes projetos, pode-se perder o controle.
umaVariavelGlobal = 1; 

//LET ou VAR declara uma variável no escopo local; sendo acessível somente entre as chaves "{}" que abrangem seu tercho de código.
let umaVariavelLocalLet = 2;
let umaVariavelLocalVar = 3;

//CONST também é uma variável no escopo local, porém uma vez definida, é IMUTÁVEL.
const umaVariavelLocalConst = 4;

console.log(umaVariavelGlobal);
console.log(umaVariavelLocalLet);
console.log(umaVariavelLocalVar);
console.log(umaVariavelLocalConst);