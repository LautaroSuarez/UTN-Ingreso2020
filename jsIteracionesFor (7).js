function mostrar()
{
    var cont = 0;
    var num = prompt("Número", "Ingresar un número");

    for (var i = 0; i <= num; i++) {

        if ((num % i) == 0) {
            alert("Es divisor: " + i);
            cont++;
        }
    }

    alert("Se encontraron " + cont + " numeros divisores");

}

    /* SOLUCIÓN 2 DE MUA.
    var numero = parseInt(prompt("Ingresar un número."));
    var contador = 0;
 
    for (i = 0; i <= numero/2; i++) {

        if (numero % i == 0) {

            alert("Los números divisores son " + i );
            contador++;
        }
    }

    alert("La cantidad de numeros divisores es " + contador);
    


}//FIN DE LA FUNCIÓN    */