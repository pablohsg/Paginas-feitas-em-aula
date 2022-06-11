// 1 passo: definir o escopo da função
/*
função tem:
- a palavra function
- nome da funcao
- abre parentese '('
- parametros da função(0 ou varios, mas se for varios, eu divido por virgula)
- fecha parentese ')'
- abrir uma chave '{'
- digitar todo o programa que eu quero que execute
- fecho uma chave '}'

function nomeDaFuncao(parametro){
   comandos 
}
*/

function positivo(numero){
   if(numero > 0){
       return "Este numero é positivo";
   }else{
       return "Este numero é negativo";
   } 
}