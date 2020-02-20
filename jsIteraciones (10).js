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
	var diferenciasPyN = 0;
    
    do {

        var num = parseInt(prompt("Ingresar número."));
        var pregunta = prompt("¿Quieres ingresar otro número?");
        var respuesta = "si";


        if (num > 0) {
            positivos += num;
            cPositivos++;
        }
        else if (num < 0) {
            negativos += num;
            cNegativos++;
        }

        diferenciasPyN = positivos + negativos;

        if (num == 0) {
            ceros++;
        }

        if (num % 2 == 0) {
            cNumerosPares++;
        }

    }
    while (pregunta == respuesta)

    document.write("1- La suma de los negativos es " + negativos + "<br> 2- La suma de los positivos es " + positivos + "<br> 3- La cantidad de números positivos es " + cPositivos + "<br> 4- La cantidad de números negativos es " + cNegativos + "<br> 5- La cantidad de 0 es " + ceros + "<br> 6- La cantidad de números pares es " + cNumerosPares + "<br> 7- El promedio de los positivos es "+ (positivos / cPositivos) + "<br> 8- El promedio de los negativos es " + (negativos / cNegativos) + "<br> 9- La diferencia entre positivos y negativos es " + diferenciasPyN);


}//FIN DE LA FUNCIÓN