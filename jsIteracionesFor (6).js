function mostrar()
{
    var NumeroPar = 0;
    var NumerosEnPar;
    var Numero = parseInt(prompt("Ingresar un número"));


    for (Constante = 2; Constante <= Numero; Constante = Constante+ 2) {

        if(Numero%2 == 0) {

        NumerosEnPar = Numero%2 + Constante;

        NumeroPar++;

        document.write("Numeros pares "+NumerosEnPar+"<br>");
        
        }
           
        if (Constante >= Numero){
            break;
        }

    }

    document.write("Cantidad de números pares "+NumeroPar);


}//FIN DE LA FUNCIÓN