/*
    OBJETIVOS DA AULA:
        - Demonstrar como trabalhar com operações aritméticas.
*/

const tituloAula = "Trabalhando com Operações Aritméticas";
console.log(tituloAula);

//Podemos escrever as expressões numéricas diretamente...
console.log(2 + 2);

//...Ou atribuir o resultado à uma variável, e utilizá-la depois.
const resultadoPrimeiraoperacao = 2 + 2;
console.log(resultadoPrimeiraoperacao);

//Podemos colocar predecessões nas operações efetuadas: "(10 + 8) * 2"  é diferente de "10 + 8 * 2", pois multiplicação tem predecessão sobre soma.
console.log((10 + 8) * 2);

//Ao utilizarmos operações aritméticas entre números e strings, temos como resultado uma CONCATENAÇÃO
console.log("Este é o ano de " + 2020); //Neste contexto, o TEXTO será CONCATENADO com o NÚMERO: "Este é o ano de 2020"
console.log("2" + "2"); //Neste contexto, o TEXTO será CONCATENADO com o outro TEXTO: "22"