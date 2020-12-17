/*
    OBJETIVOS DA AULA:
        - Demonstrar como trabalhar com expressões condicionais.
        - OBS: Imagine o seguinte contexto:
            - Queremos vender uma passagem para uma das cidades listadas.
            - Só podemos vender uma passagem para quem for maior de idade, ou se estiver acompanhado por um responsável.
*/

const tituloAula = "Trabalhando com Condicionais";
console.log(tituloAula);

const listaDeCidades = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
console.log(`Lista de cidades disponíveis: ${listaDeCidades}`);

const idadeComprador = 17;
const estaAcompanhado = true;

if (idadeComprador >= 18 || estaAcompanhado) {
    const passagemPara = listaDeCidades.splice(1, 1);
    console.log(`Passagem vendida para ${passagemPara}`);
}
else {
    console.log("O comprador é menor de idade e não está acompanhado; venda não permitida.");
}

console.log(`Lista de cidades disponíveis: ${listaDeCidades}`);