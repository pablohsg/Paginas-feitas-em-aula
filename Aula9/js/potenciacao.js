function potenciacao(base,expoente){
    document.write(base);
    let potenciacao = base;

    while(expoente > 1){
        document.write(` x ${base}`);
        potenciacao = potenciacao * base;

        expoente = expoente - 1;
    }

    document.write(` = ${potenciacao}<br>`);
}

potenciacao(2,4);
potenciacao(5,3);
