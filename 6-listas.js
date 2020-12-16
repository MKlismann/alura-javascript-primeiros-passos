console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Belo Horizonte`);

console.log(listaDeDestinos);

const retiradoSaoPaulo = listaDeDestinos.splice(1, 1)
console.log(`Retirado: ${retiradoSaoPaulo}`);

console.log(listaDeDestinos);

console.log(listaDeDestinos[0]);