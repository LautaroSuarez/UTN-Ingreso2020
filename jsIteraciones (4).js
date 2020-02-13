function mostrar()
{

    var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
    var num = 0;

    while (numero >= num && numero <= 10) {

        document.getElementById("Numero").value = numero;
        num++;
        
    }


}//FIN DE LA FUNCIÓN