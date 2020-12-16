console.log("Atribuição de variáveis");

const idade = 30;
let primeiroNome = "Marlom"; //Embora utilizamos let, é melhor reduzir as mudanças de estado em uma aplicação. Mudança de estados na programação é algo complexo que pode desencadiar em muitos erros.
const sobreNome = "Klismann";

//console.log(nome + " " + sobreNome);
console.log(primeiroNome, sobreNome);

console.log(`Meu nome é ${primeiroNome} ${sobreNome}`); //Interpolação de strings

const nomeCompleto = primeiroNome + sobreNome;
console.log(`Meu nome é ${nomeCompleto}`); //Interpolação de strings

primeiroNome = 2; //Javascript é fracamente tipado.