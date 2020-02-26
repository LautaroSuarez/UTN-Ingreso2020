function mostrar()
{
    var numero = parseInt(prompt("Ingresar un número."));
    var contador = 0;
 
    for (Constante = 2; Constante <= numero/2; Constante++) {

        if (numero % Constante == 0) {

            alert("Los números divisores son " + Constante );
            contador++;
        }
    }

    alert("La cantidad de numeros divisores es " + contador);



}//FIN DE LA FUNCIÓN