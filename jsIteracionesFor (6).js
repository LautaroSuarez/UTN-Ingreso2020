function mostrar()
{
    var NumeroPar;
    var NumerosEnPar;
    var Numero = parseInt(prompt("Ingresar un número"));


    for (Incremento = 2; Incremento <= Numero; Incremento+2) {

        NumerosEnPar = Numero % 2;
        
        if (Numero%2 == 0) {

            NumeroPar++;
           
        }

        break;

    }


}//FIN DE LA FUNCIÓN