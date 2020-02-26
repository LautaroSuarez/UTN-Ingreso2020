function mostrar()
{
    var numero = parseInt(prompt("Ingresar un número."));
    var contador = 0;
 
    for (Constante = 2; Constante <= numero/2; Constante++) {

        if (numero % Constante == 0) {

            document.write("Los números divisores son " + Constante + "<br>");
            contador++;
        }
    }

    document.write("La cantidad de numeros divisores es " + contador);



}//FIN DE LA FUNCIÓN