console.log("Conversão de Tipos");

console.log("ano" + 2020); //Concatenação de strings possui precedência sobre a soma neste caso.
console.log("2" + "2"); //Concatenação de strings

console.log(parseInt("2") + parseInt("2")); // Soma numérica com conversão explícita

console.log("10" / "2"); //Em operações matemáticas com TEXTOS, existe uma conversão implícita.

console.log("11" / "2"); //Tipo flutuante (casas decimais)
console.log(6.5); //Tipo flutuante separado por ponto, e não virgula

console.log("TEXTO" / "2"); //NaN - Not a Number