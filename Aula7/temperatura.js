let temperatura = parseInt(prompt("Qual a temperatura?"));

if(temperatura < 10){
	alert("Está frio!");
}else if(temperatura > 30){
	alert("Está calor!");
}else if(temperatura > 10 & temperatura < 30){
	alert("Está uma temperatura agradavel!")
}