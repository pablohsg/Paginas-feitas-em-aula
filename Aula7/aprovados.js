//Script que apartir das notas que o usuário digitar, o sistema informa se o aluno foi aprovado ou não.
let quantidadeNotas = prompt("Digite a quantidade de notas:");
        
while(quantidadeNotas > 0){
	let nota = prompt("Digite a nota:");

	if(nota >= 60 ){
		alert("Aluno aprovado!");
	}else{
		alert("Aluno reprovado!")
	}

	quantidadeNotas = quantidadeNotas-1;
}