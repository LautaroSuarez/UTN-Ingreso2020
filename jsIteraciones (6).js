function mostrar()
{

	var contador=0;
    var acumulador = 0;
    var num = parseInt(prompt("Ingresar un número"));
    var suma;
    while (contador >= 0 && contador < 4) {

        num = parseInt(prompt("Ingresar un número nuevamente"));
        acumulador += num;
        contador++;

        document.getElementById('suma').value = acumulador;
        document.getElementById('promedio').value = acumulador / 5;
    }



}//FIN DE LA FUNCIÓN