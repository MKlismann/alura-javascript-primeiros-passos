/*
    OBJETIVOS DA AULA:
        - Demonstrar como trabalhar com listas.
*/

const tituloAula = "Trabalhando com Listas";
console.log(tituloAula);

//Array é um novo tipo de dados, que pode receber uma lista de valores.
const listaDeCidades = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeCidades);

//Para incluir um item na lista.
listaDeCidades.push(`Belo Horizonte`);
console.log(listaDeCidades);

//Para retirar um elemento de uma posição definida na lista (posição, quantidade de elementos retirados)
const elementoRetirado = listaDeCidades.splice(1, 1)
console.log(`Elemento retirado: ${elementoRetirado}`);
console.log(listaDeCidades);

//Para exibir um elemento definido em uma posição na lista
console.log(listaDeCidades[1]);