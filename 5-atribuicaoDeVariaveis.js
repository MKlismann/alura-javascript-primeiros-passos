/*
    OBJETIVOS DA AULA:
        - Demonstrar como tratar atribuições de variáveis.
*/

const tituloAula = "Trabalhando com Atribuição de Variáveis";
console.log(tituloAula);

//Uma boa prática é trabalhar com CONSTANTES; quando trabalhamos com let, permitimos mudanças de estados em nossa aplicação (é algo complexo que pode desencadear problemas).
let primeiroNome = "Fulano";

//Esta mudança só é possível pois não se trata de uma CONSTANTE
primeiroNome = "Cicrano"

//Outra boa prática é sempre dar nomes sugestivos às variáveis; nomes que identifiquem o que elas realmente representam.
const sobreNome = "Beltrano";

console.log(primeiroNome + " " + sobreNome);
console.log(primeiroNome, sobreNome);

//Abaixo temos uma exemplo com INTERPOLAÇÃO DE STRINGs; note que o texto inicia-se com `, e não com "
console.log(`Meu nome é ${primeiroNome} ${sobreNome}`); //Interpolação de strings

const nomeCompleto = primeiroNome + " " + sobreNome;
console.log(`Meu nome é ${nomeCompleto}`);

//Como a variável abaixo é do tipo LET, e JavaScript é FRACAMENTE TIPADO, não teremos erro (se fosse uma CONSTANTE, teríamos erro).
primeiroNome = 2;