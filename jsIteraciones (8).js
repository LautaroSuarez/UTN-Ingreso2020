function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo;

	var num = parseInt(prompt("Ingresar número."));
	var pregunta = prompt("¿Quieres seguir ingresando números?");
	var respuesta='si';

	positivo += num;

	while(pregunta == respuesta && positivo >= 1){

		num = parseInt(prompt("Ingresar otro número."));
		pregunta = prompt("¿Quieres seguir ingresando números?");
		positivo += num;

		parseInt(document.getElementById('suma').value=positivo);
	}

	contador++;


	while(pregunta == respuesta && positivo <= 0){

		num = parseInt(prompt("Ingresar otro número negativo."));
		pregunta = prompt("¿Quieres seguir ingresando números?");
		contador++;
		positivo += num;
		negativo = positivo * contador;

		parseInt(document.getElementById('producto').value=negativo);
	}


}//FIN DE LA FUNCIÓN