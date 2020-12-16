console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 ||
    estaAcompanhada) {
    console.log("Boa viagem");
    listaDeDestinos.splice(1, 1);
}
else {
    console.log("Comprador menor de idade e não está acomanhado; não posso vender");
}

console.log("Destinos possíveis atualizados:");
console.log(listaDeDestinos);