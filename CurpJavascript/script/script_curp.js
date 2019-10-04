function obtenerCurp(){
	var apPaterno = document.formulario_curp.caja_apPaterno.value;
	var apMaterno = document.formulario_curp.caja_apMaterno.value;
	var nombre = document.formulario_curp.caja_nombre.value;
	var anac = document.formulario_curp.caja_anac.value;
	var mes = document.formulario_curp.selectmes.value;
	var dia = document.formulario_curp.selectdia.value;
	var sexo = document.formulario_curp.selectsexo.value;
	var estado = document.formulario_curp.selectestado.value;
	apPaterno = apPaterno.toUpperCase();
	apMaterno = apMaterno.toUpperCase();
	nombre = nombre.toUpperCase();
		
	var curp;
	curp = apPaterno.substr(0, 1);
	var primerVocal;
	var caracter;
	var cont = 1;
	do{
		caracter = apPaterno.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter != 'A' && caracter != 'E' && caracter != 'I' && caracter != 'O' && caracter != 'U' && caracter != ' ');
	curp = curp + primerVocal + apMaterno.substr(0,1) + nombre.substr(0,1) + anac.substr(-2, 2) + mes + dia + sexo + estado;
	
	cont = 1;
	do{
		caracter = apPaterno.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	cont = 1;
	do{
		caracter = apMaterno.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	cont = 1;
	do{
		caracter = nombre.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	var x = Math.floor((Math.random() * 9) + 1);
	var y = Math.floor((Math.random() * 9) + 1);
	curp = curp + x + y;
	alert("La CURP es: " + curp );

	document.write("La CURP es: " + curp);
	
}