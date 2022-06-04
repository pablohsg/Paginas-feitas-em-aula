// Script que lê notas de vários alunos e mostra a maior nota
let nota = 0;
let maiorNota = 0;
let quantidadeAlunos = 0;

quantidadeAlunos = prompt("Quantidade de alunos:");

while(quantidadeAlunos > 0){
	nota = parseInt(prompt("Digite a nota:"));

	if(maiorNota < nota){
		maiorNota = nota;
	}

	quantidadeAlunos = quantidadeAlunos - 1;
}

alert("A maior nota foi " + maiorNota);