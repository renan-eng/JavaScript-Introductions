document.getElementById('submit').onclick=function() {
	console.log("Debuging3")
	var validar = validateForm()
	if(validar == false){
		return false;
	}
}


function validateForm() {
	
	var primeiroNome = document.getElementById('primeiroNome');
	var oNome = primeiroNome.value;

	if(oNome != "Renan") {
		console.log("Debuging1")
		var aviso = document.getElementById('target');
		aviso.style.color = "red";
		aviso.innerHTML = "<h2>Escreva Meu Nome!</h2>";
		primeiroNome.select(); //seleciona o texto dentro da tag input para que seja corrigida pelo usuário
		//primeiroNome.focus();


		return	false;
		console.log("Debuging2"); //esse log nunca sera exibido no console pois a função para de ser executada logo após o return
	}
	//Se oNome for igual a Renan vemos que a mensagem abaixo aparece no console.
	console.log("Debuging4");
}