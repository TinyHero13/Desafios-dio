/**
 * Degustação de vinho às escuras é a habilidade de identificar um vinho usando 
 * apenas seus sentidos do olfato e paladar.
 * Durante uma competição de degustação, uma garrafa de vinho é aberta e dividia em 
 * taças para que os cinco competidores possam provar. Eles podem cheiras, saborear e 
 * avaliar a bebida para conseguir identificar qual o tipo do vinho, sendo: (1) Cabernet; 
 * (2) Merlot; (3) Pinot Noir. No final, as respostas são verificadas para determinar o 
 * número de suposições corretas.
 * Dado o qual foi o tipo do vinho e as respostas fornecidas, determine o número de 
 * participantes que receberam a resposta correta.
 */

let opcaoCorreta = gets();
let chutes = gets().split(' ');

let acertos = 0;

for (let chute in chutes){
  if (chutes[chute] == opcaoCorreta){
    acertos += 1;
  }
}

print(acertos);