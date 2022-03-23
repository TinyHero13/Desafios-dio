/**
 * Preencher formulários é uma tarefa simples. Mas é preciso conferir se o espaço 
 * reservado para os dados é suficiente.
 * Sua tarefa é, dada uma linha de texto, indicar se ele cabe ou não cabe em um 
 * formulário com 80 caracteres.
 */
let L = gets()

if(L.length <= 80){
  print("YES")
}
else{
  print("NO")
}