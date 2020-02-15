function mostrar() {

    var contador = 0;
    var acumulador = 0;
    var respuesta = 'si';
    var num = parseInt(prompt("Ingrese un número"));
    var pregunta = prompt("¿Quieres ingresar otro número?");

    acumulador += num;

    while (contador >= 0 && pregunta == respuesta) {

        num = parseInt(prompt("Ingrese número"));
        pregunta = prompt("¿Quieres ingresar otro número?");

        acumulador += num;

        contador++;

    }
    
    contador++;
        document.getElementById('suma').value = acumulador;
        parseInt(document.getElementById('promedio').value = acumulador / contador);


}//FIN DE LA FUNCIÓN