function mostrar()
{
    var contadorNumeroPar = 0;
    var contadorNumeroImpar = 0;
    var numero;
    var letra;
    var cantidadCeros = 0;
    var numerosPositivos = 0;
    var numerosNegativos = 0;
    var numeroMaximo = 0;
    var numeroMinimo = 0;
    var letraMaximo = 0;
    var letraMinimo = 0;
    var contador = 0;
    var contadorPositivos = 0;
    var respuesta;

    do {
        contador++;

        letra = prompt("Ingresar una letra.");

        while (!(letra >= "A" && letra <= "Z" || letra >= "a" && letra <= "z")){
        
        alert("Reintentar, ingresar una letra");
        letra = prompt("Ingresar una letra.");

        }

        numero = parseInt(prompt("Ingresar un número entre -100 y 100"));
        
        while (numero < -100 || numero > 100 || isNaN(numero)){

        alert("El numero ingresado es incorrecto, ingresar nuevamente.");
        numero = parseInt(prompt("Ingresar un número entre -100 y 100"));
        }

        if (numero == 0){
            
            cantidadCeros++;
          //  console.log("Toma el contador de 0");
        }

        
        switch (true){

            case (numero%2 == 0):

                contadorNumeroPar++;
              //  console.log("Toma el contador del numero par "+contadorNumeroPar);
                break;

                default:

                contadorNumeroImpar++;
              //  console.log("Toma el contador del numero impar "+contadorNumeroImpar);
                break;
            }


        switch (true){

            case (numero >= 1):

            numerosPositivos = numerosPositivos + numero;
            contadorPositivos++;
         //   console.log("suma los positivos");
            break;

            case (numero <= -1):

            numerosNegativos = numerosNegativos + numero;
         //   console.log("Suma los negativos");
            break;
        }

        if(contador == 1 || numeroMaximo < numero){

            numeroMaximo = numero;
            letraMaximo = letra;
        }

        if (contador == 1 || numeroMinimo > numero){

            numeroMinimo = numero;
            letraMinimo = letra;
    }

        respuesta = prompt("¿Quieres seguir ingresando datos? s/n");

    } while (respuesta == "s");

      document.write("El promedio de todos lo números positivos ingresados es "+ (numerosPositivos/contadorPositivos)+"<br>La suma de todos los números negativos es "+numerosNegativos+"<br>El número máximo es "+numeroMaximo+"<br>La letra máxima es "+letraMaximo+"<br>El número mínimo es "+numeroMinimo+"<br>La letra mínima es "+letraMinimo);

}
