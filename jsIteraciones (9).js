function mostrar()
{

	var contador=0; 
	// declarar variables
	var pregunta = prompt("¿Quieres ingresar un número?");
	var respuesta='si';
	var minimo = 0;
	var maximo = 0;

	while(pregunta == respuesta)
	{
		contador++;
		var num = parseInt(prompt("Ingresar número."));
		var pregunta = prompt("¿Quieres ingresar otro número?");

		if(contador == 1){

		var minimo = num;
		var maximo = num;

		}
		else if(contador > 1 && num > maximo){

			maximo = num;

		}
		else if (contador > 1 && num < minimo){

			minimo = num;

		}
	
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN