function realizarConversion() {
	
	var num = document.formulario_conversion.caja_decimal.value;
	document.write("El número en Binario es: " + (parseFloat(num).toString(2)));
	document.write("<br> El número en Octal es: " + (parseFloat(num).toString(8)));
	document.write("<br> El número en Hexadecimal es: " + (parseFloat(num).toString(16)));
    
    
}