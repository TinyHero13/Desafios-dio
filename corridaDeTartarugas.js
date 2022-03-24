/**
 * A corrida de tartarugas é um esporte que cresceu muito nos últimos anos, fazendo 
 * com que vários competidores se dediquem a capturar tartarugas rápidas, e treina-las 
 * para faturar milhões em corridas pelo mundo. Porém a tarefa de capturar tartarugas não 
 * é uma tarefa muito fácil, pois quase todos esses répteis são bem lentos. Cada tartaruga 
 * é classificada em um nível dependendo de sua velocidade:
 * Nível 1: Se a velocidade é menor que 10 cm/h.
 * Nível 2: Se a velocidade é maior ou igual a 10 cm/h e menor que 20 cm/h.
 * Nível 3: Se a velocidade é maior ou igual a 20 cm/h.
 * Sua tarefa é identificar qual o nível de velocidade da tartaruga mais veloz de um grupo.
 */

 for(let j = 0; j<3;j++)
 {
   let number = parseInt(gets());
   let velocity = gets().split(" ");
   let max = 0;
   let level = 0;
 
   for(i = 0 ; i < number; i++){
     if(max < parseInt(velocity[i])){
       max = parseInt(velocity[i]);
     }
   }
   
   if(max < 10){
     level = 1;
   }
   else if(max >= 10 && max < 20){
     level = 2;
   } 
   else{
     level = 3;
   }
   print(level);
 }