function imprimeTabuada(numero,quantidade){
    while(quantidade > 0){
        document.write(numero + " x " + quantidade + " = " + (numero*quantidade) + "<br>");
        
        quantidade = quantidade - 1;
    }
}

imprimeTabuada(2,10);

imprimeTabuada(5,10);

imprimeTabuada(10,100);
