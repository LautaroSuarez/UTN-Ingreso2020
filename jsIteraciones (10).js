function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var negativos = 0;
	var positivos = 0;
	var cPositivos = 0;
	var cNegativos = 0;
	var ceros = 0;
	var cNumerosPares = 0;
	var promedioP;
	var promedioN;
	var diferenciasP;
	var diferenciasN;
	var pregunta = prompt("¿Quieres ingresar un número?");
	var respuesta="si";

	while(pregunta == respuesta)
	{
		contador++;
		var num = parseInt(prompt("Ingresar número."));
		pregunta = prompt("¿Quieres ingresar otro número?");

		if(contador == 1){
			positivos = num;

		}
		else if(contador > 1 && num < 0){	

			negativo += num;
			cNegativos++;
		}
		else if(contador > 1 && num > 0){

			positivo += num;
			cPositivos++;

		}
		else {
			ceros++;
			
		}
		if()
	}

	document.write("1- La suma de los negativos es "+negativos+", la suma de los positivos es "+positivos+", la cantidad de positivos es de "+cPositivos+", la cantidad de negativos es de "+cNegativos+", la cantidad de ceros es de "+ceros+", la cantidad de números pares es de "+cNumerosPares+", el promedio de positivos es de "+promedioP+", el promedio de negativos es de "+promedioN+", la diferencia entre positivos y negativos es de "+diferenciasP+", y la diferencia entre negativos y positivos es de: "+diferenciasN);


}//FIN DE LA FUNCIÓN