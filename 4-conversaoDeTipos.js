/*
    OBJETIVOS DA AULA:
        - Demonstrar como converter um TIPO em OUTRO TIPO.
*/

const tituloAula = "Trabalhando com Conversão de Tipos";
console.log(tituloAula);

//Conversão EXPLÍCITA do tipo STRING em INTEIRO
console.log(parseInt("2") + parseInt("2")); //Neste contexto, CADA TEXTO será CONVERTIDO EM INTEIRO, e depois serão SOMADOS: '4'

//Conversão IMPLÍCITA do tipo STRING em INTEIRO; em operações de DIVISÃO, um texto é convertido automaticamente.
console.log("10" / "2"); //Neste contexto, CADA TEXTO será CONVERTIDO, e depois teremos a operação de DIVISÃO: '5'
console.log("11" / "2"); //Neste contexto, CADA TEXTO será CONVERTIDO, e depois teremos a operação de DIVISÃO, MAS O RESULTADO SERÁ UM NÚMERO COM PONTO FLUTUANTE (DECIMAL): '5.5'
console.log(6.5); //ATENÇÃO: No JavaScript, as casas decimais são separadas por PONTO '.'.

//RESULTADO INESPERADO: NaN: Not a Number, pois não será possível uma conversão implícita, e uma conversão explícita causaria um erro.
console.log("TEXTO" / "2");