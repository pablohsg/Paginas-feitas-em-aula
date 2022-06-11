const mainElemento = document.querySelector("main");

function criaElemento(nome,texto){
    return `<div class="postagem">
                <p>${nome}</p>
                <div class="texto-postagem">
                    <p>${texto}</p>
                </div>
            </div>`;
}

function adicionaElemento(elemento){
    mainElemento.innerHTML = mainElemento.innerHTML + elemento;
}

let postagem1 = criaElemento("Pablo","Um texto qualquer da postagem!");
let postagem2 = criaElemento("Samuel","God of war 2 é muito bom!!!");
let postagem3 = criaElemento("Mylena Alice","tenho 15 anos e moro em vespasiano");
let postagem4 = criaElemento("Gabriel Lucas","Carros 1 é o melhor filme da trilogia ");

adicionaElemento(postagem1);
adicionaElemento(postagem2);
adicionaElemento(postagem3);
adicionaElemento(postagem4);
