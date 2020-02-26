function mostrar()
{
    for (constante = 0; pregunta != "no" ; constante++) {

        var numero = parseInt(prompt("Ingresar un número."));

        if (numero % 2 == 0  && numero != 2) {

            alert("El número ingresado no es primo");

        }
        else {

            alert("El número ingresado es primo");
        
        }

        var pregunta = prompt("¿Quieres ingresar otro número? si/no");

    }

}//FIN DE LA FUNCIÓN