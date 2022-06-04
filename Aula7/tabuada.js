//Script para imprimir a tabuada de um número, para que imprima tabuada de outro número, basta alterar o valor da variável número 
let quantidade = 10;
let numero = 20;

while(quantidade > 0){
	document.write(numero + " x " + quantidade + " = " + (numero*quantidade) + "<br>");
	
	quantidade = quantidade - 1;
}