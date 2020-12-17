/*
    OBJETIVOS DA AULA:
        - Demonstrar como trabalhar com laços de repetição.
        - OBS: Imagine o seguinte contexto:
            - Queremos vender uma passagem para uma das cidades listadas.
            - Só podemos vender uma passagem para quem for maior de idade, ou se estiver acompanhado por um responsável.
*/

const tituloAula = "Trabalhando com Laços de Repetição";
console.log(tituloAula);

const listaDeCidades = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
console.log(`Lista de cidades disponíveis: ${listaDeCidades}`);



const idadeComprador = 17;
const estaAcompanhado = false;
const podeComprarPassagem = idadeComprador >= 18 || estaAcompanhado;
const destinoDesejado = "São Paulo";
let passagemDisponivel = false;
let passagemComprada = false;

for (let index = 0; index < listaDeCidades.length; index++) {

    if (listaDeCidades[index] == destinoDesejado) {
        passagemDisponivel = true;
        break;
    }
}

if (!passagemDisponivel) {
    console.log("Destino indisponível.");
}
else if (podeComprarPassagem && passagemDisponivel) {
    const passagemPara = listaDeCidades.splice(1, 1);
    passagemComprada = true;
    console.log(`Passagem vendida para ${passagemPara}`);
}
else {
    console.log("O comprador é menor de idade e não está acompanhado; venda não permitida.");
}

if (passagemComprada) {
    console.log("Boa viagem!!!");
}

console.log(`Lista de cidades disponíveis: ${listaDeCidades}`);