/**
 * No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 de seu 
 * suprimento de comida disponível todos os dias. Escreva um algoritmo que 
 * leia a capacidade inicial de suprimento de comida (em Kg), e calcule quantos 
 * dias passarão antes que Blobs coma todo esse suprimento até restar um 
 * quilo ou menos.
 */

var n = parseInt(gets());

while (n >= 1 && n <= 1000 ) {
  var c = parseFloat(gets());
  
var dias = 0;
  while ( c > 1 && c <= 1000 ) {
    c = c / 2.0;
    dias++;
  }
  n--;
  print(`${dias}  dias`);
}