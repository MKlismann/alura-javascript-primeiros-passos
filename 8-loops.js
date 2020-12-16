console.log(`Trabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvafdor";

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;
let destinoExiste = false;

let contador = 0;
// while (contador < listaDeDestinos.length){
//     if(listaDeDestinos[contador] == destino){
//         destinoExiste = true;
//         break;
//     }
//     contador++;
// }

for (let index = 0; index < listaDeDestinos.length; index++) {
    
    if(listaDeDestinos[index] == destino){
        destinoExiste = true;
        break;
    }
}

if(!destinoExiste){
    console.log("Destino indisponível");
}
else if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
    listaDeDestinos.splice(1, 1);
    temPassagemComprada = true;
}
else {
    console.log("Comprador menor de idade e não está acomanhado; não posso vender");
}

console.log("Destinos possíveis atualizados:");
console.log(listaDeDestinos);