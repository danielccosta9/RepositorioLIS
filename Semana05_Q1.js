let qtd = 0;
function myFunc(mensagem) {
	qtd++
	//Para fazer a encrementação

	console.log(mensagem, `Lista${qtd}`);
	document.getElementById("myList").appendChild(mensagem);
	//Adcionando uma lista no documento com ID "myList"
}

let valor = window.prompt("Digite a quantidade de listas: ");
//Para pedir ao usauario que digite um valor

let creatList = document.createElement("LI");
//Criando uma lista dentro do documento

for(let i = 0; i < valor; i++) {
	myFunc(creatList)
};
